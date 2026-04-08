"""In-memory LRU+TTL cache for API responses.

Design:
- Pure Python stdlib — no external dependencies.
- Bounded by entry count; LRU-evicts oldest entries when full.
- Per-entry TTL; stale entries are lazily purged on access.
- Market-hours-aware TTL helpers: shorter during trading, longer offline.
- Single-threaded asyncio safe (no locking needed; Python dict ops are atomic).
"""

import time
from collections import OrderedDict
from datetime import datetime, timezone, timedelta
from typing import Any, Optional

_CST = timezone(timedelta(hours=8))

# A-share trading sessions as (start, end) in minutes since midnight CST.
_SESSIONS = [
    (9 * 60 + 30, 11 * 60 + 30),   # morning: 09:30–11:30
    (13 * 60,      15 * 60),         # afternoon: 13:00–15:00
]

# (trading_ttl_seconds, off_market_ttl_seconds)
_ENDPOINT_TTLS: dict[str, tuple[int, int]] = {
    "limit_pool":    (30,   300),    # 30 s  / 5 min
    "sectors":       (60,  1800),    # 1 min / 30 min
    "sector_stocks": (120, 3600),    # 2 min / 1 hr
    "news":          (180,  180),    # 3 min always (news doesn't follow market hours)
    "stock_detail":  (30,   600),    # 30 s  / 10 min
    "capital_flow":  (60,  1800),    # 1 min / 30 min
}


def is_trading() -> bool:
    """Return True if the current CST wall-clock time is inside A-share trading hours."""
    now = datetime.now(_CST)
    if now.weekday() >= 5:          # Saturday=5, Sunday=6
        return False
    t = now.hour * 60 + now.minute
    return any(start <= t <= end for start, end in _SESSIONS)


def ttl_for(endpoint: str) -> int:
    """Return cache TTL in seconds appropriate for the given endpoint and market status."""
    on_ttl, off_ttl = _ENDPOINT_TTLS.get(endpoint, (60, 300))
    return on_ttl if is_trading() else off_ttl


class Cache:
    """LRU+TTL in-memory cache with a hard upper bound on entry count.

    Access complexity: O(1) amortised for both get and set.
    Memory: bounded to at most max_size live entries.
    """

    def __init__(self, max_size: int = 500) -> None:
        self._store: OrderedDict[str, tuple[Any, float]] = OrderedDict()
        self._max = max_size

    def get(self, key: str) -> Optional[Any]:
        """Return the cached value or None if the key is missing or expired."""
        entry = self._store.get(key)
        if entry is None:
            return None
        value, expires_at = entry
        if time.monotonic() > expires_at:
            del self._store[key]
            return None
        self._store.move_to_end(key)    # mark as recently used
        return value

    def set(self, key: str, value: Any, ttl: int) -> None:
        """Store value under key with the given TTL in seconds."""
        if key in self._store:
            self._store.move_to_end(key)
        self._store[key] = (value, time.monotonic() + ttl)
        # Evict the least-recently-used entry when over capacity.
        while len(self._store) > self._max:
            self._store.popitem(last=False)

    @property
    def size(self) -> int:
        """Number of live entries (including potentially stale ones not yet accessed)."""
        return len(self._store)


# Shared singleton — import this from every router that needs caching.
cache = Cache(max_size=500)
