'use client'

import { useEffect, useState, useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import {
  TrendingUp, TrendingDown, Activity, Info, ArrowUpRight, ArrowDownRight
} from 'lucide-react'

interface StockDetail {
  symbol: string
  code: string
  name: string
  price: number
  change_percent: number
  change_amount: number
  open: number
  high: number
  low: number
  pre_close: number
  volume: number
  volume_display: string
  amount: number
  amount_display: string
  amplitude: number
  turnover_rate: number
  pe_ttm: number
  pb: number
  volume_ratio: number
  high_52w: number
  low_52w: number
  change_52w: number
  total_market_cap: number
  total_market_cap_display: string
  float_market_cap: number
  float_market_cap_display: string
  rating: number
  is_up: boolean
  market: string
  timestamp: string
}

interface CapitalFlow {
  date: string
  main_net: number       // 主力净额（元）
  super_large_net: number // 主力特大单净额（元）
  large_net: number       // 主力大单净额（元）
  mid_net: number         // 主力中单净额（元）
  small_net: number       // 主力小单净额（元）
  retail_small_net: number
  retail_mid_net: number
  retail_large_net: number
}

interface CapitalFlowResponse {
  symbol: string
  name: string
  total_main_net: number
  days: number
  flows: CapitalFlow[]
}

interface StockDetailPanelProps {
  symbol: string
}

function DetailSkeleton() {
  return (
    <div className="space-y-2 p-3">
      <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="grid grid-cols-2 gap-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-10 bg-gray-100 dark:bg-gray-700 rounded" />
        ))}
      </div>
    </div>
  )
}

function DetailItem({ label, value, sub, colorClass }: {
  label: string
  value: string
  sub?: string
  colorClass?: string
}) {
  return (
    <div className="rounded-md bg-gray-50 dark:bg-gray-750 px-2 py-1">
      <div className="text-[11px] text-gray-400 dark:text-gray-500 mb-0.5">{label}</div>
      <div className={`text-sm font-semibold tabular-nums ${colorClass || 'text-gray-800 dark:text-gray-200'}`}>
        {value}
      </div>
      {sub && <div className="text-[10px] text-gray-400 dark:text-gray-500">{sub}</div>}
    </div>
  )
}

/** Format yuan values to readable Chinese units */
function formatMoney(val: number): string {
  const abs = Math.abs(val)
  const sign = val >= 0 ? '+' : ''
  if (abs >= 1e8) return `${sign}${(val / 1e8).toFixed(2)}亿`
  if (abs >= 1e4) return `${sign}${(val / 1e4).toFixed(2)}万`
  return `${sign}${val.toFixed(2)}`
}

