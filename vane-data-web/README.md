# vane-data-web

基于 Next.js 16 的 A 股看盘界面，数据来自 [vane-data-api](../vane-data-api/README.md)，实时行情通过 [ws-finance](./ws-finance/) 推送。既是一个开箱即用的看盘工具，也可以作为调用 vane-data-api 的参考实现。

## 功能

- K 线图 + 技术指标（MA、BOLL、MACD、RSI、KDJ）
- 实时行情卡片（Socket.IO 推送）
- 行业 / 概念板块热力图
- 涨跌停池追踪
- 个股详情面板（PE、PB、市值、52 周数据）
- 资金流向图（主力 vs 散户）
- 财经新闻流
- 自选股列表，支持拖拽排序（存 localStorage）
- 大盘指数面板
- 深色 / 浅色主题切换
- K 线全屏模式

## 环境要求

- Bun >= 1.0 或 Node.js >= 18
- vane-data-api 运行在 8000 端口
- ws-finance 运行在 3003 端口（可选，不启动则没有实时推送）

## 快速开始

```bash
cd vane-data-web

# 安装依赖
bun install

# 启动开发服务器（端口 3000）
bun run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 环境变量

复制 `.env.example` 为 `.env.local`：

```bash
cp .env.example .env.local
```

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `VANE_API_URL` | `http://localhost:8000` | vane-data-api 地址（服务端变量，容器启动时可覆盖，无需重新构建） |
| `NEXT_PUBLIC_WS_URL` | `http://localhost:3003` | ws-finance Socket.IO 地址（客户端变量，构建时确定） |

前端通过 Next.js rewrites 把 `/api/finance/*` 代理到后端，这样客户端不会直接跨域请求 API。

## 命令

| 命令 | 说明 |
|------|------|
| `bun run dev` | 启动开发服务器（端口 3000） |
| `bun run build` | 构建生产包（standalone 模式） |
| `bun run start` | 启动生产服务器 |
| `bun run lint` | 运行 ESLint |
| `bun run ws:dev` | 启动 ws-finance 开发模式 |
| `bun run ws:start` | 启动 ws-finance 生产模式 |

## 生产构建

```bash
bun run build
bun run start
```

使用 `output: "standalone"` 构建，`.next/standalone` 目录包含运行所需的全部文件，不依赖 `node_modules`。

### Docker

```bash
docker build -t vane-web .
docker run -p 3000:3000 \
  -e VANE_API_URL=http://your-api-host:8000 \
  -e NEXT_PUBLIC_WS_URL=http://your-ws-host:3003 \
  vane-web
```

## 项目结构

```
vane-data-web/
├── src/
│   ├── app/
│   │   ├── page.tsx            # 主页面（看盘界面）
│   │   ├── layout.tsx          # 根布局（主题、字体）
│   │   └── globals.css
│   ├── components/
│   │   ├── finance/            # 业务组件
│   │   │   ├── kline-chart.tsx         # K 线图 + 技术指标
│   │   │   ├── quote-cards.tsx         # 实时行情卡片
│   │   │   ├── market-heatmap.tsx      # 板块热力图
│   │   │   ├── sector-panel.tsx        # 板块列表 + 成分股
│   │   │   ├── stock-detail-panel.tsx  # 个股详情 + 资金流向
│   │   │   ├── limit-pool.tsx          # 涨跌停追踪
│   │   │   ├── news-panel.tsx          # 财经新闻
│   │   │   ├── market-index.tsx        # 大盘指数
│   │   │   ├── watchlist.tsx           # 自选股（拖拽排序）
│   │   │   └── stock-search.tsx        # 股票搜索
│   │   ├── theme-provider.tsx  # next-themes 封装
│   │   └── ui/                 # shadcn/ui 组件库
│   ├── lib/
│   │   ├── finance-api.ts      # 上游 API 的 HTTP 工具
│   │   ├── watchlist-storage.ts # 自选股 localStorage 持久化
│   │   └── utils.ts            # cn() 等工具函数
│   └── hooks/
│       ├── use-mobile.ts
│       └── use-toast.ts
├── ws-finance/                 # Socket.IO WebSocket 服务（端口 3003）
│   ├── index.ts
│   ├── package.json
│   └── Dockerfile
├── public/
├── next.config.ts              # API 代理 rewrites，standalone 构建
├── tailwind.config.ts
├── components.json             # shadcn/ui 配置
├── Dockerfile
└── .env.example
```

## API 代理

前端所有数据请求都通过 Next.js rewrites 代理到后端，避免跨域问题：

```
浏览器 → /api/finance/quote → Next.js rewrite → http://localhost:8000/api/quote
```

配置在 `next.config.ts`：

```ts
rewrites: [{ source: "/api/finance/:path*", destination: `${apiUrl}/api/:path*` }]
```

## ws-finance

`ws-finance` 是一个独立的 Socket.IO 服务，每 3 秒轮询腾讯财经并向订阅的客户端推送行情更新。

```bash
# 在 vane-data-web 目录下启动
bun run ws:dev

# 或者直接进目录
cd ws-finance
bun run dev
```

详细说明见 [ws-finance/README.md](./ws-finance/README.md)。

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Next.js 16（App Router） |
| 语言 | TypeScript 5 |
| 样式 | Tailwind CSS 4 + shadcn/ui |
| 图表 | Recharts |
| 状态管理 | Zustand |
| 数据请求 | TanStack React Query |
| 实时通信 | Socket.IO client |
| UI 基础组件 | Radix UI |
| 拖拽 | @dnd-kit |
| 动画 | Framer Motion |
| 运行时 | Bun / Node.js |

## License

MIT
