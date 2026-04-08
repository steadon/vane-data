"""Stocks within a specific sector.

Source:   EastMoney push2delay clist API.

Caching:
  Cache key → "sector_stocks:{code}"
  Stores    → list[dict] (full stock list for the sector)
  TTL       → 2 min during trading, 1 hr outside.
  Pagination applied in-memory from the cached full list.
"""

import json
import logging

from fastapi import APIRouter, Query

from config import EASTMONEY_SECTOR_URL
from routers.limit_pool import build_eastmoney_params, east_code_to_symbol
from utils.cache import cache, ttl_for
from utils.http_client import safe_fetch

logger = logging.getLogger(__name__)
router = APIRouter()


async def _get_all_sector_stocks(code: str) -> list[dict] | None:
    """Return all stocks for a sector, using cache when valid."""
    cache_key = f"sector_stocks:{code}"
    cached = cache.get(cache_key)
    if cached is not None:
        return cached  # type: ignore[return-value]

    params = build_eastmoney_params({
        "dpt": "wz.zhyj",
        "fs": f"b:{code}+f:!50",
        "fields": "f2,f3,f4,f12,f14",
        "pn": "1",
        "pz": "200",   # fetch up to 200 stocks per sector
        "po": "1",
        "fid": "f3",
    })

    text = await safe_fetch(
        EASTMONEY_SECTOR_URL,
        params=params,
        headers={"Referer": "https://data.eastmoney.com/"},
    )
    if not text:
        return None

    try:
        data = json.loads(text)
    except json.JSONDecodeError:
        return None

    diff = (data.get("data") or {}).get("diff") or []
    if not diff:
        return None

    stocks: list[dict] = []
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

    if not stocks:
        return None

    cache.set(cache_key, stocks, ttl_for("sector_stocks"))
    return stocks


@router.get("/sector-stocks")
async def get_sector_stocks(
    code: str = Query(..., description="Sector code, e.g. BK0477"),
    page: int = Query(1, ge=1, description="Page number (1-based)"),
    page_size: int = Query(20, ge=1, le=100, description="Items per page"),
):
    """Get stocks within a specific sector (paginated).

    The full list is cached (2 min during trading, 1 hr offline).
    Pagination is applied in-memory from the cached full list.
    """
    if not code:
        return {"code": 400, "msg": "Missing required parameter: code", "data": None}

    try:
        stocks = await _get_all_sector_stocks(code)
        if stocks is None:
            return {"code": 502, "msg": "Failed to fetch sector stocks from upstream", "data": None}

        total = len(stocks)
        pages = max(1, (total + page_size - 1) // page_size)
        start = (page - 1) * page_size
        page_stocks = stocks[start: start + page_size]

        return {
            "code": 200,
            "msg": "success",
            "data": {
                "sector_code": code,
                "page": page,
                "page_size": page_size,
                "total": total,
                "pages": pages,
                "stocks": page_stocks,
            },
        }
    except Exception as err:
        logger.error("[sector-stocks] Unexpected error: %s", str(err))
        return {"code": 500, "msg": str(err), "data": None}
