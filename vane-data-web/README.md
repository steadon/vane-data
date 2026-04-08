# vane-data-web

A-Share market visualization dashboard built with Next.js 16. Connects to [vane-data-api](../vane-data-api/README.md) for financial data and [ws-finance](./ws-finance/) for real-time quote streaming.

Designed as both a ready-to-use dashboard and a reference implementation showing how to build applications on top of vane-data-api.

## Features

- K-line chart with technical indicators (MA, BOLL, MACD, RSI, KDJ)
- Real-time quote cards via Socket.IO
- Industry / concept sector heatmap
- Limit-up / limit-down (涨跌停) pool tracker
- Stock detail panel with PE, PB, market cap, 52-week metrics
- Capital flow chart (main force vs retail)
- Financial news feed
- Custom watchlist with drag-and-drop reordering (persisted in localStorage)
- Market index panel
- Dark / light theme toggle
- Fullscreen K-line mode

## Requirements

- Bun >= 1.0 or Node.js >= 18
- vane-data-api running on port 8000
- (Optional) ws-finance running on port 3003 for real-time streaming

## Quick Start

```bash
cd vane-data-web

# Install dependencies
bun install

# Start development server (port 3000)
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Default | Description |
|----------|---------|-------------|
| `VANE_API_URL` | `http://localhost:8000` | vane-data-api base URL (server-side, runtime-configurable) |
| `NEXT_PUBLIC_WS_URL` | `http://localhost:3003` | ws-finance Socket.IO URL (client-side, must be set at build time) |

The frontend proxies all `/api/finance/*` requests to the backend via Next.js rewrites in `next.config.ts`. `VANE_API_URL` is a server-only variable so it can be changed at container startup without rebuilding the image.

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start Next.js dev server (port 3000) |
| `bun run build` | Build for production (outputs standalone) |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint |
| `bun run ws:dev` | Start ws-finance in dev mode |
| `bun run ws:start` | Start ws-finance in production mode |

## Production Build

```bash
bun run build
bun run start
```

The build uses `output: "standalone"` — the `.next/standalone` directory contains everything needed to run the server without `node_modules`.

### Docker

```bash
docker build -t vane-web .
docker run -p 3000:3000 \
  -e VANE_API_URL=http://your-api-host:8000 \
  -e NEXT_PUBLIC_WS_URL=http://your-ws-host:3003 \
  vane-web
```

## Project Structure

```
vane-data-web/
├── src/
│   ├── app/
│   │   ├── page.tsx            # Main dashboard
│   │   ├── layout.tsx          # Root layout (theme provider, fonts)
│   │   └── globals.css
│   ├── components/
│   │   ├── finance/            # Domain components
│   │   │   ├── kline-chart.tsx         # Candlestick chart + indicators
│   │   │   ├── quote-cards.tsx         # Real-time quote cards
│   │   │   ├── market-heatmap.tsx      # Sector heatmap
│   │   │   ├── sector-panel.tsx        # Sector list + stocks
│   │   │   ├── stock-detail-panel.tsx  # Stock fundamentals + capital flow
│   │   │   ├── limit-pool.tsx          # Limit-up/down tracker
│   │   │   ├── news-panel.tsx          # Financial news
│   │   │   ├── market-index.tsx        # Market index panel
│   │   │   ├── watchlist.tsx           # Watchlist with drag-and-drop
│   │   │   └── stock-search.tsx        # Symbol search
│   │   ├── theme-provider.tsx  # next-themes wrapper
│   │   └── ui/                 # shadcn/ui component library
│   ├── lib/
│   │   ├── finance-api.ts      # Shared HTTP utilities for upstream APIs
│   │   ├── watchlist-storage.ts # localStorage persistence for watchlist
│   │   └── utils.ts            # cn() and other helpers
│   └── hooks/
│       ├── use-mobile.ts
│       └── use-toast.ts
├── ws-finance/                 # Socket.IO WebSocket server (port 3003)
│   ├── index.ts
│   ├── package.json
│   └── Dockerfile
├── public/
├── next.config.ts              # API proxy rewrites, standalone output
├── tailwind.config.ts
├── components.json             # shadcn/ui config
├── Dockerfile
└── .env.example
```

## API Proxy

All data requests from the frontend are proxied through Next.js rewrites to avoid CORS issues:

```
Browser → /api/finance/quote → Next.js rewrite → http://localhost:8000/api/quote
```

This is configured in `next.config.ts`:

```ts
rewrites: [{ source: "/api/finance/:path*", destination: `${apiUrl}/api/:path*` }]
```

## ws-finance — WebSocket Service

The `ws-finance` directory contains a standalone Socket.IO server that streams real-time stock quotes. It polls Tencent Finance every 3 seconds and pushes updates to subscribed clients.

See [ws-finance/README.md](./ws-finance/README.md) for details.

### Starting ws-finance

```bash
# From vane-data-web directory
bun run ws:dev

# Or directly
cd ws-finance
bun run dev
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Charts | Recharts |
| State | Zustand |
| Data fetching | TanStack React Query |
| Real-time | Socket.IO client |
| UI primitives | Radix UI |
| Drag & drop | @dnd-kit |
| Motion | Framer Motion |
| Runtime | Bun / Node.js |

## License

MIT
