# vane-data-api

基于 Python + FastAPI 的 A 股行情数据聚合后端。从腾讯财经、新浪财经、东方财富等公开接口拉数据，提供 8 个 REST 接口和 1 个 WebSocket 实时推送端点。无需数据库，无状态，直接跑起来就能用。

## 特性

- 8 个 REST 接口 + 1 个 WebSocket 接口
- 无状态，不依赖数据库
- 异步 HTTP 客户端，带自动重试和超时
- 自动处理中文金融 API 的 GBK/UTF-8 编码
- 自动生成 Swagger 文档（`/docs`）
- CORS 默认全开（可配置）

## 环境要求

- Python 3.10+
- pip

## 快速开始

```bash
cd vane-data-api

# 建虚拟环境
python3 -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate

# 装依赖
pip install -r requirements.txt

# 启动（端口 8000）
python main.py
```

启动后访问 `http://localhost:8000`，Swagger 文档在 `http://localhost:8000/docs`。

## 环境变量

复制 `.env.example` 为 `.env` 按需修改：

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `HOST` | `0.0.0.0` | 绑定地址 |
| `PORT` | `8000` | 监听端口 |

## 生产部署

```bash
# 直接用 uvicorn（多 worker）
uvicorn main:app --host 0.0.0.0 --port 8000 --workers 2

# Docker
docker build -t vane-api .
docker run -p 8000:8000 vane-api
```

---

## 接口文档

所有接口统一返回以下格式：

```json
{
  "code": 200,
  "msg": "success",
  "data": { ... }
}
```

| `code` | 含义 |
|--------|------|
| `200` | 成功 |
| `400` | 参数错误 |
| `502` | 上游数据源异常 |
| `500` | 内部错误 |

---

### 健康检查

```
GET /api/health
```

返回服务状态，适合用于探活和负载均衡。

**响应：**

```json
{
  "code": 200,
  "msg": "ok",
  "data": { "status": "healthy" }
}
```

---

### 实时行情

```
GET /api/quote
```

查询一只或多只 A 股的实时行情。

**参数：**

| 参数 | 必填 | 类型 | 说明 |
|------|------|------|------|
| `symbols` | 是 | string | 逗号分隔的股票代码，如 `sh600519,sz000001` |
| `source` | 否 | string | `tencent`（默认）或 `sina` |

**股票代码格式：** `{市场}{代码}`，市场前缀 `sh`（上海）或 `sz`（深圳）。也接受裸代码：`600519` → `sh600519`，`000001` → `sz000001`。

**示例：**

```bash
curl "http://localhost:8000/api/quote?symbols=sh600519,sz000001"
```

**响应 `data`：** 行情对象数组。

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

### K 线数据

```
GET /api/kline
```

获取某只股票的 K 线（OHLCV）数据。

**参数：**

| 参数 | 必填 | 类型 | 默认值 | 说明 |
|------|------|------|--------|------|
| `symbol` | 是 | string | — | 股票代码，如 `sh600519` |
| `period` | 否 | string | `day` | `day`、`week` 或 `month` |
| `adjust` | 否 | string | `qfq` | 复权：`qfq`（前复权）、`hfq`（后复权）、`none` |
| `count` | 否 | integer | `320` | 返回条数 |
| `start_date` | 否 | string | — | 起始日期 `YYYYMMDD`，如 `20240101` |
| `end_date` | 否 | string | — | 结束日期 `YYYYMMDD` |

**示例：**

```bash
curl "http://localhost:8000/api/kline?symbol=sh600519&period=day&adjust=qfq&count=60"
```

**响应 `data`：** K 线对象数组。

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

### 涨跌停池

```
GET /api/limit-pool
```

查询当日涨停或跌停股票池。

**参数：**

| 参数 | 必填 | 类型 | 默认值 | 说明 |
|------|------|------|--------|------|
| `type` | 否 | string | `limit_up` | `limit_up`（涨停）或 `limit_down`（跌停） |

涨跌停阈值：主板 ±9.8%，科创板（688xx）和创业板（300xx）±19.5%。

