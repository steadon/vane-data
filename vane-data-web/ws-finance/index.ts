import { createServer } from 'http'
import { Server } from 'socket.io'

// ─── Types ───────────────────────────────────────────────────────────────────

interface QuoteUpdate {
  symbol: string
  name: string
  price: number
  change_percent: number
  change_amount: number
  volume: number
  timestamp: string
}

interface ClientSubscription {
  socketId: string
  symbols: Set<string>
}

// ─── Server Setup ────────────────────────────────────────────────────────────

const httpServer = createServer()
const io = new Server(httpServer, {
  path: '/',
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
  pingTimeout: 60000,
  pingInterval: 25000,
})

const PORT = 3003

// ─── State ───────────────────────────────────────────────────────────────────

const subscriptions = new Map<string, ClientSubscription>() // socketId → subscription
const quoteCache = new Map<string, QuoteUpdate>() // symbol → latest quote
const POLL_INTERVAL_MS = 3000

// ─── Tencent Quote Fetcher ──────────────────────────────────────────────────

/**
 * Fetch real-time quotes from Tencent Finance API.
 * Response is GBK-encoded. Bun doesn't have native GBK support,
 * so we attempt TextDecoder with 'gbk' fallback to 'utf-8'.
 */
async function fetchTencentQuotes(symbols: string[]): Promise<QuoteUpdate[]> {
  if (symbols.length === 0) return []

  const symbolList = symbols.join(',')
  const url = `http://qt.gtimg.cn/q=${symbolList}`

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://gu.qq.com/',
      },
      signal: AbortSignal.timeout(8000),
    })

    if (!response.ok) {
      console.error(`[Tencent] HTTP ${response.status}`)
      return []
    }

    const buffer = await response.arrayBuffer()
    const uint8 = new Uint8Array(buffer)

    // Try GBK decoding first, fallback to UTF-8
    let text: string
    try {
      const decoder = new TextDecoder('gbk')
      text = decoder.decode(uint8)
    } catch {
      try {
        const decoder = new TextDecoder('gb2312')
        text = decoder.decode(uint8)
      } catch {
        const decoder = new TextDecoder('utf-8')
        text = decoder.decode(uint8)
      }
    }

    return parseTencentQuoteText(text)
  } catch (err) {
    console.error('[Tencent] Fetch error:', err)
    return []
  }
}

/**
 * Parse the Tencent quote response text.
 * Format: v_sh600519="1~贵州茅台~sh600519~1440.02~-19.98~-1.37~...";
 */
function parseTencentQuoteText(text: string): QuoteUpdate[] {
  const results: QuoteUpdate[] = []

  // Split by semicolons and process each stock line
  const lines = text.split(';')

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || !trimmed.includes('="')) continue

    const match = trimmed.match(/="(.+)"/)
    if (!match) continue

    const fields = match[1].split('~')
    if (fields.length < 45) continue

    const symbol = fields[2] // e.g. sh600519
    const name = fields[1] // e.g. 贵州茅台
    const price = parseFloat(fields[3]) // 当前价
    const changeAmount = parseFloat(fields[31]) // 涨跌额
    const changePercent = parseFloat(fields[32]) // 涨跌幅(%)
    const volume = parseFloat(fields[6]) // 成交量(手)

    // Validate price is a valid number
    if (isNaN(price) || price <= 0) continue

    const quote: QuoteUpdate = {
      symbol,
      name,
      price,
      change_percent: changePercent,
      change_amount: changeAmount,
      volume,
      timestamp: new Date().toISOString(),
    }

    // Update cache
    quoteCache.set(symbol, quote)
    results.push(quote)
  }

  return results
}

// ─── Get all subscribed symbols ─────────────────────────────────────────────

function getAllSubscribedSymbols(): string[] {
  const symbolSet = new Set<string>()
  for (const sub of subscriptions.values()) {
    for (const sym of sub.symbols) {
      symbolSet.add(sym)
    }
  }
  return Array.from(symbolSet)
}

// ─── Broadcast quote updates to relevant clients ─────────────────────────────

