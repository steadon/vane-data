# vane-data-api

A-Share market financial data aggregation backend built with Python + FastAPI. Provides REST APIs and a WebSocket endpoint for real-time stock quotes, K-line data, sector analysis, capital flow, and financial news. All data is sourced from public Chinese financial platforms (Tencent Finance, Sina Finance, EastMoney).

## Features

- 8 REST endpoints + 1 WebSocket endpoint
- Stateless — no database required
- Async HTTP client with automatic retry and timeout
- Handles GBK/UTF-8 encoding from Chinese financial APIs
- Swagger UI auto-generated at `/docs`
- CORS enabled for all origins (configurable)

## Requirements

- Python 3.10+
- pip

## Quick Start

```bash
cd vane-data-api

# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start server (port 8000)
python main.py
```

The API will be available at `http://localhost:8000`.
Interactive docs: `http://localhost:8000/docs`

## Environment Variables

Copy `.env.example` to `.env` and adjust as needed:

| Variable | Default | Description |
|----------|---------|-------------|
| `HOST` | `0.0.0.0` | Bind address |
| `PORT` | `8000` | Listen port |

## Production Deployment

```bash
# Using uvicorn directly
uvicorn main:app --host 0.0.0.0 --port 8000 --workers 2

# Using Docker
docker build -t vane-api .
docker run -p 8000:8000 vane-api
```

---

## API Reference

All endpoints share a unified response envelope:

```json
{
  "code": 200,
  "msg": "success",
  "data": { ... }
}
```

| `code` | Meaning |
|--------|---------|
| `200` | Success |
| `400` | Invalid parameter |
| `502` | Upstream data source error |
| `500` | Internal server error |

---

### Health Check

```
GET /api/health
```

Returns server status. Used by orchestrators and load balancers.

**Response:**

```json
{
  "code": 200,
  "msg": "ok",
  "data": { "status": "healthy" }
}
```

---

### Real-time Quotes

```
GET /api/quote
```

Fetch real-time quotes for one or more A-Share stocks.

**Query Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `symbols` | Yes | string | Comma-separated stock codes, e.g. `sh600519,sz000001` |
| `source` | No | string | `tencent` (default) or `sina` |

**Symbol Format:** `{market}{code}` — market prefix is `sh` (Shanghai) or `sz` (Shenzhen). Bare codes also accepted: `600519` → `sh600519`, `000001` → `sz000001`.

**Example:**

```bash
curl "http://localhost:8000/api/quote?symbols=sh600519,sz000001"
```

**Response `data`:** Array of quote objects.

```json
[
  {
    "symbol": "sh600519",
    "name": "贵州茅台",
    "price": 1440.02,
    "change_percent": -1.37,
    "change_amount": -19.98,
    "open": 1460.00,
    "high": 1465.00,
    "low": 1432.00,
    "pre_close": 1460.00,
    "volume": 12345,
    "amount": 1782345678.0,
    "turnover_rate": 0.98,
    "pe_ratio": 28.5,
    "pb_ratio": 10.2,
    "market_cap": 1812300000000.0,
    "timestamp": "2024-03-14 15:00:00"
  }
]
```

---

### K-Line Data

```
GET /api/kline
```

Fetch candlestick (OHLCV) data for a stock.

**Query Parameters:**

| Parameter | Required | Type | Default | Description |
|-----------|----------|------|---------|-------------|
| `symbol` | Yes | string | — | Stock code, e.g. `sh600519` |
| `period` | No | string | `day` | `day`, `week`, or `month` |
| `adjust` | No | string | `qfq` | Adjustment: `qfq` (forward), `hfq` (backward), `none` |
| `count` | No | integer | `320` | Number of bars to return |
| `start_date` | No | string | — | Start date `YYYYMMDD`, e.g. `20240101` |
| `end_date` | No | string | — | End date `YYYYMMDD` |

**Example:**

```bash
curl "http://localhost:8000/api/kline?symbol=sh600519&period=day&adjust=qfq&count=60"
```

**Response `data`:** Array of candlestick objects.

```json
[
  {
    "date": "2024-03-14",
    "open": 1455.00,
    "close": 1440.02,
    "high": 1465.00,
    "low": 1432.00,
    "volume": 12345,
    "amount": 1782345678.0
  }
]
```

---

