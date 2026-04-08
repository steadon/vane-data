"""Industry / Concept sector list from EastMoney."""

import json
import logging

from fastapi import APIRouter, Query

from config import EASTMONEY_SECTOR_URL
from routers.limit_pool import build_eastmoney_params
from utils.http_client import safe_fetch

logger = logging.getLogger(__name__)
router = APIRouter()


@router.get("/sectors")
async def get_sectors(
    type: str = Query("industry", description="Type: industry or concept"),
):
    """Get industry or concept sector list."""
    fs_map = {
        "industry": "m:90+t:2+f:!50",
        "concept": "m:90+t:3+f:!50",
    }

    if type not in fs_map:
        return {"code": 400, "msg": 'Invalid type. Must be "industry" or "concept"', "data": None}

    try:
        params = build_eastmoney_params({
            "dpt": "wz.zhyj",
            "Ession": "",
            "fs": fs_map[type],
            "fields": "f2,f3,f4,f12,f14,f104,f105,f106,f107,f128,f140,f136,f20",
            "pn": "1",
            "pz": "50",
            "po": "1",
            "fid": "f3",
        })

        text = await safe_fetch(
            EASTMONEY_SECTOR_URL,
            params=params,
            headers={"Referer": "https://data.eastmoney.com/"},
        )

        if not text:
            return {"code": 502, "msg": "Failed to fetch data from upstream", "data": None}

        try:
            data = json.loads(text)
        except json.JSONDecodeError:
            return {"code": 502, "msg": "Failed to parse upstream response", "data": None}

        diff = ((data.get("data") or {}).get("diff") or [])

        sectors = []
        for item in diff:
            try:
                f104 = int(str(item.get("f104", "0")))
                f105 = int(str(item.get("f105", "0")))
                f106 = int(str(item.get("f106", "0")))
                f107 = int(str(item.get("f107", "0")))
                total = f104 + f105 + f106 + f107

                sectors.append({
                    "code": str(item.get("f12", "")),
                    "name": str(item.get("f14", "")),
                    "change_percent": round(float(str(item.get("f3", "0"))) * 100) / 100,
                    "limit_up_count": f104,
                    "stock_count": total,
                    "lead_stock_name": str(item.get("f128", "")),
                    "lead_stock_code": str(item.get("f140", "")),
                    "lead_stock_change": round(float(str(item.get("f136", "0"))) * 100) / 100,
                    "market_cap": float(str(item.get("f20", "0"))),
                })
            except (ValueError, KeyError):
                continue

        return {
            "code": 200,
            "msg": "success",
            "data": {
                "type": type,
                "count": len(sectors),
                "sectors": sectors,
            },
        }
    except Exception as err:
        logger.error("[sectors] Unexpected error: %s", str(err))
        return {"code": 500, "msg": str(err), "data": None}
