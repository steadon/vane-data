# ws-finance

一个独立的 Socket.IO 服务，每 3 秒轮询腾讯财经，把行情更新实时推送给订阅的客户端。

## 环境要求

- Bun >= 1.0

## 快速开始

```bash
cd ws-finance
bun install
bun run dev    # 开发模式（热重载）
bun run start  # 生产模式
```

监听端口 **3003**。

## 通信协议

### 客户端 → 服务端

订阅行情，发送 `subscribe` 事件：
```json
["sh600519", "sz000001"]
```
支持传单个字符串或数组。

取消订阅，发送 `unsubscribe` 事件：
```json
["sh600519"]
```

### 服务端 → 客户端

行情更新（`quote` 事件）：
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

订阅确认（`subscribed` 事件）：
```json
{ "symbols": ["sh600519", "sz000001"] }
```

## Docker

```bash
docker build -t vane-ws .
docker run -p 3003:3003 vane-ws
```
