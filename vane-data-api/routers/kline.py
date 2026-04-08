"""K-Line (candlestick) data from Tencent Finance."""

import json
import logging
import re

from fastapi import APIRouter, Query

from config import TENCENT_KLINE_URL
from utils.http_client import safe_fetch

logger = logging.getLogger(__name__)
router = APIRouter()


def parse_symbol(symbol: str) -> tuple[str, str]:
    """
    Parse stock symbol into market prefix and code.
    e.g. "sh600519" -> ("sh", "600519")
         "600519"   -> ("sh", "600519")
         "000001"   -> ("sz", "000001")
    """
    s = symbol.strip().lower()
    if s.startswith("sh") or s.startswith("sz"):
        return s[:2], s[2:]
    code = s
    if code.startswith("6"):
        return "sh", code
    return "sz", code


@router.get("/kline")
async def get_kline(
    symbol: str = Query(..., description="Stock symbol, e.g. sh600519 or 600519"),
    period: str = Query("day", description="Period: day, week, month"),
    adjust: str = Query("qfq", description="Adjust: qfq, hfq, none"),
    start_date: str = Query("", description="Start date, e.g. 20240101"),
    end_date: str = Query("", description="End date, e.g. 20241231"),
    count: str = Query("320", description="Number of bars to return"),
):
    """Get K-line candlestick data."""
    if not symbol:
        return {"code": 400, "msg": "Missing required parameter: symbol", "data": None}

    try:
        market, code = parse_symbol(symbol)

        fq_map = {"qfq": "qfq", "hfq": "hfq", "none": ""}
        fq = fq_map.get(adjust, adjust)

        params = {
            "_var": f"kline_{period}{fq}",
            "param": f"{market}{code},{period},{start_date},{end_date},{count},{fq}",
        }

        text = await safe_fetch(TENCENT_KLINE_URL, params=params)
        if not text:
            return {"code": 502, "msg": "Failed to fetch data from upstream", "data": None}

        # Strip JS variable wrapper: kline_dayqfq={...} or var kline_dayqfq=...
        json_str = re.sub(
            r"^(?:var\s+)?kline_\w+\s*=\s*", "", text.strip()
        )
        json_str = re.sub(r";\s*$", "", json_str)

        try:
            data = json.loads(json_str)
        except json.JSONDecodeError:
            return {"code": 502, "msg": "Failed to parse upstream response", "data": None}

        if data.get("code") != 0:
            return {
                "code": 502,
                "msg": f"Upstream returned error: code={data.get('code')} msg={data.get('msg')}",
                "data": None,
            }

        # Navigate: data[market+code][{fq}{period}]
        key = f"{market}{code}"
        stock_data = (data.get("data") or {}).get(key, {})
        fq_key = f"{fq}{period}" if fq else period
        qfq_list = stock_data.get(fq_key, [])

        # Extract stock name from qt field
        qt_info = (stock_data.get("qt") or {}).get(key, [])
        name = str(qt_info[1]) if len(qt_info) > 1 else ""

        # Parse bars
        bars = []
        for item in qfq_list:
            if len(item) < 6:
                continue

            # item[6] may be a dict (dividend info from Tencent API) instead of amount
            amount = 0
            if len(item) > 6 and isinstance(item[6], (int, float, str)):
                try:
                    amount = float(item[6])
                except (ValueError, TypeError):
                    pass

            bars.append({
                "date": str(item[0]),
                "open": float(item[1]),
                "close": float(item[2]),
                "high": float(item[3]),
                "low": float(item[4]),
                "volume": float(item[5]),
                "amount": amount,
            })

        return {
            "code": 200,
            "msg": "success",
            "data": {
                "symbol": symbol,
                "name": name,
                "period": period,
                "adjust": adjust,
                "count": len(bars),
                "bars": bars,
            },
        }
    except Exception as err:
        logger.error("[kline] Unexpected error: %s", str(err))
        return {"code": 500, "msg": str(err), "data": None}
