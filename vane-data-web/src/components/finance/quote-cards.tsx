'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { io, Socket } from 'socket.io-client'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { TrendingUp, TrendingDown, Activity, Star } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { isInWatchlist, addToWatchlistStorage } from '@/lib/watchlist-storage'

export interface QuoteData {
  symbol: string
  name: string
  price: number
  change_percent: number
  change_amount: number
  open: number
  high: number
  low: number
  pre_close: number
  volume: number
  amount: number
  amount_display: string
  turnover_rate: number
  pe_ratio: number
  pb_ratio: number
  market_cap: number
  market_cap_display: string
  timestamp: string
}

interface WsQuoteData {
  type: 'quote'
  data: {
    symbol: string
    name: string
    price: number
    change_percent: number
    change_amount: number
    volume: number
    timestamp: string
  }
}

interface QuoteCardsProps {
  symbol: string
  onDataChange?: (data: QuoteData | null) => void
}

type FlashDirection = 'up' | 'down' | null

function formatVolume(vol: number): string {
  if (vol >= 1e8) return (vol / 1e8).toFixed(2) + '亿'
  if (vol >= 1e4) return (vol / 1e4).toFixed(2) + '万'
  return vol.toLocaleString()
}

function MetricCard({
  label,
  value,
  suffix,
  colorClass,
}: {
  label: string
  value: string
  suffix?: string
  colorClass?: string
}) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-xs text-gray-400 dark:text-gray-500">{label}</span>
      <span className={`text-sm font-medium tabular-nums ${colorClass || 'text-gray-900 dark:text-gray-100'}`}>
        {value}
        {suffix && <span className="text-xs text-gray-400 dark:text-gray-500 ml-0.5">{suffix}</span>}
      </span>
    </div>
  )
}

