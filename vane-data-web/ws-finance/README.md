# ws-finance

Socket.IO WebSocket server for real-time A-Share stock quote streaming. Polls Tencent Finance every 3 seconds and pushes updates to subscribed clients.

## Requirements

- Bun >= 1.0

## Quick Start

```bash
cd ws-finance
bun install
bun run dev    # development (hot reload)
bun run start  # production
```

Server listens on port **3003**.

## Protocol

### Client → Server

Subscribe to symbols:
```json
["sh600519", "sz000001"]
```
Emit as the `subscribe` event. Accepts a single string or an array.

Unsubscribe:
```json
["sh600519"]
```
Emit as the `unsubscribe` event.

### Server → Client

Quote update (`quote` event):
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

Subscription confirmed (`subscribed` event):
```json
{ "symbols": ["sh600519", "sz000001"] }
```

## Docker

```bash
docker build -t vane-ws .
docker run -p 3003:3003 vane-ws
```