/** Capital flow section with detailed breakdown */
function CapitalFlowSection({ flows, loading }: { flows: CapitalFlow[]; loading: boolean }) {
  if (loading) {
    return (
      <div className="mt-1.5 pt-1.5 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-1.5 mb-1.5">
          <Skeleton className="size-3 rounded-sm bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        <div className="space-y-1.5">
          <Skeleton className="h-8 w-full bg-gray-100 dark:bg-gray-700 rounded" />
          <Skeleton className="h-16 w-full bg-gray-100 dark:bg-gray-700 rounded" />
        </div>
      </div>
    )
  }

  if (flows.length === 0) return null

  const today = flows[flows.length - 1]
  const mainNetWan = today.main_net / 1e4 // → 万元
  const isNetIn = mainNetWan >= 0

  // Sub-categories in 万元
  const categories = [
    { label: '特大单', value: today.super_large_net / 1e4, colorIn: '#dc2626', colorOut: '#16a34a' },
    { label: '大单', value: today.large_net / 1e4, colorIn: '#ef4444', colorOut: '#22c55e' },
    { label: '中单', value: today.mid_net / 1e4, colorIn: '#f87171', colorOut: '#4ade80' },
    { label: '小单', value: today.small_net / 1e4, colorIn: '#fca5a5', colorOut: '#86efac' },
  ]

  const maxAbs = Math.max(...categories.map(c => Math.abs(c.value)), 1)

  return (
    <div className="mt-1.5 pt-1.5 border-t border-gray-100 dark:border-gray-700">
      {/* Section header */}
      <div className="flex items-center gap-1.5 mb-1.5">
        <TrendingUp className="size-3 text-blue-500" />
        <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-300">资金流向</span>
        <span className="text-[10px] text-gray-400 dark:text-gray-500 ml-0.5">今日</span>
      </div>

      {/* Main net flow - prominent display */}
      <div className="flex items-center justify-between px-2 py-1.5 rounded-md bg-gray-50 dark:bg-gray-750 mb-1.5">
        <span className="text-[11px] text-gray-500 dark:text-gray-400">主力净流入</span>
        <div className="flex items-center gap-1">
          {isNetIn ? (
            <ArrowUpRight className="size-3.5 text-red-500" />
          ) : (
            <ArrowDownRight className="size-3.5 text-green-500" />
          )}
          <span className={`text-sm font-bold tabular-nums ${isNetIn ? 'text-red-500' : 'text-green-500'}`}>
            {formatMoney(today.main_net)}
          </span>
        </div>
      </div>

      {/* Sub-category horizontal bars */}
      <div className="space-y-1 px-1">
        {categories.map((cat) => {
          const isPos = cat.value >= 0
          const pct = Math.min(100, (Math.abs(cat.value) / maxAbs) * 100)
          return (
            <div key={cat.label} className="flex items-center gap-1.5">
              <span className="text-[10px] text-gray-400 dark:text-gray-500 w-6 shrink-0 text-right">{cat.label}</span>
              <div className="flex-1 h-3 bg-gray-100 dark:bg-gray-700 rounded-sm overflow-hidden relative">
                {isPos ? (
                  <div
                    className="absolute right-0 top-0 h-full rounded-sm"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: cat.colorIn,
                      opacity: 0.75,
                    }}
                  />
                ) : (
                  <div
                    className="absolute left-0 top-0 h-full rounded-sm"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: cat.colorOut,
                      opacity: 0.75,
                    }}
                  />
                )}
              </div>
              <span className={`text-[10px] tabular-nums font-medium w-16 text-right shrink-0 ${isPos ? 'text-red-500' : 'text-green-500'}`}>
                {formatMoney(cat.value * 1e4)}
              </span>
            </div>
          )
        })}
      </div>

      {/* Multi-day summary if available */}
      {flows.length > 1 && (
        <div className="mt-1.5 pt-1 border-t border-gray-100 dark:border-gray-700/50">
          <div className="flex items-end gap-0.5 h-6">
            {flows.slice(-10).map((flow, i) => {
              const val = flow.main_net / 1e4
              const isP = val >= 0
              const absMax = Math.max(...flows.slice(-10).map(f => Math.abs(f.main_net / 1e4)), 1)
              const h = Math.min(100, (Math.abs(val) / absMax) * 100)
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full h-5 flex items-end">
                    <div
                      className={`w-full rounded-sm ${isP ? 'bg-red-400/60' : 'bg-green-400/60'}`}
                      style={{ height: `${Math.max(4, h)}%` }}
                    />
                  </div>
                  <span className="text-[8px] text-gray-400 dark:text-gray-600">{flow.date.slice(5)}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Data source note */}
      <div className="text-[9px] text-gray-300 dark:text-gray-600 mt-1.5 text-right">
        东方财富 · 单位：元
      </div>
    </div>
  )
}

export default function StockDetailPanel({ symbol }: StockDetailPanelProps) {
  const [detail, setDetail] = useState<StockDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [capitalFlows, setCapitalFlows] = useState<CapitalFlow[]>([])
  const [capitalLoading, setCapitalLoading] = useState(true)

  const fetchDetail = useCallback(async () => {
    if (!symbol) return
    setLoading(true)
    try {
      const res = await fetch(`/api/finance/stock-detail?symbol=${symbol}`)
      const json = await res.json()
      if (json.code === 200 && json.data) {
        setDetail(json.data)
      }
    } catch {
      // silent
    } finally {
      setLoading(false)
    }
  }, [symbol])

  const fetchCapitalFlow = useCallback(async () => {
    if (!symbol) return
    setCapitalLoading(true)
    try {
      const res = await fetch(`/api/finance/capital-flow?symbol=${symbol}&days=10`)
      const json = await res.json()
      if (json.code === 200 && json.data) {
        const data = json.data as CapitalFlowResponse
        setCapitalFlows(data.flows || [])
      }
    } catch {
      // silent
    } finally {
      setCapitalLoading(false)
    }
  }, [symbol])

  useEffect(() => {
    fetchDetail()
  }, [fetchDetail])

  useEffect(() => {
    fetchCapitalFlow()
  }, [fetchCapitalFlow])

  if (loading) return <DetailSkeleton />
  if (!detail) return null

  const isUp = detail.change_percent >= 0

  // 52-week range progress
  const range52 = detail.high_52w - detail.low_52w
  const rangePos = range52 > 0 ? ((detail.price - detail.low_52w) / range52) * 100 : 50

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md">
      <CardContent className="p-2 space-y-1.5">
        {/* Header */}
        <div className="flex items-center gap-1.5">
          <Info className="size-3 text-blue-500" />
          <span className="h-3 w-[3px] rounded-full bg-blue-400" />
          <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-300">个股详情</span>
          <span className="text-[11px] text-gray-400 dark:text-gray-500 ml-auto">
            <Activity className="size-2.5 inline -mt-0.5 mr-0.5" />
            东方财富数据
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
          <DetailItem
            label="总市值"
            value={detail.total_market_cap_display}
          />
          <DetailItem
            label="流通市值"
            value={detail.float_market_cap_display}
          />
          <DetailItem
            label="市盈率(TTM)"
            value={detail.pe_ttm > 0 ? detail.pe_ttm.toFixed(2) : '-'}
          />
          <DetailItem
            label="市净率"
            value={detail.pb > 0 ? detail.pb.toFixed(2) : '-'}
          />
          <DetailItem
            label="振幅"
            value={`${detail.amplitude.toFixed(2)}%`}
          />
          <DetailItem
            label="换手率"
            value={`${detail.turnover_rate.toFixed(2)}%`}
          />
          <DetailItem
            label="量比"
            value={detail.volume_ratio.toFixed(2)}
            colorClass={detail.volume_ratio > 1 ? 'text-red-500' : detail.volume_ratio < 1 ? 'text-green-500' : ''}
          />
          <DetailItem
            label="成交额"
            value={detail.amount_display}
          />
        </div>

        {/* 52-week range bar */}
        <div>
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="text-gray-400 dark:text-gray-500">52周范围</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400">{detail.low_52w.toFixed(2)}</span>
              <TrendingUp className={`size-3 ${isUp ? 'text-red-500' : 'text-green-500'}`} />
              <span className="text-gray-500 dark:text-gray-400">{detail.high_52w.toFixed(2)}</span>
            </div>
          </div>
          <div className="relative h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-green-300 via-gray-300 to-red-300"
              style={{ width: '100%' }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2.5 rounded-full border-2 border-white dark:border-gray-800 shadow-sm"
              style={{
                left: `calc(${Math.max(0, Math.min(100, rangePos))}% - 4px)`,
                backgroundColor: isUp ? '#dc2626' : '#16a34a',
              }}
            />
          </div>
          <div className="text-[10px] text-gray-400 dark:text-gray-500 text-right mt-0.5">
            距高点 {(100 - Math.abs(detail.change_52w)).toFixed(1)}%
          </div>
        </div>

        {/* Capital Flow Section */}
        <CapitalFlowSection flows={capitalFlows} loading={capitalLoading} />
      </CardContent>
    </Card>
  )
}
