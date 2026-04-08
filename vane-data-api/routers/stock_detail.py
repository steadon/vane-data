"""Detailed stock information from EastMoney.

Caching:
  Cache key → "stock_detail:{symbol}"
  TTL       → 30 s during trading, 10 min outside.
"""

import json
import logging
from datetime import datetime

from fastapi import APIRouter, Query

from config import EASTMONEY_STOCK_URL
from routers.kline import parse_symbol
from routers.limit_pool import build_eastmoney_params
from utils.cache import cache, ttl_for
from utils.http_client import safe_fetch

logger = logging.getLogger(__name__)
router = APIRouter()


def format_volume(vol: float) -> str:
    """Format volume to human-readable string."""
    if vol >= 1e8:
        return f"{vol / 1e8:.2f}亿"
    if vol >= 1e4:
        return f"{vol / 1e4:.2f}万"
    return f"{vol:,.0f}"


def format_cap(val: float) -> str:
    """Format market cap (in 元) to human-readable string."""
    if val >= 1e12:
        return f"{val / 1e12:.2f}万亿"
    if val >= 1e8:
        return f"{val / 1e8:.2f}亿"
    if val >= 1e4:
        return f"{val / 1e4:.2f}万"
    return f"{val:.2f}"


def format_amount(val: float) -> str:
    """Format amount (in 元) to human-readable string."""
    if val >= 1e8:
        return f"{val / 1e8:.2f}亿"
    if val >= 1e4:
        return f"{val / 1e4:.2f}万"
    return f"{val:.2f}"


@router.get("/stock-detail")
async def get_stock_detail(
    symbol: str = Query(..., description="Stock symbol, e.g. sh600519 or 600519"),
):
    """Get detailed stock information."""
    if not symbol:
        return {"code": 400, "msg": "Missing required parameter: symbol", "data": None}

    cache_key = f"stock_detail:{symbol}"
    cached = cache.get(cache_key)
    if cached is not None:
        return {"code": 200, "msg": "success", "data": cached}

    try:
        market, code = parse_symbol(symbol)
        secid = f"1.{code}" if market == "sh" else f"0.{code}"

        fields = [
            "f43", "f44", "f45", "f46", "f47", "f48",
            "f50", "f51", "f52", "f55", "f57", "f58", "f60",
            "f107", "f116", "f117",
            "f162", "f167", "f168", "f169", "f170", "f171", "f292",
        ]

        params = build_eastmoney_params({
            "secid": secid,
            "fields": ",".join(fields),
            "fltt": "2",
            "invt": "2",
        })

        text = await safe_fetch(
            EASTMONEY_STOCK_URL,
            params=params,
            headers={"Referer": "https://data.eastmoney.com/"},
        )

        if not text:
            return {"code": 502, "msg": "Failed to fetch stock detail from upstream", "data": None}

        try:
            data = json.loads(text)
        except json.JSONDecodeError:
            return {"code": 502, "msg": "Failed to parse upstream response", "data": None}

        d = data.get("data")
        if not d:
            return {"code": 502, "msg": "Failed to fetch stock detail from upstream", "data": None}

        total_market_cap = float(str(d.get("f116", 0)))
        float_market_cap = float(str(d.get("f117", 0)))
        price = float(str(d.get("f43", 0)))
        pre_close = float(str(d.get("f60", 0)))
        volume = float(str(d.get("f47", 0)))
        amount = float(str(d.get("f48", 0)))

        result = {
            "symbol": symbol,
            "code": str(d.get("f57", code)),
            "name": str(d.get("f58", "")),
            "price": price,
            "change_percent": round(float(str(d.get("f170", 0))) * 100) / 100,
            "change_amount": round((price - pre_close) * 100) / 100,
            "open": float(str(d.get("f46", 0))),
            "high": float(str(d.get("f44", 0))),
            "low": float(str(d.get("f45", 0))),
            "pre_close": pre_close,
            "volume": volume,
            "volume_display": format_volume(volume),
            "amount": amount,
            "amount_display": format_amount(amount),
            "amplitude": round(float(str(d.get("f50", 0))) * 100) / 100,
            "turnover_rate": round(float(str(d.get("f168", 0))) * 100) / 100,
            "pe_ttm": float(str(d.get("f162", 0))),
            "pb": float(str(d.get("f55", 0))),
            "volume_ratio": float(str(d.get("f171", 0))),
            "high_52w": float(str(d.get("f51", 0))),
            "low_52w": float(str(d.get("f52", 0))),
            "change_52w": round(float(str(d.get("f169", 0))) * 100) / 100,
            "total_market_cap": total_market_cap,
            "total_market_cap_display": format_cap(total_market_cap),
            "float_market_cap": float_market_cap,
            "float_market_cap_display": format_cap(float_market_cap),
            "rating": int(str(d.get("f292", "0"))),
            "is_up": int(str(d.get("f107", "0"))) == 1,
            "market": market,
            "timestamp": datetime.utcnow().isoformat(),
        }

        cache.set(cache_key, result, ttl_for("stock_detail"))
        return {"code": 200, "msg": "success", "data": result}
    except Exception as err:
        logger.error("[stock-detail] Unexpected error: %s", str(err))
        return {"code": 500, "msg": str(err), "data": None}
