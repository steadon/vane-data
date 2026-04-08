# Vane Data — A 股金融数据平台

[English](./README.md) | 中文

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Python](https://img.shields.io/badge/python-3.10+-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Bun](https://img.shields.io/badge/bun-1.0+-fbf0df?logo=bun&logoColor=black)](https://bun.sh/)
[![Docker](https://img.shields.io/badge/docker-ready-2496ED?logo=docker&logoColor=white)](./docker-compose.yml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/steadon/vane-data/pulls)

开源 A 股金融数据平台，前后端分离架构。后端（`vane-data-api`）聚合腾讯财经、新浪财经、东方财富等公开数据，提供标准 REST API 与 WebSocket 实时推送；前端（`vane-data-web`）是基于 Next.js 的专业可视化仪表盘，同时也是调用 API 的参考实现。

## 架构

```
vane-data/
├── vane-data-api/        # Python + FastAPI — 数据聚合后端（端口 8000）
├── vane-data-web/        # Next.js 16 — 可视化仪表盘（端口 3000）
│   └── ws-finance/       # Socket.IO — 实时行情推送（端口 3003）
├── docker-compose.yml    # 一键全栈部署
└── start-all.sh          # 本地开发一键启动
```

**后端与前端均可独立部署。** API 不依赖前端，任何 HTTP 客户端均可直接调用。

## 数据源

| 功能 | 数据源 |
|------|--------|
| 实时行情 | 腾讯财经（主）/ 新浪财经（备） |
| K 线数据 | 腾讯财经 |
| 个股详情、板块、资金流向、新闻 | 东方财富 |
| 涨跌停池 | 东方财富 |

## 快速开始

### 方式一 — Docker Compose（推荐）

```bash
git clone https://github.com/steadon/vane-data.git
cd vane-data
docker compose up
```

- 前端：http://localhost:3000
- API：http://localhost:8000
- Swagger 文档：http://localhost:8000/docs

### 方式二 — 本地开发

**环境要求：** Python 3.10+、Bun >= 1.0

```bash
git clone https://github.com/steadon/vane-data.git
cd vane-data
bun install
bun run dev
```

`start-all.sh` 会自动处理全部初始化：创建 Python 虚拟环境、安装 pip 依赖，然后同时启动三个服务：
- Python API（端口 8000）
- WebSocket 服务（端口 3003）
- Next.js 前端（端口 3000）

### 方式三 — 单独启动

```bash
# 仅启动 API
bun run dev:api

# 仅启动前端（需先启动 API）
bun run dev:web

# 仅启动 WebSocket 服务
bun run dev:ws
```

## 部署

### 仅部署 API

```bash
cd vane-data-api
source venv/bin/activate
python main.py
# 或使用 uvicorn（多 worker）
uvicorn main:app --host 0.0.0.0 --port 8000 --workers 2
```

详细说明见 [vane-data-api/README.md](./vane-data-api/README.md)。

### 仅部署前端

```bash
cd vane-data-web
bun run build
bun run start
```

通过环境变量 `VANE_API_URL` 指向实际部署的 API 地址。详细说明见 [vane-data-web/README.md](./vane-data-web/README.md)。

### Nginx 反向代理

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

## API 概览

所有接口统一返回 `{ "code": 200, "msg": "success", "data": { ... } }`。

| 接口 | 说明 |
|------|------|
| `GET /api/health` | 健康检查 |
| `GET /api/quote` | 实时行情（支持多股票批量查询） |
| `GET /api/kline` | K 线数据（日/周/月，支持前后复权） |
| `GET /api/limit-pool` | 涨停 / 跌停股票池 |
| `GET /api/sectors` | 行业 / 概念板块列表 |
| `GET /api/sector-stocks` | 板块成分股 |
| `GET /api/stock-detail` | 个股详情（PE/PB/市值/52周等） |
| `GET /api/capital-flow` | 资金流向（主力/散户分类净额） |
| `GET /api/news` | 财经新闻 |
| `WS /ws/quotes` | WebSocket 实时行情推送 |

完整接口文档：[vane-data-api/README.md](./vane-data-api/README.md)
在线交互文档（服务启动后）：http://localhost:8000/docs

## 常用股票代码

| 代码 | 名称 |
|------|------|
| `sh000001` | 上证指数 |
| `sz399001` | 深证成指 |
| `sz399006` | 创业板指 |
| `sh000688` | 科创 50 |
| `sh600519` | 贵州茅台 |
| `sz000001` | 平安银行 |
| `sz300750` | 宁德时代 |
| `sz002594` | 比亚迪 |

## 常见问题

**Q：数据延迟多久？**
A：交易时段约 3–10 秒，非交易时段为收盘快照数据。

**Q：有请求频率限制吗？**
A：本服务无内置限流，但上游平台有反爬机制，建议单 IP 请求间隔 > 500ms。

**Q：可以不启动前端，直接调用 API 吗？**
A：可以。API 完全独立，直接访问端口 8000 即可。

## License

MIT

## 免责声明

本项目仅聚合公开金融数据，供学习与研究使用，不构成任何投资建议。数据准确性依赖上游数据源，不对数据延迟、错误或遗漏承担责任。