### Limit-Up / Limit-Down Pool

```
GET /api/limit-pool
```

Fetch stocks that hit the daily price limit (涨停/跌停).

**Query Parameters:**

| Parameter | Required | Type | Default | Description |
|-----------|----------|------|---------|-------------|
| `type` | No | string | `limit_up` | `limit_up` (涨停) or `limit_down` (跌停) |

Limit thresholds: ±9.8% for main-board stocks, ±19.5% for STAR Market (688xx) and ChiNext (300xx).

**Example:**

```bash
curl "http://localhost:8000/api/limit-pool?type=limit_up"
```

**Response `data`:**

```json
{
  "type": "limit_up",
  "count": 48,
  "stocks": [
    {
      "symbol": "sz000001",
      "name": "平安银行",
      "price": 11.00,
      "change_percent": 9.8,
      "amount": 234567890.0,
      "turnover_rate": 3.21
    }
  ]
}
```

---

### Sector List

```
GET /api/sectors
```

Fetch industry or concept sector rankings.

**Query Parameters:**

| Parameter | Required | Type | Default | Description |
|-----------|----------|------|---------|-------------|
| `type` | No | string | `industry` | `industry` (行业) or `concept` (概念) |

**Example:**

```bash
curl "http://localhost:8000/api/sectors?type=industry"
```

**Response `data`:** Array of sector objects.

```json
[
  {
    "code": "BK0477",
    "name": "白酒",
    "change_percent": 1.25,
    "limit_up_count": 3,
    "stock_count": 28,
    "lead_stock_name": "贵州茅台",
    "lead_stock_code": "sh600519",
    "lead_stock_change": 2.10,
    "market_cap": 3400000000000.0
  }
]
```

---

### Sector Stocks

```
GET /api/sector-stocks
```

Fetch constituent stocks of a given sector.

**Query Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `code` | Yes | string | Sector code from `/api/sectors`, e.g. `BK0477` |

**Example:**

```bash
curl "http://localhost:8000/api/sector-stocks?code=BK0477"
```

**Response `data`:** Array of stock objects (up to 100).

```json
[
  {
    "symbol": "sh600519",
    "code": "600519",
    "name": "贵州茅台",
    "price": 1440.02,
    "change_percent": -1.37
  }
]
```

---

### Stock Detail

```
GET /api/stock-detail
```

Fetch comprehensive fundamental and technical data for a single stock.

**Query Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `symbol` | Yes | string | Stock code, e.g. `sh600519` |

**Example:**

```bash
curl "http://localhost:8000/api/stock-detail?symbol=sh600519"
```

**Response `data`:**

```json
{
  "symbol": "sh600519",
  "name": "贵州茅台",
  "price": 1440.02,
  "change_percent": -1.37,
  "change_amount": -19.98,
  "open": 1460.00,
  "high": 1465.00,
  "low": 1432.00,
  "pre_close": 1460.00,
  "volume": 12345,
  "volume_display": "1.23万手",
  "amount": 1782345678.0,
  "amount_display": "17.82亿",
  "amplitude": 2.26,
  "turnover_rate": 0.98,
  "pe_ttm": 28.5,
  "pb": 10.2,
  "volume_ratio": 0.85,
  "high_52w": 1800.00,
  "low_52w": 1200.00,
  "change_52w": 12.5,
  "total_market_cap": 1812300000000.0,
  "total_market_cap_display": "1.81万亿",
  "float_market_cap": 905000000000.0,
  "float_market_cap_display": "9050亿",
  "rating": 3,
  "is_up": false,
  "market": "sh",
  "timestamp": "2024-03-14 15:00:00"
}
```

---

### Capital Flow

```
GET /api/capital-flow
```

Fetch daily net capital inflow/outflow breakdown for a stock.

**Query Parameters:**

| Parameter | Required | Type | Default | Description |
|-----------|----------|------|---------|-------------|
| `symbol` | Yes | string | — | Stock code, e.g. `sh600519` |
| `days` | No | integer | `10` | Number of days (1–30) |

**Example:**

```bash
curl "http://localhost:8000/api/capital-flow?symbol=sh600519&days=10"
```

**Response `data`:**

