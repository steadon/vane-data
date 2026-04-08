'use client'

import { useEffect, useState, useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { TrendingUp, TrendingDown, Activity, BarChart3 } from 'lucide-react'

interface IndexData {
  symbol: string
  name: string
  price: number
  change_percent: number
  change_amount: number
  volume: string
  amount: string
}

interface MarketIndexPanelProps {
  onIndexClick?: (symbol: string) => void
}

const INDEX_LIST = [
  { symbol: 'sh000001', name: '上证指数' },
  { symbol: 'sz399001', name: '深证成指' },
  { symbol: 'sz399006', name: '创业板指' },
  { symbol: 'sh000688', name: '科创50' },
  { symbol: 'sz399303', name: '国证2000' },
]

function formatAmount(val: string): string {
  const num = parseFloat(val)
  if (isNaN(num)) return val
  if (num >= 1e12) return (num / 1e12).toFixed(2) + '万亿'
  if (num >= 1e8) return (num / 1e8).toFixed(2) + '亿'
  if (num >= 1e4) return (num / 1e4).toFixed(2) + '万'
  return num.toFixed(2)
}

function IndexCardSkeleton() {
  return (
    <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-gray-100 dark:bg-gray-700">
      <Skeleton className="h-3 w-16 bg-gray-200 dark:bg-gray-600" />
      <Skeleton className="h-5 w-24 bg-gray-200 dark:bg-gray-600" />
      <Skeleton className="h-3 w-20 bg-gray-200 dark:bg-gray-600" />
    </div>
  )
}

export default function MarketIndexPanel({ onIndexClick }: MarketIndexPanelProps) {
  const [indices, setIndices] = useState<IndexData[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState('')

  const fetchIndices = useCallback(async () => {
    try {
      const symbols = INDEX_LIST.map((i) => i.symbol).join(',')
      const res = await fetch(`/api/finance/quote?symbols=${symbols}`)
      const json = await res.json()
      if (json.code === 200 && json.data?.quotes?.length > 0) {
        const quotes = json.data.quotes as Array<Record<string, unknown>>
        setIndices(
          quotes.map((q) => ({
            symbol: q.symbol as string,
            name: q.name as string,
            price: q.price as number,
            change_percent: q.change_percent as number,
            change_amount: q.change_amount as number,
            volume: (q.volume as number)?.toLocaleString() || '-',
            amount: formatAmount(String(q.amount_display || q.amount || '')),
          }))
        )
        setLastUpdate(new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
      }
    } catch {
      // silent
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchIndices()
    const interval = setInterval(fetchIndices, 30000)
    return () => clearInterval(interval)
  }, [fetchIndices])

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-150 hover:shadow-md">
      <CardContent className="p-0">
        {/* Header */}
        <div className="flex items-center justify-between px-2 pt-1.5 pb-0.5">
          <div className="flex items-center gap-1.5">
            <BarChart3 className="size-3 text-blue-500" />
            <span className="h-3 w-[3px] rounded-full bg-blue-400" />
            <span className="text-xs font-semibold text-gray-900 dark:text-gray-100">大盘指数</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Activity className="size-3" />
            <span>{lastUpdate}</span>
          </div>
        </div>

        {/* Indices Grid */}
        <div className="grid grid-cols-5 gap-px bg-gray-100 dark:bg-gray-700">
          {loading
            ? Array.from({ length: 5 }).map((_, i) => (
                <IndexCardSkeleton key={i} />
              ))
            : indices.map((idx) => {
                const isUp = idx.change_percent >= 0
                const colorClass = isUp ? 'text-red-500' : 'text-green-500'
                const ArrowIcon = isUp ? TrendingUp : TrendingDown

                return (
                  <div
                    key={idx.symbol}
                    onClick={() => onIndexClick?.(idx.symbol)}
                    className="flex flex-col gap-0.5 px-2 py-1 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 transition-all duration-150 cursor-pointer group active:scale-[0.98]"
                  >
                    <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-400 dark:group-hover:text-gray-300 transition-colors truncate">
                      {idx.name}
                    </span>
                    <span className={`text-[13px] font-bold tabular-nums ${colorClass}`}>
                      {idx.price.toFixed(2)}
                    </span>
                    <div className={`flex items-center gap-0.5 ${colorClass}`}>
                      <ArrowIcon className="size-3" />
                      <span className="text-xs font-medium tabular-nums">
                        {isUp ? '+' : ''}
                        {idx.change_amount.toFixed(2)}
                      </span>
                      <span
                        className={`text-xs font-semibold tabular-nums px-1 py-0.5 rounded ${
                          isUp ? 'bg-red-50 dark:bg-red-500/10' : 'bg-green-50 dark:bg-green-500/10'
                        }`}
                      >
                        {isUp ? '+' : ''}
                        {idx.change_percent.toFixed(2)}%
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 tabular-nums">
                      成交 {idx.amount}
                    </span>
                  </div>
                )
              })}
        </div>
      </CardContent>
    </Card>
  )
}
