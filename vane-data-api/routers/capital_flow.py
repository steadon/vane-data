"""Capital flow data (main force / retail) from EastMoney."""

import json
import logging
import time

from fastapi import APIRouter, Query

from config import EASTMONEY_CAPITAL_FLOW_URL
from routers.kline import parse_symbol
from utils.http_client import safe_fetch

logger = logging.getLogger(__name__)
router = APIRouter()


@router.get("/capital-flow")
async def get_capital_flow(
    symbol: str = Query(..., description="Stock symbol, e.g. sh600519 or 600519"),
    days: int = Query(10, ge=1, le=30, description="Number of days (1-30)"),
):
    """Get capital flow data."""
    if not symbol:
        return {"code": 400, "msg": "Missing required parameter: symbol", "data": None}

    try:
        market, code = parse_symbol(symbol)
        secid = f"1.{code}" if market == "sh" else f"0.{code}"

        params = {
            "lmt": str(days),
            "klt": "101",
            "secid": secid,
            "fields1": "f1,f2,f3,f7",
            "fields2": "f51,f52,f53,f54,f55,f56,f57,f58,f59,f60,f61,f62,f63,f64,f65",
            "_": str(int(time.time() * 1000)),
        }

        text = await safe_fetch(
            EASTMONEY_CAPITAL_FLOW_URL,
            params=params,
            headers={"Referer": "https://data.eastmoney.com/"},
        )

        if not text:
            return {"code": 502, "msg": "Failed to fetch capital flow from upstream", "data": None}

        # Strip "qt=" prefix if present
        json_str = text
        if text.strip().startswith("qt="):
            json_start = text.find("{")
            json_end = text.rfind("}")
            if json_start == -1 or json_end == -1:
                return {"code": 502, "msg": "Invalid upstream response format", "data": None}
            json_str = text[json_start:json_end + 1]

        try:
            parsed = json.loads(json_str)
        except json.JSONDecodeError:
            return {"code": 502, "msg": "Failed to parse upstream response", "data": None}

        upstream_data = parsed.get("data") or {}
        klines = upstream_data.get("klines") or []
        name = upstream_data.get("name") or ""

        if not klines:
            return {
                "code": 200,
                "msg": "success",
                "data": {
                    "symbol": symbol,
                    "name": name,
                    "total_main_net": 0,
                    "days": 0,
                    "flows": [],
                },
            }

        # Parse klines
        # Format: "date,f51,f52,f53,f54,f55,f56,f57,f58,f59,f60,f61,f62,f63,f64,f65"
        flows = []
        for kline in klines:
            p = kline.split(",")
            if len(p) < 6:
                continue

            main_net = float(p[5])
            if main_net != main_net:  # NaN check
                continue

            flows.append({
                "date": p[0] or "",
                "main_net": main_net,
                "super_large_net": float(p[4]) if len(p) > 4 else 0,
                "large_net": float(p[3]) if len(p) > 3 else 0,
                "mid_net": float(p[2]) if len(p) > 2 else 0,
                "small_net": float(p[1]) if len(p) > 1 else 0,
                "retail_small_net": float(p[6]) if len(p) > 6 else 0,
                "retail_mid_net": float(p[9]) if len(p) > 9 else 0,
                "retail_large_net": float(p[12]) if len(p) > 12 else 0,
            })

        total_main_net = sum(f["main_net"] for f in flows)

        return {
            "code": 200,
            "msg": "success",
            "data": {
                "symbol": symbol,
                "name": name,
                "total_main_net": round(total_main_net / 100) / 100,
                "days": len(flows),
                "flows": flows,
            },
        }
    except Exception as err:
        logger.error("[capital-flow] Unexpected error: %s", str(err))
        return {"code": 500, "msg": str(err), "data": None}
