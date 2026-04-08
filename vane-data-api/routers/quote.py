"""Real-time stock quotes from Tencent (primary) or Sina (backup)."""

import logging
from datetime import datetime
from typing import Optional

from fastapi import APIRouter, Query

from config import SINA_QUOTE_URL, TENCENT_QUOTE_URL
from utils.http_client import safe_fetch

logger = logging.getLogger(__name__)
router = APIRouter()


def format_amount_display(amt: float) -> str:
    """Format amount from 万元 unit to human-readable string."""
    yuan = amt * 1e4
    if yuan >= 1e12:
        return f"{yuan / 1e12:.2f}万亿"
    if yuan >= 1e8:
        return f"{yuan / 1e8:.2f}亿"
    if yuan >= 1e4:
        return f"{yuan / 1e4:.2f}万"
    return f"{yuan:,.0f}"


def format_market_cap_display(cap: float) -> str:
    """Format market cap from 亿元 unit to human-readable string."""
    if cap >= 1e4:
        return f"{cap / 1e4:.2f}万亿"
    if cap >= 1:
        return f"{cap:.2f}亿"
    return f"{cap * 1e4:.0f}万"


async def fetch_tencent_quotes(symbols: list[str]) -> list[dict]:
    """Fetch quotes from Tencent Finance API (GBK encoded)."""
    text = await safe_fetch(TENCENT_QUOTE_URL + ",".join(symbols), force_gbk=True)
    if not text:
        return []

    results = []
    for line in text.strip().split(";"):
        trimmed = line.strip()
        if not trimmed or "~" not in trimmed:
            continue

        parts = trimmed.split("=")
        if len(parts) < 2:
            continue

        var_name = parts[0].strip()
        val_str = parts[1].strip().strip('"')
        fields = val_str.split("~")

        if len(fields) < 48:
            continue

        try:
            raw_market_cap = float(fields[45]) or 0
            raw_amount = float(fields[37]) or 0
            raw_pb = float(fields[46]) or 0

            results.append({
                "symbol": var_name.replace("v_", ""),
                "name": fields[1],
                "price": float(fields[3]),
                "change_percent": round(float(fields[32]) * 100) / 100,
                "change_amount": float(fields[31]),
                "open": float(fields[5]),
                "high": float(fields[33]),
                "low": float(fields[34]),
                "pre_close": float(fields[4]),
                "volume": float(fields[6]),
                "amount": raw_amount,
                "amount_display": format_amount_display(raw_amount),
                "turnover_rate": float(fields[38]),
                "pe_ratio": float(fields[39]),
                "pb_ratio": raw_pb,
                "market_cap": raw_market_cap,
                "market_cap_display": format_market_cap_display(raw_market_cap),
                "market": fields[0],
                "timestamp": datetime.utcnow().isoformat(),
            })
        except (ValueError, IndexError) as err:
            logger.warning("[quote] Failed to parse Tencent quote line: %s", str(err))

    return results


async def fetch_sina_quotes(symbols: list[str]) -> list[dict]:
    """Fetch quotes from Sina Finance API (GBK encoded)."""
    text = await safe_fetch(SINA_QUOTE_URL + ",".join(symbols), force_gbk=True)
    if not text:
        return []

    results = []
    for line in text.strip().split("\n"):
        trimmed = line.strip()
        if not trimmed.startswith("var hq_str_"):
            continue

        try:
            import re
            content_match = re.search(r'="(.+?)"', trimmed)
            if not content_match:
                continue

            content = content_match.group(1)
            data_fields = content.split(",")
            name = data_fields[0]

            open_price = float(data_fields[1])
            pre_close = float(data_fields[2])
            price = float(data_fields[3])
            high = float(data_fields[4])
            low = float(data_fields[5])
            volume = float(data_fields[7])
            amount = float(data_fields[8])

            change_amount = round((price - pre_close) * 100) / 100
            change_percent = (
                round(((price - pre_close) / pre_close) * 10000) / 100
                if pre_close != 0
                else 0
            )

            symbol = trimmed.split("hq_str_")[1].split("=")[0]

            results.append({
                "symbol": symbol,
                "name": name,
                "price": price,
                "change_percent": change_percent,
                "change_amount": change_amount,
                "open": open_price,
                "high": high,
                "low": low,
                "pre_close": pre_close,
                "volume": volume,
                "amount": amount,
                "amount_display": format_amount_display(amount),
                "turnover_rate": 0,
                "pe_ratio": 0,
                "pb_ratio": 0,
                "market_cap": 0,
                "market_cap_display": "-",
                "market": "1" if symbol.startswith("sh") else "0",
                "timestamp": datetime.utcnow().isoformat(),
            })
        except (ValueError, IndexError) as err:
            logger.warning("[quote] Failed to parse Sina quote line: %s", str(err))

    return results


@router.get("/quote")
async def get_quote(
    symbols: str = Query(..., description="Comma-separated stock symbols, e.g. sh600519,sz000001"),
    source: str = Query("tencent", description="Data source: tencent or sina"),
):
    """Get real-time stock quotes."""
    if not symbols:
        return {"code": 400, "msg": "Missing required parameter: symbols", "data": None}

    symbol_list = [s.strip() for s in symbols.split(",") if s.strip()]
    if not symbol_list:
        return {"code": 400, "msg": "No valid symbols provided", "data": None}

    try:
        if source == "sina":
            quotes = await fetch_sina_quotes(symbol_list)
        else:
            quotes = await fetch_tencent_quotes(symbol_list)

        return {
            "code": 200,
            "msg": "success",
            "data": {
                "source": source,
                "count": len(quotes),
                "quotes": quotes,
            },
        }
    except Exception as err:
        logger.error("[quote] Unexpected error: %s", str(err))
        return {"code": 500, "msg": str(err), "data": None}
