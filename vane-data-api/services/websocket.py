"""WebSocket real-time quote push service.

Clients connect to /ws/quotes and subscribe to stock symbols.
Server polls Tencent Finance API every 3 seconds and broadcasts
quote updates to subscribed clients.
"""

import asyncio
import json
import logging
from datetime import datetime
from typing import Dict, Set

from fastapi import WebSocket, WebSocketDisconnect

from config import TENCENT_QUOTE_URL, WS_POLL_INTERVAL
from utils.http_client import get_client

logger = logging.getLogger(__name__)

# Track subscriptions: socket_id -> set of symbols
_subscriptions: Dict[str, Set[str]] = {}
# Quote cache: symbol -> latest quote data
_quote_cache: Dict[str, dict] = {}

# Background polling task
_poll_task: asyncio.Task | None = None
# Background broadcast task
_broadcast_task: asyncio.Task | None = None
# Queue for quote updates
_quote_queue: asyncio.Queue = asyncio.Queue()

# Reference to active websocket connections
_connections: Dict[str, WebSocket] = {}


def get_all_subscribed_symbols() -> list[str]:
    """Get all unique subscribed symbols across all clients."""
    symbols = set()
    for sym_set in _subscriptions.values():
        symbols.update(sym_set)
    return list(symbols)


def _parse_tencent_quote_text(text: str) -> list[dict]:
    """Parse Tencent quote response text into quote dicts."""
    results = []
    for line in text.strip().split(";"):
        trimmed = line.strip()
        if not trimmed or '="' not in trimmed:
            continue

        import re
        match = re.search(r'="(.+?)"', trimmed)
        if not match:
            continue

        fields = match.group(1).split("~")
        if len(fields) < 45:
            continue

        symbol = fields[2]
        name = fields[1]
        price = float(fields[3])
        change_amount = float(fields[31])
        change_percent = float(fields[32])
        volume = float(fields[6])

        if price <= 0:
            continue

        quote = {
            "symbol": symbol,
            "name": name,
            "price": price,
            "change_percent": change_percent,
            "change_amount": change_amount,
            "volume": volume,
            "timestamp": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S"),
        }

        _quote_cache[symbol] = quote
        results.append(quote)

    return results


async def _fetch_tencent_quotes(symbols: list[str]) -> list[dict]:
    """Fetch real-time quotes from Tencent Finance API."""
    if not symbols:
        return []

    client = await get_client()
    symbol_list = ",".join(symbols)
    url = f"{TENCENT_QUOTE_URL}{symbol_list}"

    try:
        resp = await client.get(
            url,
            headers={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                "Referer": "https://gu.qq.com/",
            },
            timeout=8.0,
        )

        if resp.status_code != 200:
            logger.error("[ws] Tencent HTTP %s", resp.status_code)
            return []

        # GBK decode
        data = resp.content
        text = None
        for enc in ["gbk", "utf-8", "gb2312", "gb18030", "latin-1"]:
            try:
                text = data.decode(enc)
                if any("\u4e00" <= ch <= "\u9fff" for ch in text):
                    break
            except (UnicodeDecodeError, LookupError):
                continue

        if text is None:
            text = data.decode("latin-1")

        return _parse_tencent_quote_text(text)
    except Exception as err:
        logger.error("[ws] Tencent fetch error: %s", str(err))
        return []


async def _poll_loop():
    """Background task: poll Tencent API for subscribed symbols."""
    logger.info("[ws] Starting quote polling every %.1fs", WS_POLL_INTERVAL)
    while True:
        try:
            symbols = get_all_subscribed_symbols()
            if symbols:
                quotes = await _fetch_tencent_quotes(symbols)
                for q in quotes:
                    await _quote_queue.put(q)
        except Exception as err:
            logger.error("[ws] Poll error: %s", str(err))

        await asyncio.sleep(WS_POLL_INTERVAL)