function QuoteCardsSkeleton() {
  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md">
      <CardContent className="p-2">
        <div className="flex items-center gap-4 mb-2">
          <Skeleton className="h-10 w-32 bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-8 w-24 bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg" />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default function QuoteCards({ symbol, onDataChange }: QuoteCardsProps) {
  const [quote, setQuote] = useState<QuoteData | null>(null)
  const [loading, setLoading] = useState(true)
  const [wsConnected, setWsConnected] = useState(false)
  const [flash, setFlash] = useState<FlashDirection>(null)
  const [inWatchlist, setInWatchlist] = useState(false)
  const socketRef = useRef<Socket | null>(null)
  const flashTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastPriceRef = useRef<number | null>(null)
  const { toast } = useToast()

  // ── Fetch initial quote via REST API ──
  const fetchQuote = useCallback(async () => {
    if (!symbol) return
    try {
      const res = await fetch(`/api/finance/quote?symbols=${symbol}`)
      const json = await res.json()
      if (json.code === 200 && json.data?.quotes?.length > 0) {
        const q = json.data.quotes[0] as QuoteData
        setQuote(q)
        lastPriceRef.current = q.price
        onDataChange?.(q)
      }
    } catch {
      // Silently fail for quote refresh
    } finally {
      setLoading(false)
    }
  }, [symbol, onDataChange])

  // ── Check watchlist status on symbol change ──
  useEffect(() => {
    setInWatchlist(isInWatchlist(symbol))
  }, [symbol])

  // ── Initial fetch on symbol change ──
  useEffect(() => {
    setLoading(true)
    setQuote(null)
    lastPriceRef.current = null
    fetchQuote()
  }, [fetchQuote])

  // ── WebSocket connection ──
  useEffect(() => {
    if (!symbol) return

    // Connect to the ws-finance mini-service via gateway proxy
    const socket = io('/?XTransformPort=3003', {
      transports: ['websocket', 'polling'],
      forceNew: true,
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 2000,
      reconnectionDelayMax: 10000,
      timeout: 10000,
    })

    socketRef.current = socket

    socket.on('connect', () => {
      setWsConnected(true)
      // Subscribe to the current symbol
      socket.emit('subscribe', symbol)
    })

    socket.on('disconnect', () => {
      setWsConnected(false)
    })

    socket.on('connect_error', () => {
      setWsConnected(false)
    })

    socket.on('quote', (msg: WsQuoteData) => {
      if (msg.type !== 'quote' || !msg.data) return
      const wsQuote = msg.data

      // Only process updates for the current symbol
      if (wsQuote.symbol !== symbol) return

      // Trigger flash animation based on price direction
      const prevPrice = lastPriceRef.current
      if (prevPrice !== null && wsQuote.price !== prevPrice) {
        const direction = wsQuote.price > prevPrice ? 'up' : 'down'
        setFlash(direction)

        // Clear previous timeout
        if (flashTimeoutRef.current) {
          clearTimeout(flashTimeoutRef.current)
        }

        // Remove flash after 800ms
        flashTimeoutRef.current = setTimeout(() => {
          setFlash(null)
          flashTimeoutRef.current = null
        }, 800)
      }

      lastPriceRef.current = wsQuote.price

      // Merge WebSocket data into existing quote state
      setQuote((prev) => {
        if (!prev) return prev
        const updated = {
          ...prev,
          price: wsQuote.price,
          change_percent: wsQuote.change_percent,
          change_amount: wsQuote.change_amount,
          volume: wsQuote.volume,
          timestamp: wsQuote.timestamp,
        }
        onDataChange?.(updated)
        return updated
      })
    })

    // Re-subscribe on symbol change
    const handleSymbolChange = () => {
      if (socket.connected) {
        socket.emit('unsubscribe', symbol)
        socket.emit('subscribe', symbol)
      }
    }

    // Clean up on unmount
    return () => {
      if (socket.connected) {
        socket.emit('unsubscribe', symbol)
      }
      socket.disconnect()
      socketRef.current = null
      if (flashTimeoutRef.current) {
        clearTimeout(flashTimeoutRef.current)
      }
    }
  }, [symbol, onDataChange])

  // ── Add to watchlist handler (must be declared before early returns for rules-of-hooks) ──
  const handleAddToWatchlist = useCallback(() => {
    if (!quote) return
    if (isInWatchlist(symbol)) {
      toast({ title: '已在自选中', description: `${quote.name} 已在自选列表中` })
      return
    }
    const added = addToWatchlistStorage(quote.symbol, quote.name)
    if (added) {
      setInWatchlist(true)
      toast({ title: '已添加到自选', description: `${quote.name} 已加入自选列表` })
    }
  }, [quote, symbol, isInWatchlist, toast])

  if (loading) return <QuoteCardsSkeleton />

  if (!quote) {
    return (
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md">
        <CardContent className="p-2">
          <div className="text-center text-gray-400 dark:text-gray-500 text-sm py-3">暂无行情数据</div>
        </CardContent>
      </Card>
    )
  }

  const isUp = quote.change_percent >= 0
  const priceColor = isUp ? 'text-red-500' : 'text-green-500'
  const ArrowIcon = isUp ? TrendingUp : TrendingDown

  // Flash animation classes (A-share convention: red=up, green=down)
  const flashTextClass =
    flash === 'up'
      ? 'text-red-600 dark:text-red-400'
      : flash === 'down'
        ? 'text-green-600 dark:text-green-400'
        : priceColor

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md">
      <CardContent className="p-2 space-y-1.5">
        {/* Header: Name + Price */}
        <div className="flex items-end gap-1.5">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{quote.name}</h3>
              <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">{quote.symbol}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleAddToWatchlist()
                }}
                className={`inline-flex items-center gap-0.5 text-xs px-1.5 py-0.5 rounded transition-colors duration-150 ${
                  inWatchlist
                    ? 'text-blue-500 bg-blue-50 dark:bg-blue-500/10 dark:text-blue-400'
                    : 'text-gray-400 dark:text-gray-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-blue-500/10'
                }`}
                title={inWatchlist ? '已在自选中' : '添加到自选'}
              >
                <Star className={`size-3 ${inWatchlist ? 'fill-blue-500 dark:fill-blue-400' : ''}`} />
                <span>{inWatchlist ? '已自选' : '＋自选'}</span>
              </button>
            </div>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span
              className={`text-xl font-bold tabular-nums transition-all duration-300 ${flash ? flashTextClass : priceColor}`}
            >
              {quote.price.toFixed(2)}
            </span>
            <div className={`flex items-center gap-1 transition-colors duration-300 ${flash ? flashTextClass : priceColor}`}>
              <ArrowIcon className="size-3.5" />
              <span className="text-sm font-medium tabular-nums">
                {isUp ? '+' : ''}
                {quote.change_amount.toFixed(2)}
              </span>
              <span
                className={`text-sm font-medium tabular-nums px-1.5 py-0.5 rounded transition-colors duration-300 ${
                  flash === 'up'
                    ? 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400'
                    : flash === 'down'
                      ? 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400'
                      : isUp
                        ? 'bg-red-50 dark:bg-red-500/10'
                        : 'bg-green-50 dark:bg-green-500/10'
                }`}
              >
                {isUp ? '+' : ''}
                {quote.change_percent.toFixed(2)}%
              </span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            {/* WebSocket status indicator */}
            <div className="flex items-center gap-1" title={wsConnected ? 'WebSocket 已连接' : 'WebSocket 未连接'}>
              <div
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  wsConnected ? 'bg-emerald-500 live-pulse' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
              <span className="text-[10px] text-gray-400 dark:text-gray-500 hidden sm:inline">
                WS
              </span>
            </div>
            {/* Live badge */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
              <Activity className="size-3" />
              <span>实时行情</span>
            </div>
          </div>
        </div>

        {/* Flash overlay bar (A-share: red=up, green=down, only shown during flash) */}
        {flash && (
          <div
            className={`h-0.5 rounded-full transition-opacity duration-300 ${
              flash === 'up'
                ? 'bg-gradient-to-r from-transparent via-red-400 to-transparent'
                : 'bg-gradient-to-r from-transparent via-green-400 to-transparent'
            }`}
          />
        )}

        {/* Metrics grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-3 gap-y-1">
          <MetricCard label="今开" value={quote.open.toFixed(2)} />
          <MetricCard label="最高" value={quote.high.toFixed(2)} colorClass="text-red-400" />
          <MetricCard label="最低" value={quote.low.toFixed(2)} colorClass="text-green-400" />
          <MetricCard label="昨收" value={quote.pre_close.toFixed(2)} />
          <MetricCard label="成交量" value={formatVolume(quote.volume)} suffix="手" />
          <MetricCard label="成交额" value={quote.amount_display || formatVolume(quote.amount)} />
          <MetricCard label="换手率" value={quote.turnover_rate.toFixed(2)} suffix="%" />
          <MetricCard label="市盈率" value={quote.pe_ratio > 0 ? quote.pe_ratio.toFixed(2) : '-'} />
          <MetricCard label="市净率" value={quote.pb_ratio > 0 ? quote.pb_ratio.toFixed(2) : '-'} />
          <MetricCard
            label="总市值"
            value={quote.market_cap_display || formatVolume(quote.market_cap)}
          />
        </div>
      </CardContent>
    </Card>
  )
}
