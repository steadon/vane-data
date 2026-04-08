"""Financial news feed from EastMoney (东方财富快讯).

Caching:
  Cache key → "news:{page}:{page_size}"
  TTL       → 3 min always (news updates independently of market hours).
"""

import json
import logging
import re

from fastapi import APIRouter, Query

from utils.cache import cache, ttl_for
from utils.http_client import safe_fetch

logger = logging.getLogger(__name__)
router = APIRouter()


@router.get("/news")
async def get_news(
    page: int = Query(1, ge=1, description="Page number"),
    page_size: int = Query(15, ge=1, le=50, description="Items per page (max 50)"),
):
    """Get financial news (paginated).

    Each page is cached for 3 minutes.
    """
    cache_key = f"news:{page}:{page_size}"
    cached = cache.get(cache_key)
    if cached is not None:
        return {"code": 200, "msg": "success", "data": cached}

    try:
        url = f"https://newsapi.eastmoney.com/kuaixun/v1/getlist_101_ajaxResult_{page_size}_{page}_.html"
        text = await safe_fetch(url, headers={"Referer": "https://finance.eastmoney.com/"})

        if not text:
            return {"code": 502, "msg": "Failed to fetch news from upstream", "data": None}

        # Strip "var ajaxResult={...};" wrapper
        json_str = re.sub(r"^var\s+ajaxResult\s*=\s*", "", text.strip())
        json_str = re.sub(r";\s*$", "", json_str)

        try:
            data = json.loads(json_str)
        except json.JSONDecodeError:
            return {"code": 502, "msg": "Failed to parse upstream response", "data": None}

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
        result = {
            "page": page,
            "page_size": len(items),
            "page_count": page_count,
            "news": items,
        }

        cache.set(cache_key, result, ttl_for("news"))
        return {"code": 200, "msg": "success", "data": result}

    except Exception as err:
        logger.error("[news] Unexpected error: %s", str(err))
        return {"code": 500, "msg": str(err), "data": None}
