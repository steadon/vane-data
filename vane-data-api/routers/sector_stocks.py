"""Stocks within a specific sector from EastMoney."""

import json
import logging

from fastapi import APIRouter, Query

from config import EASTMONEY_SECTOR_URL
from routers.limit_pool import build_eastmoney_params, east_code_to_symbol
from utils.http_client import safe_fetch

logger = logging.getLogger(__name__)
router = APIRouter()


@router.get("/sector-stocks")
async def get_sector_stocks(
    code: str = Query(..., description="Sector code, e.g. BK0477"),
):
    """Get stocks within a specific sector."""
    if not code:
        return {"code": 400, "msg": "Missing required parameter: code", "data": None}

    try:
        params = build_eastmoney_params({
            "dpt": "wz.zhyj",
            "fs": f"b:{code}+f:!50",
            "fields": "f2,f3,f4,f12,f14",
            "pn": "1",
            "pz": "100",
            "po": "1",
            "fid": "f3",
        })

        text = await safe_fetch(
            EASTMONEY_SECTOR_URL,
            params=params,
            headers={"Referer": "https://data.eastmoney.com/"},
        )

        if not text:
            return {"code": 502, "msg": "Failed to fetch data from upstream", "data": None}

        try:
            data = json.loads(text)
        except json.JSONDecodeError:
            return {"code": 502, "msg": "Failed to parse upstream response", "data": None}

        diff = ((data.get("data") or {}).get("diff") or [])

        stocks = []
        for item in diff:
            try:
                raw_code = str(item.get("f12", ""))
                stocks.append({
                    "symbol": east_code_to_symbol(raw_code),
                    "code": raw_code,
                    "name": str(item.get("f14", "")),
                    "price": float(str(item.get("f2", "0"))),
                    "change_percent": round(float(str(item.get("f3", "0"))) * 100) / 100,
                })
            except (ValueError, KeyError):
                continue

        return {
            "code": 200,
            "msg": "success",
            "data": {
                "sector_code": code,
                "count": len(stocks),
                "stocks": stocks,
            },
        }
    except Exception as err:
        logger.error("[sector-stocks] Unexpected error: %s", str(err))
        return {"code": 500, "msg": str(err), "data": None}
