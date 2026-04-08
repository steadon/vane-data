'use client'

import { useEffect, useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowUpCircle, ArrowDownCircle, Flame, ChevronLeft, ChevronRight } from 'lucide-react'

interface LimitStock {
  symbol: string
  name: string
  price: number
  change_percent: number
  amount: number
  turnover_rate: number
}

interface LimitPoolData {
  type: string
  date: string
  page: number
  page_size: number
  total: number
  pages: number
  source: string
  stocks: LimitStock[]
}

interface LimitPoolProps {
  onStockClick?: (symbol: string) => void
}

const PAGE_SIZE = 10

function formatAmount(amt: number): string {
  if (amt >= 1e8) return (amt / 1e8).toFixed(2) + '亿'
  if (amt >= 1e4) return (amt / 1e4).toFixed(2) + '万'
  return amt.toLocaleString()
}

function StockRow({ stock, onStockClick }: { stock: LimitStock; onStockClick?: (symbol: string) => void }) {
  const isUp = stock.change_percent > 0
  return (
    <div
      className="flex items-center gap-3 px-2.5 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-150 cursor-pointer group active:scale-[0.98]"
      onClick={() => onStockClick?.(stock.symbol)}
    >
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {stock.name}
        </div>
        <div className="text-xs text-gray-400 dark:text-gray-500 font-mono">{stock.symbol}</div>
      </div>
      <div className="text-right">
        <div className={`text-sm font-semibold tabular-nums ${isUp ? 'text-red-500' : 'text-green-500'}`}>
          {stock.price.toFixed(2)}
        </div>
        <div className="text-xs text-gray-400 dark:text-gray-500">{formatAmount(stock.amount)}</div>
      </div>
      <Badge
        variant="outline"
        className={`text-[11px] font-semibold px-1.5 py-0 min-w-[58px] justify-center ${
          isUp
            ? 'text-red-500 border-red-500/30 bg-red-500/5'
            : 'text-green-500 border-green-500/30 bg-green-500/5'
        }`}
      >
        {isUp ? '+' : ''}
        {stock.change_percent.toFixed(2)}%
      </Badge>
    </div>
  )
}

function PoolSkeleton() {
  return (
    <div className="space-y-2 p-1">
      {Array.from({ length: PAGE_SIZE }).map((_, i) => (
        <Skeleton key={i} className="h-11 bg-gray-200 dark:bg-gray-700 rounded-lg" />
      ))}
    </div>
  )
}

function Pager({
  page, pages, loading,
  onPrev, onNext,
}: {
  page: number; pages: number; loading: boolean
  onPrev: () => void; onNext: () => void
}) {
  if (pages <= 1) return null
  return (
    <div className="flex items-center justify-between pt-1 px-1 border-t border-gray-100 dark:border-gray-700">
      <Button
        variant="ghost"
        size="sm"
        className="h-6 px-2 text-xs text-gray-500 dark:text-gray-400 disabled:opacity-30"
        disabled={page <= 1 || loading}
        onClick={onPrev}
      >
        <ChevronLeft className="size-3 mr-0.5" />上页
      </Button>
      <span className="text-xs text-gray-400 dark:text-gray-500 tabular-nums">
        {page} / {pages}
      </span>
      <Button
        variant="ghost"
        size="sm"
        className="h-6 px-2 text-xs text-gray-500 dark:text-gray-400 disabled:opacity-30"
        disabled={page >= pages || loading}
        onClick={onNext}
      >
        下页<ChevronRight className="size-3 ml-0.5" />
      </Button>
    </div>
  )
}

function PoolTab({
  poolType, page, data, loading, onStockClick,
  onPrev, onNext,
}: {
  poolType: string
  page: number
  data: LimitPoolData | null
  loading: boolean
  onStockClick?: (symbol: string) => void
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <div className="space-y-1">
      {/* Fixed-height scroll area — card size never changes with content */}
      <div className="h-[300px] overflow-y-auto custom-scrollbar space-y-0.5">
        {loading ? (
          <PoolSkeleton />
        ) : data?.stocks && data.stocks.length > 0 ? (
          data.stocks.map((stock) => (
            <StockRow key={stock.symbol} stock={stock} onStockClick={onStockClick} />
          ))
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-500 text-sm">
            {poolType === 'limit_up' ? '暂无涨停股票' : '暂无跌停股票'}
          </div>
        )}
      </div>
      <Pager
        page={page}
        pages={data?.pages ?? 1}
        loading={loading}
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  )
}

export default function LimitPool({ onStockClick }: LimitPoolProps) {
  const [upData, setUpData] = useState<LimitPoolData | null>(null)
  const [downData, setDownData] = useState<LimitPoolData | null>(null)
  const [loadingUp, setLoadingUp] = useState(true)
  const [loadingDown, setLoadingDown] = useState(true)
  const [upPage, setUpPage] = useState(1)
  const [downPage, setDownPage] = useState(1)

  const fetchPool = useCallback(async (
    type: string,
    page: number,
    setter: (d: LimitPoolData) => void,
    setLoad: (l: boolean) => void,
  ) => {
    try {
      setLoad(true)
      const res = await fetch(`/api/finance/limit-pool?type=${type}&page=${page}&page_size=${PAGE_SIZE}`)
      const json = await res.json()
      if (json.code === 200 && json.data) {
        setter(json.data)
      }
    } catch {
      // silent fail — stale data stays visible
    } finally {
      setLoad(false)
    }
  }, [])

  useEffect(() => {
    fetchPool('limit_up', upPage, setUpData, setLoadingUp)
  }, [upPage, fetchPool])

  useEffect(() => {
    fetchPool('limit_down', downPage, setDownData, setLoadingDown)
  }, [downPage, fetchPool])

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md">
      <CardHeader className="pb-1 px-2.5 pt-2">
        <CardTitle className="text-xs font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-1.5">
          <Flame className="size-3.5 text-blue-500" />
          <span className="h-3 w-[3px] rounded-full bg-blue-400" />
          涨跌停股票池
        </CardTitle>
      </CardHeader>
      <CardContent className="px-2 pb-2 pt-0">
        <Tabs defaultValue="limit_up" className="w-full">
          <TabsList className="w-full bg-gray-100 dark:bg-gray-700 h-7 mb-1.5">
            <TabsTrigger
              value="limit_up"
              className="text-xs data-[state=active]:bg-red-500/15 data-[state=active]:text-red-400 flex-1"
            >
              <ArrowUpCircle className="size-3 mr-1" />
              涨停{upData ? ` (${upData.total})` : ''}
            </TabsTrigger>
            <TabsTrigger
              value="limit_down"
              className="text-xs data-[state=active]:bg-green-500/15 data-[state=active]:text-green-400 flex-1"
            >
              <ArrowDownCircle className="size-3 mr-1" />
              跌停{downData ? ` (${downData.total})` : ''}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="limit_up" className="mt-0">
            <PoolTab
              poolType="limit_up"
              page={upPage}
              data={upData}
              loading={loadingUp}
              onStockClick={onStockClick}
              onPrev={() => setUpPage((p) => Math.max(1, p - 1))}
              onNext={() => setUpPage((p) => p + 1)}
            />
          </TabsContent>

          <TabsContent value="limit_down" className="mt-0">
            <PoolTab
              poolType="limit_down"
              page={downPage}
              data={downData}
              loading={loadingDown}
              onStockClick={onStockClick}
              onPrev={() => setDownPage((p) => Math.max(1, p - 1))}
              onNext={() => setDownPage((p) => p + 1)}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
