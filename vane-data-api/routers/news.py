"""Financial news feed with multi-source fallback.

Sources (in priority order):
  1. EastMoney (东方财富快讯)
  2. Sina Finance (新浪财经滚动新闻)

Caching:
  Cache key → "news:{page}:{page_size}"
  TTL       → 3 min always (news updates independently of market hours).
"""

import json
import logging
import re
import time

from fastapi import APIRouter, Query

from utils.cache import cache, ttl_for
from utils.http_client import safe_fetch, safe_fetch_json

logger = logging.getLogger(__name__)
router = APIRouter()


# ---------------------------------------------------------------------------
# Source 1: EastMoney (东方财富)
# ---------------------------------------------------------------------------

async def _fetch_eastmoney(page: int, page_size: int):
    """Fetch news from EastMoney. Returns normalised result dict or None."""
    url = f"https://newsapi.eastmoney.com/kuaixun/v1/getlist_101_ajaxResult_{page_size}_{page}_.html"
    text = await safe_fetch(url, headers={"Referer": "https://finance.eastmoney.com/"})

    if not text:
        return None

    # Strip "var ajaxResult={...};" wrapper
    json_str = re.sub(r"^var\s+ajaxResult\s*=\s*", "", text.strip())
    json_str = re.sub(r";\s*$", "", json_str)

    try:
        data = json.loads(json_str)
    except json.JSONDecodeError:
        return None

    lives_list = data.get("LivesList") or []
    items = []
    for item in lives_list:
        digest = str(item.get("digest", ""))
        clean_digest = re.sub(r"^【[^】]*】\s*", "", digest).strip()
        items.append({
            "id": str(item.get("newsid") or item.get("id") or ""),
            "title": str(item.get("title", "")),
            "digest": clean_digest,
            "image": str(item.get("image", "")),
            "source": str(item.get("source", "东方财富")),
            "time": str(item.get("showtime", "")),
            "url": str(item.get("url_w") or item.get("url_unique") or item.get("url_m") or ""),
        })

    page_count = int(str(data.get("PageCount", "0")))
    return {
        "page": page,
        "page_size": len(items),
        "page_count": page_count,
        "source": "eastmoney",
        "news": items,
    }


# ---------------------------------------------------------------------------
# Source 2: Sina Finance (新浪财经滚动新闻)
# ---------------------------------------------------------------------------

async def _fetch_sina(page: int, page_size: int):
    """Fetch news from Sina Finance. Returns normalised result dict or None."""
    url = "https://feed.mix.sina.com.cn/api/roll/get"
    params = {
        "pageid": "153",
        "lid": "2516",
        "k": "",
        "num": str(page_size),
        "page": str(page),
    }
    headers = {"Referer": "https://finance.sina.com.cn/"}

    data = await safe_fetch_json(url, params=params, headers=headers)
    if not data or not isinstance(data, dict):
        return None

    result = data.get("result") or {}
    items_raw = result.get("data") or []
    if not items_raw:
        return None

    items = []
    for item in items_raw:
        item_id = str(item.get("docid") or item.get("oid") or "")
        title = str(item.get("title", ""))
        intro = str(item.get("intro", ""))
        summary = str(item.get("summary", ""))
        digest = intro or summary
        # Strip HTML tags
        digest = re.sub(r"<[^>]+>", "", digest).strip()

        ctime = int(item.get("ctime") or 0)
        if ctime:
            time_str = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(ctime))
        else:
            time_str = ""

        # Extract image URL
        img_obj = item.get("img")
        image = ""
        if isinstance(img_obj, dict):
            image = str(img_obj.get("u", ""))

        items.append({
            "id": item_id,
            "title": title,
            "digest": digest,
            "image": image,
            "source": str(item.get("media_name", "") or "新浪财经"),
            "time": time_str,
            "url": str(item.get("url") or item.get("wapurl", "")),
        })

    total = int(result.get("total") or 0)
    page_count = max(1, (total + page_size - 1) // page_size) if total else 1

    return {
        "page": page,
        "page_size": len(items),
        "page_count": page_count,
        "source": "sina",
        "news": items,
    }


# ---------------------------------------------------------------------------
# Unified endpoint
# ---------------------------------------------------------------------------

@router.get("/news")
async def get_news(
    page: int = Query(1, ge=1, description="Page number"),
    page_size: int = Query(15, ge=1, le=50, description="Items per page (max 50)"),
):
    """Get financial news (paginated) with multi-source fallback.

    Each page is cached for 3 minutes.
    """
    cache_key = f"news:{page}:{page_size}"
    cached = cache.get(cache_key)
    if cached is not None:
        return {"code": 200, "msg": "success", "data": cached}

    try:
        # Try EastMoney first, then fall back to Sina
        result = await _fetch_eastmoney(page, page_size)
        if result is None:
            logger.info("[news] EastMoney failed, trying Sina fallback")
            result = await _fetch_sina(page, page_size)

        if result is None:
            return {"code": 502, "msg": "Failed to fetch news from upstream", "data": None}

        cache.set(cache_key, result, ttl_for("news"))
        return {"code": 200, "msg": "success", "data": result}

    except Exception as err:
        logger.error("[news] Unexpected error: %s", str(err))
        return {"code": 500, "msg": str(err), "data": None}
