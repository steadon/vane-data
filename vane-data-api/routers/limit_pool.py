"""Limit-up / Limit-down stock pool.

Primary source:  EastMoney push2delay — 3 pages fetched in parallel.
Fallback source: Sina Finance getHQNodeData — 4 market nodes fetched in parallel,
                 results filtered by daily-limit threshold.

Caching:
  Cache key  → "limit_pool:{type}"
  Stores     → (source: str, sorted_deduped_stocks: list[dict])
  TTL        → 30 s during trading, 5 min outside trading.
  Pagination → applied in-memory from the cached full list.
"""

import asyncio
import json
import logging
import time
from datetime import datetime, timezone

from fastapi import APIRouter, Query

from config import EASTMONEY_SECTOR_URL, SINA_MARKET_URL
from utils.cache import cache, ttl_for
from utils.http_client import safe_fetch

logger = logging.getLogger(__name__)
router = APIRouter()


# ---------------------------------------------------------------------------
# Helpers shared by other routers (sectors, sector_stocks, stock_detail)
# ---------------------------------------------------------------------------

def east_code_to_symbol(code: str) -> str:
    """Convert EastMoney bare code to standard symbol (e.g. '600519' → 'sh600519')."""
    c = code.strip()
    if c.startswith("0") or c.startswith("3"):
        return f"sz{c}"
    return f"sh{c}"


def build_eastmoney_params(overrides: dict) -> dict:
    """Merge caller-supplied params with EastMoney's mandatory request tokens."""
    return {
        "ut": "7eea3edcaed734bea9telecast",
        "np": "1",
        "fltt": "2",
        "invt": "2",
        "_": str(int(time.time() * 1000)),
        **overrides,
    }


def _hit_limit(code: str, change: float, pool_type: str) -> bool:
    """Return True if the stock has hit its daily price limit.

    ChiNext (3xxxxx) and STAR Market (688xxx) have a ±20 % limit;
    main-board stocks (SH/SZ) have a ±10 % limit.
    Thresholds are set slightly inside the limit (±9.8 % / ±19.5 %) to
    tolerate floating-point imprecision in the upstream data.
    """
    high_limit_board = code.startswith("3") or code.startswith("688")
    if pool_type == "limit_up":
        return change >= (19.5 if high_limit_board else 9.8)
    return change <= (-19.5 if high_limit_board else -9.8)


# ---------------------------------------------------------------------------
# EastMoney primary source
# ---------------------------------------------------------------------------

async def _fetch_em_page(page: int, sort_order: str, pool_type: str) -> list[dict]:
    """Fetch a single page from the EastMoney clist API."""
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
        return []
    try:
        data = json.loads(text)
    except json.JSONDecodeError:
        return []

    stocks: list[dict] = []
    for item in (data.get("data") or {}).get("diff") or []:
        try:
            code = str(item.get("f12", ""))
            change = float(str(item.get("f3", "0")))
            if not _hit_limit(code, change, pool_type):
                continue
            stocks.append({
                "symbol": east_code_to_symbol(code),
                "name": str(item.get("f14", "")),
                "price": float(str(item.get("f2", "0"))),
                "change_percent": round(change * 100) / 100,
                "amount": float(str(item.get("f6", "0"))),
                "turnover_rate": round(float(str(item.get("f8", "0"))) * 100) / 100,
            })
        except (ValueError, KeyError):
            continue
    return stocks


async def _fetch_eastmoney(pool_type: str) -> list[dict]:
    """Fetch 3 pages from EastMoney in parallel and return all matching stocks."""
    sort_order = "1" if pool_type == "limit_up" else "0"
    pages = await asyncio.gather(
        *[_fetch_em_page(p, sort_order, pool_type) for p in [1, 2, 3]],
        return_exceptions=True,
    )
    all_stocks: list[dict] = []
    for result in pages:
        if isinstance(result, list):
            all_stocks.extend(result)
    return all_stocks


# ---------------------------------------------------------------------------
# Sina Finance fallback
# ---------------------------------------------------------------------------

