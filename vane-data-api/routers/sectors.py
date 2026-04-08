"""Industry / Concept sector list.

Primary source:  EastMoney push2delay.
Fallback source: EastMoney push2 (no-delay CDN node).

Caching:
  Cache key → "sectors:{type}"
  Stores    → (source: str, all_sectors: list[dict])
  TTL       → 60 s during trading, 30 min outside.
  Pagination applied in-memory from the cached full list.
"""

import json
import logging

from fastapi import APIRouter, Query

from config import EASTMONEY_PUSH_URL, EASTMONEY_SECTOR_URL
from routers.limit_pool import build_eastmoney_params
from utils.cache import cache, ttl_for
from utils.http_client import safe_fetch

logger = logging.getLogger(__name__)
router = APIRouter()


async def _fetch_sectors_from(url: str, fs: str) -> list[dict] | None:
    """Fetch all sectors from the given EastMoney endpoint.

    Returns a list of sector dicts or None on failure.
    """
    params = build_eastmoney_params({
        "dpt": "wz.zhyj",
        "Ession": "",
        "fs": fs,
        "fields": "f2,f3,f4,f12,f14,f104,f105,f106,f107,f128,f140,f136,f20",
        "pn": "1",
        "pz": "200",   # fetch up to 200 so concept boards (100+) are fully covered
        "po": "1",
        "fid": "f3",
    })

    text = await safe_fetch(url, params=params, headers={"Referer": "https://data.eastmoney.com/"})
    if not text:
        return None

    try:
        data = json.loads(text)
    except json.JSONDecodeError:
        return None

    diff = (data.get("data") or {}).get("diff") or []
    if not diff:
        return None

    sectors: list[dict] = []
    for item in diff:
        try:
            f104 = int(str(item.get("f104", "0")))
            f105 = int(str(item.get("f105", "0")))
            f106 = int(str(item.get("f106", "0")))
            f107 = int(str(item.get("f107", "0")))
            sectors.append({
                "code": str(item.get("f12", "")),
                "name": str(item.get("f14", "")),
                "change_percent": round(float(str(item.get("f3", "0"))) * 100) / 100,
                "limit_up_count": f104,
                "stock_count": f104 + f105 + f106 + f107,
                "lead_stock_name": str(item.get("f128", "")),
                "lead_stock_code": str(item.get("f140", "")),
                "lead_stock_change": round(float(str(item.get("f136", "0"))) * 100) / 100,
                "market_cap": float(str(item.get("f20", "0"))),
            })
        except (ValueError, KeyError):
            continue

    return sectors if sectors else None


async def _get_all_sectors(sector_type: str, fs: str) -> tuple[str, list[dict]] | None:
    """Return (source, sectors) from cache or upstream."""
    cache_key = f"sectors:{sector_type}"
    cached = cache.get(cache_key)
    if cached is not None:
        return cached  # type: ignore[return-value]

    sectors = await _fetch_sectors_from(EASTMONEY_SECTOR_URL, fs)
    source = "eastmoney"

    if sectors is None:
        logger.warning("[sectors] Primary endpoint failed, trying alternate push endpoint")
        sectors = await _fetch_sectors_from(EASTMONEY_PUSH_URL, fs)
        source = "eastmoney_push"

    if sectors is None:
        return None

    result: tuple[str, list[dict]] = (source, sectors)
    cache.set(cache_key, result, ttl_for("sectors"))
    return result


@router.get("/sectors")
async def get_sectors(
    type: str = Query("industry", description="Type: industry or concept"),
    page: int = Query(1, ge=1, description="Page number (1-based)"),
    page_size: int = Query(20, ge=1, le=100, description="Items per page"),
):
    """Get industry or concept sector list (paginated).

    The full list is cached (60 s during trading, 30 min offline).
    Pagination is applied in-memory from the cached full list.
    """
    fs_map = {
        "industry": "m:90+t:2+f:!50",
        "concept":  "m:90+t:3+f:!50",
    }
    if type not in fs_map:
        return {"code": 400, "msg": 'Invalid type. Must be "industry" or "concept"', "data": None}

    try:
        result = await _get_all_sectors(type, fs_map[type])
        if result is None:
            return {"code": 502, "msg": "Failed to fetch sector data from upstream", "data": None}

        source, sectors = result
        total = len(sectors)
        pages = max(1, (total + page_size - 1) // page_size)
        start = (page - 1) * page_size
        page_sectors = sectors[start: start + page_size]

        return {
            "code": 200,
            "msg": "success",
            "data": {
                "type": type,
                "page": page,
                "page_size": page_size,
                "total": total,
                "pages": pages,
                "source": source,
                "sectors": page_sectors,
            },
        }
    except Exception as err:
        logger.error("[sectors] Unexpected error: %s", str(err))
        return {"code": 500, "msg": str(err), "data": None}