```json
{
  "symbol": "sh600519",
  "name": "贵州茅台",
  "total_main_net": -123456789.0,
  "days": 10,
  "flows": [
    {
      "date": "2024-03-14",
      "main_net": -50000000.0,
      "super_large_net": -30000000.0,
      "large_net": -20000000.0,
      "mid_net": 5000000.0,
      "small_net": 3000000.0,
      "retail_small_net": 2000000.0,
      "retail_mid_net": 1500000.0,
      "retail_large_net": 500000.0
    }
  ]
}
```

**Flow categories:**
- `main_net` — Main force (super-large + large orders combined)
- `super_large_net` — Orders > 1M CNY
- `large_net` — Orders 200K–1M CNY
- `mid_net` — Orders 50K–200K CNY
- `small_net` — Orders < 50K CNY
- `retail_*` — Retail investor breakdown

---

### Financial News

```
GET /api/news
```

Fetch the latest financial news from EastMoney.

**Query Parameters:**

| Parameter | Required | Type | Default | Description |
|-----------|----------|------|---------|-------------|
| `page` | No | integer | `1` | Page number (1-based) |
| `count` | No | integer | `20` | Items per page (1–50) |

**Example:**

```bash
curl "http://localhost:8000/api/news?page=1&count=20"
```

**Response `data`:**

```json
{
  "page": 1,
  "page_count": 10,
  "items": [
    {
      "id": "AN202403141234567",
      "title": "央行宣布降准0.5个百分点",
      "digest": "中国人民银行决定于3月15日下调金融机构存款准备金率...",
      "image": "https://...",
      "source": "东方财富",
      "time": "2024-03-14 15:30:00",
      "url": "https://finance.eastmoney.com/..."
    }
  ]
}
```

---

### WebSocket — Real-time Quotes

```
ws://localhost:8000/ws/quotes
```

Subscribe to real-time quote streaming. The server polls Tencent Finance every 3 seconds and broadcasts updates to subscribed clients.

**Client → Server messages:**

Subscribe to symbols:
```json
{ "type": "subscribe", "symbols": ["sh600519", "sz000001"] }
```

Unsubscribe:
```json
{ "type": "unsubscribe", "symbols": ["sh600519"] }
```

**Server → Client messages:**

```json
{
  "type": "quote",
  "data": {
    "symbol": "sh600519",
    "name": "贵州茅台",
    "price": 1440.02,
    "change_percent": -1.37,
    "change_amount": -19.98,
    "volume": 12345,
    "timestamp": "2024-03-14T07:00:00.000Z"
  }
}
```

---

## Common Stock Codes

| Symbol | Name |
|--------|------|
| `sh000001` | 上证指数 (SSE Composite) |
| `sz399001` | 深证成指 (SZSE Component) |
| `sz399006` | 创业板指 (ChiNext) |
| `sh000688` | 科创50 (STAR Market 50) |
| `sh600519` | 贵州茅台 (Kweichow Moutai) |
| `sz000001` | 平安银行 (Ping An Bank) |
| `sz300750` | 宁德时代 (CATL) |
| `sz002594` | 比亚迪 (BYD) |

---

## Project Structure

```
vane-data-api/
├── main.py             # FastAPI app, CORS, route registration, lifespan
├── config.py           # Constants: URLs, timeouts, headers
├── requirements.txt    # Python dependencies
├── Dockerfile
├── .env.example
├── routers/
│   ├── quote.py        # GET /api/quote
│   ├── kline.py        # GET /api/kline
│   ├── limit_pool.py   # GET /api/limit-pool
│   ├── sectors.py      # GET /api/sectors
│   ├── sector_stocks.py # GET /api/sector-stocks
│   ├── stock_detail.py # GET /api/stock-detail
│   ├── capital_flow.py # GET /api/capital-flow
│   └── news.py         # GET /api/news
├── services/
│   └── websocket.py    # WebSocket handler — real-time quote push
└── utils/
    └── http_client.py  # Shared async HTTP client with retry & GBK decoding
```

## Data Sources

| Feature | Source |
|---------|--------|
| Real-time quotes | Tencent Finance (primary) / Sina Finance (fallback) |
| K-line data | Tencent Finance |
| Stock detail, capital flow, sectors, news | EastMoney |
| Limit-up/down pool | EastMoney |

> **Note:** All data is sourced from publicly accessible financial platforms. Data accuracy depends on upstream sources. Typical latency during trading hours is 3–10 seconds.

## License

MIT