**示例：**

```bash
curl "http://localhost:8000/api/limit-pool?type=limit_up"
```

**响应 `data`：**

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

### 板块列表

```
GET /api/sectors
```

查询行业或概念板块排行。

**参数：**

| 参数 | 必填 | 类型 | 默认值 | 说明 |
|------|------|------|--------|------|
| `type` | 否 | string | `industry` | `industry`（行业）或 `concept`（概念） |

**示例：**

```bash
curl "http://localhost:8000/api/sectors?type=industry"
```

**响应 `data`：** 板块对象数组。

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

### 板块成分股

```
GET /api/sector-stocks
```

查询某个板块的成分股。

**参数：**

| 参数 | 必填 | 类型 | 说明 |
|------|------|------|------|
| `code` | 是 | string | 板块代码，来自 `/api/sectors`，如 `BK0477` |

**示例：**

```bash
curl "http://localhost:8000/api/sector-stocks?code=BK0477"
```

**响应 `data`：** 成分股数组（最多 100 条）。

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

### 个股详情

```
GET /api/stock-detail
```

查询单只股票的详细基本面和技术数据。

**参数：**

| 参数 | 必填 | 类型 | 说明 |
|------|------|------|------|
| `symbol` | 是 | string | 股票代码，如 `sh600519` |

**示例：**

```bash
curl "http://localhost:8000/api/stock-detail?symbol=sh600519"
```

**响应 `data`：**

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

### 资金流向

```
GET /api/capital-flow
```

查询某只股票的每日主力/散户资金净流入情况。

**参数：**

| 参数 | 必填 | 类型 | 默认值 | 说明 |
|------|------|------|--------|------|
| `symbol` | 是 | string | — | 股票代码，如 `sh600519` |
| `days` | 否 | integer | `10` | 天数（1–30） |

**示例：**

```bash
curl "http://localhost:8000/api/capital-flow?symbol=sh600519&days=10"
```

**响应 `data`：**

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

**资金分类说明：**
- `main_net` — 主力（超大单 + 大单合计）
- `super_large_net` — 超大单（> 100万）
- `large_net` — 大单（20万–100万）
- `mid_net` — 中单（5万–20万）
- `small_net` — 小单（< 5万）
- `retail_*` — 散户各档位明细

---

### 财经新闻

```
GET /api/news
```

获取东方财富最新财经新闻。

**参数：**

| 参数 | 必填 | 类型 | 默认值 | 说明 |
|------|------|------|--------|------|
| `page` | 否 | integer | `1` | 页码（从 1 开始） |
| `count` | 否 | integer | `20` | 每页条数（1–50） |

**示例：**

```bash
curl "http://localhost:8000/api/news?page=1&count=20"
```

**响应 `data`：**

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

### WebSocket 实时行情

```
ws://localhost:8000/ws/quotes
```

订阅实时行情推送，服务端每 3 秒轮询腾讯财经并广播给已订阅的客户端。

**客户端 → 服务端：**

订阅：
```json
{ "type": "subscribe", "symbols": ["sh600519", "sz000001"] }
```

取消订阅：
```json
{ "type": "unsubscribe", "symbols": ["sh600519"] }
```

**服务端 → 客户端：**

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

## 项目结构

```
vane-data-api/
├── main.py             # FastAPI 入口，CORS、路由注册、生命周期
├── config.py           # 常量配置：URL、超时、请求头
├── requirements.txt    # Python 依赖
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
│   └── websocket.py    # WebSocket 处理器
└── utils/
    └── http_client.py  # 共享异步 HTTP 客户端（带重试和 GBK 解码）
```

## 数据来源

| 功能 | 数据源 |
|------|--------|
| 实时行情 | 腾讯财经（主）/ 新浪财经（备） |
| K 线数据 | 腾讯财经 |
| 个股详情、资金流向、板块、新闻 | 东方财富 |
| 涨跌停池 | 东方财富 |

交易时段数据延迟约 3–10 秒。

## License

MIT