function broadcastQuotes(quotes: QuoteUpdate[]) {
  for (const quote of quotes) {
    // Send to all clients subscribed to this symbol
    for (const [socketId, sub] of subscriptions.entries()) {
      if (sub.symbols.has(quote.symbol)) {
        io.to(socketId).emit('quote', {
          type: 'quote',
          data: quote,
        })
      }
    }
  }
}

// ─── Polling loop ────────────────────────────────────────────────────────────

let pollTimer: ReturnType<typeof setInterval> | null = null

function startPolling() {
  if (pollTimer) return

  console.log(`[Poll] Starting quote polling every ${POLL_INTERVAL_MS}ms`)

  pollTimer = setInterval(async () => {
    const symbols = getAllSubscribedSymbols()
    if (symbols.length === 0) return

    const quotes = await fetchTencentQuotes(symbols)
    if (quotes.length > 0) {
      broadcastQuotes(quotes)
    }
  }, POLL_INTERVAL_MS)
}

function stopPolling() {
  if (pollTimer) {
    clearInterval(pollTimer)
    pollTimer = null
    console.log('[Poll] Stopped quote polling')
  }
}

// ─── Socket.IO Event Handlers ───────────────────────────────────────────────

io.on('connection', (socket) => {
  console.log(`[Socket] Client connected: ${socket.id}`)

  // Initialize subscription entry
  subscriptions.set(socket.id, {
    socketId: socket.id,
    symbols: new Set(),
  })

  // Client subscribes to one or more symbols
  socket.on('subscribe', (symbols: string | string[]) => {
    const sub = subscriptions.get(socket.id)
    if (!sub) return

    const symbolList = Array.isArray(symbols) ? symbols : [symbols]
    for (const sym of symbolList) {
      sub.symbols.add(sym)
    }

    const totalSubs = getAllSubscribedSymbols().length
    console.log(
      `[Socket] ${socket.id} subscribed to: [${symbolList.join(', ')}] (unique symbols: ${totalSubs})`
    )

    // Start polling if not already running
    startPolling()

    // Send cached data immediately if available
    for (const sym of symbolList) {
      const cached = quoteCache.get(sym)
      if (cached) {
        socket.emit('quote', {
          type: 'quote',
          data: { ...cached, timestamp: new Date().toISOString() },
        })
      }
    }

    socket.emit('subscribed', { symbols: Array.from(sub.symbols) })
  })

  // Client unsubscribes from symbols
  socket.on('unsubscribe', (symbols: string | string[]) => {
    const sub = subscriptions.get(socket.id)
    if (!sub) return

    const symbolList = Array.isArray(symbols) ? symbols : [symbols]
    for (const sym of symbolList) {
      sub.symbols.delete(sym)
    }

    console.log(`[Socket] ${socket.id} unsubscribed from: [${symbolList.join(', ')}]`)

    // Stop polling if no more subscriptions
    if (getAllSubscribedSymbols().length === 0) {
      stopPolling()
    }

    socket.emit('unsubscribed', { symbols: Array.from(sub.symbols) })
  })

  socket.on('disconnect', (reason) => {
    console.log(`[Socket] Client disconnected: ${socket.id} (${reason})`)
    subscriptions.delete(socket.id)

    if (getAllSubscribedSymbols().length === 0) {
      stopPolling()
    }
  })

  socket.on('error', (err) => {
    console.error(`[Socket] Error on ${socket.id}:`, err)
  })
})

// ─── Start Server ───────────────────────────────────────────────────────────

httpServer.listen(PORT, () => {
  console.log(`[ws-finance] WebSocket server running on port ${PORT}`)
  console.log(`[ws-finance] Waiting for client subscriptions...`)
})

// ─── Graceful Shutdown ──────────────────────────────────────────────────────

function shutdown(signal: string) {
  console.log(`[ws-finance] Received ${signal}, shutting down...`)
  stopPolling()
  httpServer.close(() => {
    console.log('[ws-finance] Server closed')
    process.exit(0)
  })
}

process.on('SIGTERM', () => shutdown('SIGTERM'))
process.on('SIGINT', () => shutdown('SIGINT'))