async def _fetch_sina_node(node: str, high_limit: bool, pool_type: str) -> list[dict]:
    """Fetch and filter limit stocks from one Sina Finance market node.

    Sina's ``changepercent`` is already in percentage points (9.80 = 9.80 %).
    Results are sorted by changepercent, so iteration stops early once the
    threshold is passed.

    Nodes:
      ssa  — 上证A股  (±10 % limit board)
      sza  — 深证A主板 (±10 % limit board)
      cyba — 创业板   (±20 % limit board)
      kcba — 科创板   (±20 % limit board)
    """
    is_up = pool_type == "limit_up"
    threshold = (19.5 if is_up else -19.5) if high_limit else (9.8 if is_up else -9.8)

    text = await safe_fetch(
        SINA_MARKET_URL,
        params={
            "page": "1",
            "num": "200",
            "sort": "changepercent",
            "asc": "0" if is_up else "1",
            "node": node,
            "_s_r_a": "page",
        },
        headers={"Referer": "https://finance.sina.com.cn/"},
        force_gbk=True,
    )
    if not text:
        return []

    try:
        items = json.loads(text.strip())
        if not isinstance(items, list):
            return []
    except json.JSONDecodeError:
        return []

    stocks: list[dict] = []
    for item in items:
        try:
            change = float(item.get("changepercent") or "0")
            if is_up and change < threshold:
                break   # sorted descending — no more matches
            if not is_up and change > threshold:
                break   # sorted ascending — no more matches

            turnover_raw = item.get("turnoverratio") or "0"
            turnover = 0.0
            if turnover_raw and turnover_raw != "-":
                try:
                    turnover = float(turnover_raw)
                except ValueError:
                    pass

            stocks.append({
                "symbol": str(item.get("symbol") or ""),
                "name": str(item.get("name") or ""),
                "price": float(str(item.get("trade") or "0") or "0"),
                "change_percent": round(change * 100) / 100,
                "amount": float(str(item.get("amount") or "0") or "0"),
                "turnover_rate": round(turnover * 100) / 100,
            })
        except (ValueError, KeyError, TypeError):
            continue
    return stocks


async def _fetch_sina(pool_type: str) -> list[dict]:
    """Fetch from all 4 Sina nodes in parallel."""
    nodes = [
        ("ssa",  False),
        ("sza",  False),
        ("cyba", True),
        ("kcba", True),
    ]
    results = await asyncio.gather(
        *[_fetch_sina_node(n, h, pool_type) for n, h in nodes],
        return_exceptions=True,
    )
    all_stocks: list[dict] = []
    for result in results:
        if isinstance(result, list):
            all_stocks.extend(result)
    return all_stocks


# ---------------------------------------------------------------------------
# Cache-aware loader
# ---------------------------------------------------------------------------

async def _get_full_list(pool_type: str) -> tuple[str, list[dict]]:
    """Return the full sorted+deduped limit-pool list, reading from cache when valid.

    Returns: (source_label, stocks_list)
    """
    cache_key = f"limit_pool:{pool_type}"
    cached = cache.get(cache_key)
    if cached is not None:
        return cached  # type: ignore[return-value]

    stocks = await _fetch_eastmoney(pool_type)
    source = "eastmoney"
    if not stocks:
        logger.warning("[limit-pool] EastMoney returned no data, falling back to Sina Finance")
        stocks = await _fetch_sina(pool_type)
        source = "sina"

    # Deduplicate by symbol, preserving order (already sorted by upstream)
    seen: set[str] = set()
    unique: list[dict] = []
    for s in stocks:
        if s["symbol"] not in seen:
            seen.add(s["symbol"])
            unique.append(s)
    # Re-sort for safety (sources may have returned unsorted chunks)
    unique.sort(key=lambda x: x["change_percent"], reverse=(pool_type == "limit_up"))

    result: tuple[str, list[dict]] = (source, unique)
    cache.set(cache_key, result, ttl_for("limit_pool"))
    return result


# ---------------------------------------------------------------------------
# Router
# ---------------------------------------------------------------------------

@router.get("/limit-pool")
async def get_limit_pool(
    type: str = Query("limit_up", description="Type: limit_up or limit_down"),
    page: int = Query(1, ge=1, description="Page number (1-based)"),
    page_size: int = Query(20, ge=1, le=100, description="Items per page"),
):
    """Get limit-up or limit-down stock pool (paginated).

    The full list is cached server-side (30 s during trading, 5 min offline).
    Pagination is applied in-memory — changing the page does not trigger a
    fresh upstream fetch while the cache is still valid.
    """
    if type not in ("limit_up", "limit_down"):
        return {"code": 400, "msg": 'Invalid type. Must be "limit_up" or "limit_down"', "data": None}

    try:
        source, stocks = await _get_full_list(type)

        total = len(stocks)
        pages = max(1, (total + page_size - 1) // page_size)
        start = (page - 1) * page_size
        page_stocks = stocks[start: start + page_size]

        today = datetime.now(tz=timezone.utc)
        return {
            "code": 200,
            "msg": "success",
            "data": {
                "type": type,
                "date": f"{today.year}-{today.month:02d}-{today.day:02d}",
                "page": page,
                "page_size": page_size,
                "total": total,
                "pages": pages,
                "source": source,
                "stocks": page_stocks,
            },
        }
    except Exception as err:
        logger.error("[limit-pool] Unexpected error: %s", str(err))
        return {"code": 500, "msg": str(err), "data": None}
