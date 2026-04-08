"""FastAPI application entry point."""

import logging
import sys
from contextlib import asynccontextmanager

import uvicorn
from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware

from routers import capital_flow, kline, limit_pool, news, quote, sector_stocks, sectors, stock_detail
from services.websocket import websocket_handler, shutdown_websocket
from utils.http_client import close_client

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    stream=sys.stdout,
)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan: startup and shutdown."""
    logger.info("vane-data-api starting up...")
    yield
    logger.info("vane-data-api shutting down...")
    await shutdown_websocket()
    await close_client()


# Create FastAPI app
app = FastAPI(
    title="Vane Data API",
    description="A-Share market financial data aggregation API — real-time quotes, K-line, sectors, news, and capital flow.",
    version="1.0.0",
    lifespan=lifespan,
)

# CORS middleware - allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include all routers with /api prefix
app.include_router(quote.router, prefix="/api", tags=["Quote"])
app.include_router(kline.router, prefix="/api", tags=["K-Line"])
app.include_router(limit_pool.router, prefix="/api", tags=["Limit Pool"])
app.include_router(news.router, prefix="/api", tags=["News"])
app.include_router(sectors.router, prefix="/api", tags=["Sectors"])
app.include_router(sector_stocks.router, prefix="/api", tags=["Sector Stocks"])
app.include_router(stock_detail.router, prefix="/api", tags=["Stock Detail"])
app.include_router(capital_flow.router, prefix="/api", tags=["Capital Flow"])


# Health check endpoint
@app.get("/api/health")
async def health_check():
    """Health check endpoint."""
    return {"code": 200, "msg": "ok", "data": {"status": "healthy"}}


# WebSocket endpoint for real-time quote push
@app.websocket("/ws/quotes")
async def ws_quotes(websocket: WebSocket):
    """WebSocket endpoint for real-time stock quote push."""
    await websocket_handler(websocket)


if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        log_level="info",
        reload=False,
    )
