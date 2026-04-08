"""Financial news feed from EastMoney (东方财富快讯)."""

import json
import logging
import re

from fastapi import APIRouter, Query

from utils.http_client import safe_fetch

logger = logging.getLogger(__name__)
router = APIRouter()


@router.get("/news")
async def get_news(
    page: int = Query(1, ge=1, description="Page number"),
    count: int = Query(20, ge=1, le=50, description="Items per page (max 50)"),
):
    """Get financial news."""
    try:
        url = f"https://newsapi.eastmoney.com/kuaixun/v1/getlist_101_ajaxResult_{count}_{page}_.html"

        text = await safe_fetch(
            url,
            headers={"Referer": "https://finance.eastmoney.com/"},
        )

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
            # Remove leading 【xxx】 tag from digest
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
            "code": 200,
            "msg": "success",
            "data": {
                "page": page,
                "count": len(items),
                "page_count": page_count,
                "news": items,
            },
        }
    except Exception as err:
        logger.error("[news] Unexpected error: %s", str(err))
        return {"code": 500, "msg": str(err), "data": None}
