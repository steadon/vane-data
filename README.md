# Vane Data

English | [中文](./README.zh-CN.md)

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Python](https://img.shields.io/badge/python-3.10+-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Bun](https://img.shields.io/badge/bun-1.0+-fbf0df?logo=bun&logoColor=black)](https://bun.sh/)
[![Docker](https://img.shields.io/badge/docker-ready-2496ED?logo=docker&logoColor=white)](./docker-compose.yml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/steadon/vane-data/pulls)

Open-source A-Share market financial data platform. The backend (`vane-data-api`) aggregates real-time market data from public Chinese financial platforms and exposes a clean REST + WebSocket API. The frontend (`vane-data-web`) is a professional visualization dashboard that also serves as a reference implementation for building on top of the API.

## Architecture

```
vane-data/
├── vane-data-api/        # Python + FastAPI — data aggregation backend (port 8000)
├── vane-data-web/        # Next.js 16 — visualization dashboard (port 3000)
│   └── ws-finance/       # Socket.IO — real-time quote streaming (port 3003)
├── docker-compose.yml    # One-command full-stack deployment
└── start-all.sh          # Local development starter
```

**Both the API and the frontend are independently deployable.** The API has no dependency on the frontend; any HTTP client can consume it directly.

## Data Sources

| Feature | Source |
|---------|--------|
| Real-time quotes | Tencent Finance (primary) / Sina Finance (fallback) |
| K-line (candlestick) data | Tencent Finance |
| Stock detail, sectors, capital flow, news | EastMoney |
| Limit-up / limit-down pool | EastMoney |

## Quick Start

### Option A — Docker Compose (recommended)

```bash
git clone https://github.com/steadon/vane-data.git
cd vane-data
docker compose up
```

- Frontend: http://localhost:3000
- API: http://localhost:8000
- API docs (Swagger): http://localhost:8000/docs

### Option B — Local Development

**Requirements:** Python 3.10+, Bun >= 1.0

```bash
git clone https://github.com/steadon/vane-data.git
cd vane-data
bun install
bun run dev
```

`start-all.sh` handles everything automatically: creates the Python virtualenv, installs pip dependencies, then launches all three services:
- Python API on port 8000
- WebSocket server on port 3003
- Next.js frontend on port 3000

### Option C — Individual Services

Start only what you need:

```bash
# API only
bun run dev:api

# Frontend only (requires API running)
bun run dev:web

# WebSocket server only
bun run dev:ws
```

## Deployment

### API Only

```bash
cd vane-data-api
source venv/bin/activate
python main.py
# or
uvicorn main:app --host 0.0.0.0 --port 8000 --workers 2
```

See [vane-data-api/README.md](./vane-data-api/README.md) for full API reference and Docker instructions.

### Frontend Only

```bash
cd vane-data-web
bun run build
bun run start
```

Configure `VANE_API_URL` to point to your deployed API. See [vane-data-web/README.md](./vane-data-web/README.md) for details.

### Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:8000;
    }

    location /socket.io/ {
        proxy_pass http://127.0.0.1:3003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
    }
}
```

## API Overview

All endpoints return `{ "code": 200, "msg": "success", "data": { ... } }`.

| Endpoint | Description |
|----------|-------------|
| `GET /api/health` | Health check |
| `GET /api/quote` | Real-time quotes for one or more stocks |
| `GET /api/kline` | Candlestick data (day/week/month, with adjustment) |
| `GET /api/limit-pool` | Limit-up / limit-down stock pool |
| `GET /api/sectors` | Industry or concept sector list |
| `GET /api/sector-stocks` | Constituent stocks of a sector |
| `GET /api/stock-detail` | Comprehensive stock fundamentals |
| `GET /api/capital-flow` | Daily capital inflow/outflow breakdown |
| `GET /api/news` | Financial news feed |
| `WS /ws/quotes` | Real-time quote streaming via WebSocket |

Full API documentation: [vane-data-api/README.md](./vane-data-api/README.md)
Interactive docs (when running): http://localhost:8000/docs

## FAQ

**Q: How delayed is the data?**
A: 3–10 seconds during trading hours. Off-hours data is the end-of-day snapshot.

**Q: Are there rate limits?**
A: The API itself has no rate limiting. Upstream platforms (Tencent, EastMoney) have anti-crawl measures — keep per-IP request intervals above 500ms.

**Q: How do I fetch index data?**
A: Use the `/api/quote` endpoint with index symbols: `sh000001` (SSE Composite), `sz399001` (SZSE Component), `sz399006` (ChiNext), `sh000688` (STAR Market 50).

**Q: Can I use the API without running the frontend?**
A: Yes. The API is completely standalone. Point any HTTP client at port 8000.

## License

MIT

## Disclaimer

This project aggregates publicly available financial data for educational and research purposes. It does not constitute investment advice. Data accuracy depends on upstream sources — no warranties are made regarding timeliness, completeness, or correctness.