async def _broadcast_loop():
    """Background task: broadcast queued quotes to relevant clients."""
    while True:
        try:
            quote = await _quote_queue.get()
            symbol = quote.get("symbol")

            # Send to all clients subscribed to this symbol
            disconnected = []
            for socket_id, sym_set in _subscriptions.items():
                if symbol in sym_set:
                    ws = _connections.get(socket_id)
                    if ws:
                        try:
                            await ws.send_json({
                                "type": "quote",
                                "data": quote,
                            })
                        except Exception:
                            disconnected.append(socket_id)
                    else:
                        disconnected.append(socket_id)

            # Clean up disconnected sockets
            for sid in disconnected:
                _subscriptions.pop(sid, None)
                _connections.pop(sid, None)
        except Exception as err:
            logger.error("[ws] Broadcast error: %s", str(err))


def ensure_polling_started():
    """Start polling tasks if not already running."""
    global _poll_task, _broadcast_task
    if _poll_task is None or _poll_task.done():
        _poll_task = asyncio.create_task(_poll_loop())
    if _broadcast_task is None or _broadcast_task.done():
        _broadcast_task = asyncio.create_task(_broadcast_loop())


def check_should_stop_polling():
    """Stop polling tasks if no subscribers remain."""
    global _poll_task, _broadcast_task
    if not _subscriptions:
        if _poll_task and not _poll_task.done():
            _poll_task.cancel()
            _poll_task = None
            logger.info("[ws] Stopped quote polling (no subscribers)")
        if _broadcast_task and not _broadcast_task.done():
            _broadcast_task.cancel()
            _broadcast_task = None


async def websocket_handler(websocket: WebSocket):
    """Handle a WebSocket connection for real-time quote push."""
    await websocket.accept()
    socket_id = id(websocket)
    _connections[socket_id] = websocket
    _subscriptions[socket_id] = set()

    logger.info("[ws] Client connected: %s", socket_id)

    try:
        while True:
            raw = await websocket.receive_text()

            try:
                msg = json.loads(raw)
            except json.JSONDecodeError:
                continue

            action = msg.get("action")

            if action == "subscribe":
                subscribe_symbols = msg.get("symbols", [])
                if isinstance(subscribe_symbols, str):
                    subscribe_symbols = [subscribe_symbols]

                for sym in subscribe_symbols:
                    _subscriptions[socket_id].add(sym)

                total_subs = len(get_all_subscribed_symbols())
                logger.info(
                    "[ws] %s subscribed to: %s (unique: %d)",
                    socket_id, subscribe_symbols, total_subs,
                )

                # Start polling if not already running
                ensure_polling_started()

                # Send cached data immediately
                for sym in subscribe_symbols:
                    cached = _quote_cache.get(sym)
                    if cached:
                        await websocket.send_json({
                            "type": "quote",
                            "data": {
                                **cached,
                                "timestamp": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S"),
                            },
                        })

                await websocket.send_json({
                    "type": "subscribed",
                    "data": {"symbols": list(_subscriptions[socket_id])},
                })

            elif action == "unsubscribe":
                unsubscribe_symbols = msg.get("symbols", [])
                if isinstance(unsubscribe_symbols, str):
                    unsubscribe_symbols = [unsubscribe_symbols]

                for sym in unsubscribe_symbols:
                    _subscriptions[socket_id].discard(sym)

                logger.info(
                    "[ws] %s unsubscribed from: %s",
                    socket_id, unsubscribe_symbols,
                )

                check_should_stop_polling()

                await websocket.send_json({
                    "type": "unsubscribed",
                    "data": {"symbols": list(_subscriptions[socket_id])},
                })

    except WebSocketDisconnect:
        logger.info("[ws] Client disconnected: %s", socket_id)
    except Exception as err:
        logger.error("[ws] Error for client %s: %s", socket_id, str(err))
    finally:
        _subscriptions.pop(socket_id, None)
        _connections.pop(socket_id, None)
        check_should_stop_polling()


async def shutdown_websocket():
    """Clean up all websocket tasks and connections."""
    global _poll_task, _broadcast_task
    if _poll_task and not _poll_task.done():
        _poll_task.cancel()
    if _broadcast_task and not _broadcast_task.done():
        _broadcast_task.cancel()

    # Close all connections
    for ws in list(_connections.values()):
        try:
            await ws.close()
        except Exception:
            pass

    _connections.clear()
    _subscriptions.clear()
    _quote_cache.clear()

    # Drain the queue
    while not _quote_queue.empty():
        try:
            _quote_queue.get_nowait()
        except asyncio.QueueEmpty:
            break
