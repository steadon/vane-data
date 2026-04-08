"""Limit-up / Limit-down stock pool from EastMoney."""

import json
import logging
from datetime import datetime

from fastapi import APIRouter, Query

from config import EASTMONEY_SECTOR_URL
from routers.kline import parse_symbol
from utils.http_client import safe_fetch

logger = logging.getLogger(__name__)
router = APIRouter()


def east_code_to_symbol(code: str) -> str:
    """Convert EastMoney bare code to standard symbol."""
    c = code.strip()
    if c.startswith("0") or c.startswith("3"):
        return f"sz{c}"
    return f"sh{c}"


def build_eastmoney_params(overrides: dict) -> dict:
    """Build EastMoney common parameters."""
    import time
    return {
        "ut": "7eea3edcaed734bea9telecast",
        "np": "1",
        "fltt": "2",
        "invt": "2",
        "_": str(int(time.time() * 1000)),
        **overrides,
    }


@router.get("/limit-pool")
async def get_limit_pool(
    type: str = Query("limit_up", description="Type: limit_up or limit_down"),
):
    """Get limit-up or limit-down stock pool."""
    if type not in ("limit_up", "limit_down"):
        return {"code": 400, "msg": 'Invalid type. Must be "limit_up" or "limit_down"', "data": None}

    try:
        sort_order = "1" if type == "limit_up" else "0"
        all_stocks = []

        for page in [1, 2, 3]:
            params = build_eastmoney_params({
                "fs": "m:0+t:6,m:0+t:80,m:0+t:13,m:1+t:2,m:1+t:23",
                "fields": "f2,f3,f6,f8,f12,f14",
                "pn": str(page),
                "pz": "100",
                "po": sort_order,
                "fid": "f3",
            })

            text = await safe_fetch(
                EASTMONEY_SECTOR_URL,
                params=params,
                headers={"Referer": "https://data.eastmoney.com/"},
            )
            if not text:
                continue

            try:
                data = json.loads(text)
            except json.JSONDecodeError:
                continue

            diff = ((data.get("data") or {}).get("diff") or [])

            for item in diff:
                try:
                    code = str(item.get("f12", ""))
                    change = float(str(item.get("f3", "0")))

                    is_limit = False
                    if type == "limit_up":
                        if code.startswith("3") or code.startswith("688"):
                            is_limit = change >= 19.5
                        else:
                            is_limit = change >= 9.8
                    else:
                        if code.startswith("3") or code.startswith("688"):
                            is_limit = change <= -19.5
                        else:
                            is_limit = change <= -9.8

                    if not is_limit:
                        continue

                    all_stocks.append({
                        "symbol": east_code_to_symbol(code),
                        "name": str(item.get("f14", "")),
                        "price": float(str(item.get("f2", "0"))),
                        "change_percent": round(change * 100) / 100,
                        "amount": float(str(item.get("f6", "0"))),
                        "turnover_rate": round(float(str(item.get("f8", "0"))) * 100) / 100,
                    })
                except (ValueError, KeyError):
                    continue

        # Deduplicate by symbol
        seen = set()
        unique_stocks = []
        for s in all_stocks:
            if s["symbol"] not in seen:
                seen.add(s["symbol"])
                unique_stocks.append(s)

        # Sort
        if type == "limit_up":
            unique_stocks.sort(key=lambda x: x["change_percent"], reverse=True)
        else:
            unique_stocks.sort(key=lambda x: x["change_percent"])

        stocks = unique_stocks[:50]

        today = datetime.utcnow()
        date_str = f"{today.year}-{today.month:02d}-{today.day:02d}"

        return {
            "code": 200,
            "msg": "success",
            "data": {
                "type": type,
                "date": date_str,
                "count": len(stocks),
                "stocks": stocks,
            },
        }
    except Exception as err:
        logger.error("[limit-pool] Unexpected error: %s", str(err))
        return {"code": 500, "msg": str(err), "data": None}
