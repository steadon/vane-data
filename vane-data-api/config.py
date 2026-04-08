"""Configuration constants for vane-data-api."""

# Server
HOST = "0.0.0.0"
PORT = 8000

# HTTP Client
REQUEST_TIMEOUT = 10.0  # seconds
MAX_RETRIES = 2
RETRY_DELAY = 500  # ms base delay (exponential backoff)

# WebSocket
WS_POLL_INTERVAL = 3.0  # seconds

# Default HTTP headers
DEFAULT_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    "Referer": "https://finance.qq.com/",
}

# Upstream API URLs
TENCENT_QUOTE_URL = "http://qt.gtimg.cn/q="
SINA_QUOTE_URL = "http://hq.sinajs.cn/list="
TENCENT_KLINE_URL = "http://web.ifzq.gtimg.cn/appstock/app/fqkline/get"
EASTMONEY_SECTOR_URL = "http://push2.eastmoney.com/api/qt/clist/get"
EASTMONEY_STOCK_URL = "http://push2.eastmoney.com/api/qt/stock/get"
EASTMONEY_CAPITAL_FLOW_URL = "https://push2.eastmoney.com/api/qt/stock/fflow/daykline/get"
EASTMONEY_NEWS_URL = "https://newsapi.eastmoney.com/kuaixun/v1/getlist_101_ajaxResult_{count}_{page}_.html"
