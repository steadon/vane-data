'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Customized,
  ReferenceLine,
  Cell,
} from 'recharts'
import { Skeleton } from '@/components/ui/skeleton'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Card, CardContent } from '@/components/ui/card'
import { useTheme } from 'next-themes'

interface KLineBar {
  date: string
  open: number
  close: number
  high: number
  low: number
  volume: number
  amount: number
  isUp?: boolean
}

interface ChartBar extends KLineBar {
  ma5?: number
  ma10?: number
  ma20?: number
  ma60?: number
  dif?: number
  dea?: number
  macdHist?: number
  bollUpper?: number
  bollMiddle?: number
  bollLower?: number
  rsi6?: number
  rsi12?: number
  rsi24?: number
  k?: number
  d?: number
  j?: number
}

interface KLineData {
  symbol: string
  name: string
  period: string
  adjust: string
  count: number
  bars: KLineBar[]
}

interface KLineChartProps {
  symbol: string
  period: string
  setPeriod: (p: string) => void
  adjust: string
  setAdjust: (a: string) => void
  dayRange: number
  setDayRange: (r: number) => void
  isFullscreen?: boolean
}

function formatVolume(vol: number): string {
  if (vol >= 1e8) return (vol / 1e8).toFixed(2) + '亿'
  if (vol >= 1e4) return (vol / 1e4).toFixed(2) + '万'
  return vol.toLocaleString()
}

function formatAmount(amt: number): string {
  if (amt >= 1e8) return (amt / 1e8).toFixed(2) + '亿'
  if (amt >= 1e4) return (amt / 1e4).toFixed(2) + '万'
  return amt.toLocaleString()
}

// Volume bar shape
function VolumeBar(props: Record<string, unknown>) {
  const { x, y, width, height, payload } = props as {
    x: number
    y: number
    width: number
    height: number
    payload: KLineBar
    isDark?: boolean
  }

  if (!height || height <= 0 || !width || width <= 0) return null
  const isUp = payload.close >= payload.open

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={isUp ? 'rgba(239,68,68,0.5)' : 'rgba(34,197,94,0.5)'}
    />
  )
}

// MACD histogram bar shape
function MACDBar(props: Record<string, unknown>) {
  const { x, y, width, height, payload } = props as {
    x: number
    y: number
    width: number
    height: number
    payload: ChartBar
  }

  if (!height || !width) return null
  const val = payload.macdHist ?? 0
  const color = val >= 0 ? 'rgba(239,68,68,0.7)' : 'rgba(34,197,94,0.7)'

  // SVG rect cannot have negative height — when MACD is negative,
  // recharts gives y=zeroLine and height=negative. Fix by adjusting y and abs-ing height.
  const rectY = height < 0 ? y + height : y
  const rectH = Math.abs(height)

  return (
    <rect
      x={x}
      y={rectY}
      width={width}
      height={rectH}
      fill={color}
    />
  )
}

// Candlestick + MA line renderer using Customized component
function CandlestickRenderer(props: Record<string, unknown> & { bars: ChartBar[]; showMA?: boolean; showBOLL?: boolean; isDark?: boolean }) {
  const { xAxisMap, yAxisMap, bars, showMA: shouldShowMA, showBOLL: shouldShowBOLL, isDark } = props

  if (!xAxisMap || !yAxisMap || !bars || bars.length === 0) return null

  const xAxes = Object.values(xAxisMap) as Array<{ scale: (v: unknown) => number; bandwidth?: () => number; bandSize?: number }>
  const yAxes = Object.values(yAxisMap) as Array<{ scale: (v: unknown) => number }>
  const xAxis = xAxes[0]
  const yAxis = yAxes[0]
  if (!xAxis || !yAxis) return null

  // Try to get band width - may vary by recharts version
  const bandWidth = xAxis.bandSize || (xAxis.bandwidth ? xAxis.bandwidth() : 8)

  // Build MA line paths using SVG path data
  const maColors: Record<string, string> = {
    ma5: '#f59e0b',
    ma10: '#3b82f6',
    ma20: '#a855f7',
    ma60: '#22c55e',
  }

  const maPaths: { key: string; d: string; color: string }[] = []
  if (shouldShowMA) {
    for (const maKey of ['ma5', 'ma10', 'ma20', 'ma60']) {
      const points: string[] = []
      bars.forEach((d) => {
        const val = (d as any)[maKey] as number | undefined
        if (val == null || isNaN(val)) return
        const x = xAxis.scale(d.date) + bandWidth / 2
        const y = yAxis.scale(val)
        if (x != null && y != null) {
          points.push(`${x},${y}`)
        }
      })
      if (points.length >= 2) {
        maPaths.push({
          key: maKey,
          d: `M${points.join('L')}`,
          color: maColors[maKey],
        })
      }
    }
  }

  // Build Bollinger Bands paths
  const bollPaths: { key: string; d: string; color: string; dash: string }[] = []
  if (shouldShowBOLL) {
    for (const bKey of ['bollUpper', 'bollMiddle', 'bollLower'] as const) {
      const points: string[] = []
      bars.forEach((d) => {
        const val = d[bKey] as number | undefined
        if (val == null || isNaN(val)) return
        const x = xAxis.scale(d.date) + bandWidth / 2
        const y = yAxis.scale(val)
        if (x != null && y != null) {
          points.push(`${x},${y}`)
        }
      })
      if (points.length >= 2) {
        bollPaths.push({
          key: bKey,
          d: `M${points.join('L')}`,
          color: bKey === 'bollMiddle' ? (isDark ? '#6b7280' : '#94a3b8') : 'rgba(148,163,184,0.5)',
          dash: bKey === 'bollMiddle' ? '4 2' : 'none',
        })
      }
    }
  }

  return (
    <g className="recharts-candlestick-layer">
      {/* MA lines */}
      {maPaths.map(({ key, d, color }) => (
        <path
          key={key}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={1}
          className={`ma-line-${key}`}
        />
      ))}
      {/* Bollinger Bands */}
      {bollPaths.map(({ key, d, color, dash }) => (
        <path
          key={key}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={0.8}
          strokeDasharray={dash}
          className={`boll-line-${key}`}
        />
      ))}
      {/* Candlesticks */}
      {bars.map((d, i) => {
        const isUp = d.close >= d.open
        const color = isUp ? '#ef4444' : '#22c55e'

        // X position: center of the band
        const cx = xAxis.scale(d.date) + bandWidth / 2

        // Y positions from the price axis scale
        const openY = yAxis.scale(d.open)
        const closeY = yAxis.scale(d.close)
        const highY = yAxis.scale(d.high)
        const lowY = yAxis.scale(d.low)

        if (openY == null || closeY == null || highY == null || lowY == null) return null

        // Body
        const bodyTop = Math.min(openY, closeY)
        const bodyHeight = Math.max(Math.abs(closeY - openY), 1)
        const bodyWidth = Math.max(bandWidth * 0.7, 2)

        return (
          <g key={d.date || i}>
            {/* Wick (high-low) */}
            <line
              x1={cx}
              y1={highY}
              x2={cx}
              y2={lowY}
              stroke={color}
              strokeWidth={1}
            />
            {/* Body (open-close) */}
            <rect
              x={cx - bodyWidth / 2}
              y={bodyTop}
              width={bodyWidth}
              height={bodyHeight}
              fill={color}
              stroke={color}
              strokeWidth={0.5}
            />
          </g>
        )
      })}
    </g>
  )
}

export function getDateRange(days: number): { start: string; end: string } {
  const end = new Date()
  const start = new Date()
  start.setDate(start.getDate() - days)
  const fmt = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  return { start: fmt(start), end: fmt(end) }
}

export default function KLineChart({
  symbol,
  period,
  setPeriod,
  adjust,
  setAdjust,
  dayRange,
  setDayRange,
  isFullscreen = false,
}: KLineChartProps) {
  const [data, setData] = useState<KLineData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showMA, setShowMA] = useState(true)
  const [showMACD, setShowMACD] = useState(true)
  const [showBOLL, setShowBOLL] = useState(false)
  const [showRSI, setShowRSI] = useState(false)
  const [showKDJ, setShowKDJ] = useState(false)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      switch (e.key) {
        case '1': setPeriod('day'); break
        case '2': setPeriod('week'); break
        case '3': setPeriod('month'); break
        case 'm': case 'M': setShowMA(p => !p); break
        case 'n': case 'N': setShowMACD(p => !p); break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setPeriod])

  const dateRange = useMemo(() => getDateRange(dayRange), [dayRange])

  const fetchData = useCallback(async () => {
    if (!symbol) return
    setLoading(true)
    setError(null)
    try {
      const params = new URLSearchParams({
        symbol,
        period,
        adjust,
        count: '500',
        start_date: dateRange.start,
        end_date: dateRange.end,
      })
      const res = await fetch(`/api/finance/kline?${params}`)
      const json = await res.json()
      if (json.code === 200 && json.data) {
        setData(json.data)
      } else {
        setError(json.msg || '获取K线数据失败')
      }
    } catch {
      setError('网络请求失败，请重试')
    } finally {
      setLoading(false)
    }
  }, [symbol, period, adjust, dateRange])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  // Process bars with MA and MACD indicators
  const chartData = useMemo(() => {
    if (!data?.bars) return []
    const bars: ChartBar[] = data.bars.map((bar) => ({
      ...bar,
      isUp: bar.close >= bar.open,
    }))

    const closes = bars.map((b) => b.close)
    const n = bars.length
    if (n === 0) return bars

    // Compute Moving Averages using running sum (O(n) each)
    // MA5
    if (n >= 5) {
      let sum = 0
      for (let j = 0; j < 5; j++) sum += closes[j]
      bars[4].ma5 = sum / 5
      for (let i = 5; i < n; i++) {
        sum += closes[i] - closes[i - 5]
        bars[i].ma5 = sum / 5
      }
    }

    // MA10
    if (n >= 10) {
      let sum = 0
      for (let j = 0; j < 10; j++) sum += closes[j]
      bars[9].ma10 = sum / 10
      for (let i = 10; i < n; i++) {
        sum += closes[i] - closes[i - 10]
        bars[i].ma10 = sum / 10
      }
    }

    // MA20
    if (n >= 20) {
      let sum = 0
      for (let j = 0; j < 20; j++) sum += closes[j]
      bars[19].ma20 = sum / 20
      for (let i = 20; i < n; i++) {
        sum += closes[i] - closes[i - 20]
        bars[i].ma20 = sum / 20
      }
    }

    // MA60
    if (n >= 60) {
      let sum = 0
      for (let j = 0; j < 60; j++) sum += closes[j]
      bars[59].ma60 = sum / 60
      for (let i = 60; i < n; i++) {
        sum += closes[i] - closes[i - 60]
        bars[i].ma60 = sum / 60
      }
    }

    // Compute MACD: DIF = EMA12 - EMA26, DEA = EMA9(DIF), Histogram = 2*(DIF-DEA)
    let ema12 = closes[0]
    let ema26 = closes[0]
    let dea = 0

    for (let i = 0; i < n; i++) {
      const c = closes[i]
      if (i === 0) {
        ema12 = c
        ema26 = c
      } else {
        ema12 = c * (2 / 13) + ema12 * (11 / 13)
        ema26 = c * (2 / 27) + ema26 * (25 / 27)
      }
      const dif = ema12 - ema26
      if (i === 0) {
        dea = dif
      } else {
        dea = dif * (2 / 10) + dea * (8 / 10)
      }
      bars[i].dif = dif
      bars[i].dea = dea
      bars[i].macdHist = 2 * (dif - dea)
    }

    // Compute Bollinger Bands (20-period SMA ± 2 standard deviations)
    if (n >= 20) {
      for (let i = 19; i < n; i++) {
        let sum = 0
        for (let j = i - 19; j <= i; j++) sum += closes[j]
        const sma = sum / 20
        let sqSum = 0
        for (let j = i - 19; j <= i; j++) sqSum += Math.pow(closes[j] - sma, 2)
        const stdDev = Math.sqrt(sqSum / 20)
        bars[i].bollMiddle = sma
        bars[i].bollUpper = sma + 2 * stdDev
        bars[i].bollLower = sma - 2 * stdDev
      }
    }

    // Compute RSI (Relative Strength Index) - 6, 12, 24 period
    function computeRSI(period: number): void {
      if (n < period + 1) return
      let avgGain = 0
      let avgLoss = 0
      // Initial average gain/loss
      for (let j = 1; j <= period; j++) {
        const change = closes[j] - closes[j - 1]
        if (change >= 0) avgGain += change
        else avgLoss += Math.abs(change)
      }
      avgGain /= period
      avgLoss /= period
      bars[period].rsi6 = 0
      bars[period].rsi12 = 0
      bars[period].rsi24 = 0

      // Use smoothed RSI (Wilder's method)
      for (let i = period; i < n; i++) {
        const change = closes[i] - closes[i - 1]
        const gain = change >= 0 ? change : 0
        const loss = change < 0 ? Math.abs(change) : 0
        avgGain = (avgGain * (period - 1) + gain) / period
        avgLoss = (avgLoss * (period - 1) + loss) / period
        const rs = avgLoss === 0 ? 100 : avgGain / avgLoss
        const rsi = 100 - 100 / (1 + rs)
        if (period === 6) bars[i].rsi6 = rsi
        else if (period === 12) bars[i].rsi12 = rsi
        else if (period === 24) bars[i].rsi24 = rsi
      }
    }
    computeRSI(6)
    computeRSI(12)
    computeRSI(24)

    // Compute KDJ (Stochastic Oscillator) - period N = 9
    const kdjN = 9
    if (n >= kdjN) {
      let prevK = 50
      let prevD = 50
      for (let i = 0; i < n; i++) {
        const startIdx = Math.max(0, i - kdjN + 1)
        let highN = -Infinity
        let lowN = Infinity
        for (let j = startIdx; j <= i; j++) {
          if (bars[j].high > highN) highN = bars[j].high
          if (bars[j].low < lowN) lowN = bars[j].low
        }
        const rsv = highN === lowN ? 50 : ((bars[i].close - lowN) / (highN - lowN)) * 100
        const k = (2 / 3) * prevK + (1 / 3) * rsv
        const d = (2 / 3) * prevD + (1 / 3) * k
        const j = 3 * k - 2 * d
        bars[i].k = k
        bars[i].d = d
        bars[i].j = j
        prevK = k
        prevD = d
      }
    }

    return bars
  }, [data])

  // Price range for YAxis
  const priceRange = useMemo(() => {
    if (chartData.length === 0) return { min: 0, max: 100 }
    const highs = chartData.map((d) => d.high)
    const lows = chartData.map((d) => d.low)
    const min = Math.min(...lows)
    const max = Math.max(...highs)
    const padding = (max - min) * 0.1 || 1
    return {
      min: Math.floor((min - padding) * 100) / 100,
      max: Math.ceil((max + padding) * 100) / 100,
    }
  }, [chartData])

  const volRange = useMemo(() => {
    if (chartData.length === 0) return { max: 1 }
    return { max: Math.max(...chartData.map((d) => d.volume)) * 1.2 || 1 }
  }, [chartData])

  // MACD YAxis range
  const macdRange = useMemo(() => {
    if (chartData.length === 0) return { min: -1, max: 1 }
    let min = 0
    let max = 0
    for (const d of chartData) {
      if (d.dif != null) {
        min = Math.min(min, d.dif)
        max = Math.max(max, d.dif)
      }
      if (d.dea != null) {
        min = Math.min(min, d.dea)
        max = Math.max(max, d.dea)
      }
      if (d.macdHist != null) {
        min = Math.min(min, d.macdHist)
        max = Math.max(max, d.macdHist)
      }
    }
    const padding = (max - min) * 0.15 || 0.01
    return { min: min - padding, max: max + padding }
  }, [chartData])

  // Determine visible ticks based on data length
  const tickInterval = useMemo(() => {
    const len = chartData.length
    if (len <= 30) return 4
    if (len <= 90) return 10
    if (len <= 180) return 20
    return 30
  }, [chartData.length])

  const xTicks = useMemo(() => {
    return chartData
      .filter((_, i) => i % tickInterval === 0 || i === chartData.length - 1)
      .map((d) => d.date)
  }, [chartData, tickInterval])

  // Dynamic right margin for MA YAxis alignment
  const rightMargin = showMA ? 55 : 10

  const lastBar = chartData.length > 0 ? chartData[chartData.length - 1] : null
  const prevClose = lastBar
    ? chartData.length > 1
      ? chartData[chartData.length - 2].close
      : lastBar.open
    : 0

  // Indicator toggle values for multi-select ToggleGroup
  const indicatorValues = useMemo(() => {
    const v: string[] = []
    if (showMA) v.push('ma')
    if (showMACD) v.push('macd')
    if (showBOLL) v.push('boll')
    if (showRSI) v.push('rsi')
    if (showKDJ) v.push('kdj')
    return v
  }, [showMA, showMACD, showBOLL, showRSI, showKDJ])

  // Dynamic chart heights based on fullscreen
  const mainChartH = isFullscreen ? 500 : 300
  const volChartH = isFullscreen ? 80 : 60
  const subChartH = isFullscreen ? 100 : 70

  // Dark-aware chart colors
  const gridColor = isDark ? '#374151' : '#e5e7eb'
  const tickColor = isDark ? '#6b7280' : '#9ca3af'
  const axisLineColor = isDark ? '#374151' : '#e5e7eb'
  const tooltipBg = isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
  const tooltipTextColor = isDark ? 'text-gray-400' : 'text-gray-500'
  const tooltipValueColor = isDark ? 'text-gray-200' : 'text-gray-700'

  if (error) {
    return (
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md">
        <CardContent className="p-4">
          <div className={`flex items-center justify-center ${isFullscreen ? 'h-[500px]' : 'h-[400px]'} text-gray-500 dark:text-gray-400`}>
            <div className="text-center">
              <p className="text-sm">加载失败</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{error}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md">
      <CardContent className="p-2 space-y-1">
        {/* Controls Row 1: Period, Adjust, Range */}
        <div className="flex flex-wrap items-center gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-400 dark:text-gray-500">周期:</span>
            <ToggleGroup
              type="single"
              value={period}
              onValueChange={(v) => v && setPeriod(v)}
              className="bg-gray-100 dark:bg-gray-700"
            >
              <ToggleGroupItem
                value="day"
                className="data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5"
              >
                日K
              </ToggleGroupItem>
              <ToggleGroupItem
                value="week"
                className="data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5"
              >
                周K
              </ToggleGroupItem>
              <ToggleGroupItem
                value="month"
                className="data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5"
              >
                月K
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-400 dark:text-gray-500">复权:</span>
            <ToggleGroup
              type="single"
              value={adjust}
              onValueChange={(v) => v && setAdjust(v)}
              className="bg-gray-100 dark:bg-gray-700"
            >
              <ToggleGroupItem
                value="qfq"
                className="data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5"
              >
                前复权
              </ToggleGroupItem>
              <ToggleGroupItem
                value="hfq"
                className="data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5"
              >
                后复权
              </ToggleGroupItem>
              <ToggleGroupItem
                value="none"
                className="data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5"
              >
                不复权
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-400 dark:text-gray-500">范围:</span>
            <ToggleGroup
              type="single"
              value={String(dayRange)}
              onValueChange={(v) => v && setDayRange(Number(v))}
              className="bg-gray-100 dark:bg-gray-700"
            >
              <ToggleGroupItem
                value="30"
                className="data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5"
              >
                30天
              </ToggleGroupItem>
              <ToggleGroupItem
                value="90"
                className="data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5"
              >
                90天
              </ToggleGroupItem>
              <ToggleGroupItem
                value="180"
                className="data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5"
              >
                半年
              </ToggleGroupItem>
              <ToggleGroupItem
                value="365"
                className="data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5"
              >
                1年
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          {data && (
            <div className="ml-auto text-xs text-gray-400 dark:text-gray-500">
              {data.name} · {data.count}条
            </div>
          )}
        </div>

        {/* Controls Row 2: Indicator toggles */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-400 dark:text-gray-500">指标:</span>
            <ToggleGroup
              type="multiple"
              value={indicatorValues}
              onValueChange={(v) => {
                setShowMA(v.includes('ma'))
                setShowMACD(v.includes('macd'))
                setShowBOLL(v.includes('boll'))
                setShowRSI(v.includes('rsi'))
                setShowKDJ(v.includes('kdj'))
              }}
              className="bg-gray-100 dark:bg-gray-700"
            >
              <ToggleGroupItem
                value="ma"
                className="data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5"
              >
                MA
              </ToggleGroupItem>
              <ToggleGroupItem
                value="macd"
                className="data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5"
              >
                MACD
              </ToggleGroupItem>
              <ToggleGroupItem
                value="boll"
                className="data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5"
              >
                BOLL
              </ToggleGroupItem>
              <ToggleGroupItem
                value="rsi"
                className="data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5"
              >
                RSI
              </ToggleGroupItem>
              <ToggleGroupItem
                value="kdj"
                className="data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5"
              >
                KDJ
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <span className="text-[10px] text-gray-300 dark:text-gray-600 hidden lg:inline ml-2">快捷键: 1/2/3切换周期 M/MA N/MACD</span>
        </div>

        {/* MA + BOLL + RSI + KDJ Legend Bar */}
        {(showMA || showBOLL || showRSI || showKDJ) && lastBar && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px]">
            {showMA && lastBar.ma5 != null && (
              <span className="text-amber-400 font-medium">MA5: {lastBar.ma5.toFixed(2)}</span>
            )}
            {showMA && lastBar.ma10 != null && (
              <span className="text-blue-400 font-medium">MA10: {lastBar.ma10.toFixed(2)}</span>
            )}
            {showMA && lastBar.ma20 != null && (
              <span className="text-purple-400 font-medium">MA20: {lastBar.ma20.toFixed(2)}</span>
            )}
            {showMA && lastBar.ma60 != null && (
              <span className="text-green-400 font-medium">MA60: {lastBar.ma60.toFixed(2)}</span>
            )}
            {showBOLL && lastBar.bollUpper != null && (
              <span className="text-gray-400 dark:text-gray-500 font-medium">BOLL上: {lastBar.bollUpper.toFixed(2)}</span>
            )}
            {showBOLL && lastBar.bollLower != null && (
              <span className="text-gray-400 dark:text-gray-500 font-medium">BOLL下: {lastBar.bollLower.toFixed(2)}</span>
            )}
            {showRSI && lastBar.rsi6 != null && (
              <span className="text-cyan-500 font-medium">RSI6: {lastBar.rsi6.toFixed(1)}</span>
            )}
            {showRSI && lastBar.rsi12 != null && (
              <span className="text-orange-400 font-medium">RSI12: {lastBar.rsi12.toFixed(1)}</span>
            )}
            {showRSI && lastBar.rsi24 != null && (
              <span className="text-emerald-400 font-medium">RSI24: {lastBar.rsi24.toFixed(1)}</span>
            )}
            {showKDJ && lastBar.k != null && (
              <span className="text-blue-500 font-medium">K: {lastBar.k.toFixed(1)}</span>
            )}
            {showKDJ && lastBar.d != null && (
              <span className="text-orange-500 font-medium">D: {lastBar.d.toFixed(1)}</span>
            )}
            {showKDJ && lastBar.j != null && (
              <span className="text-purple-500 font-medium">J: {lastBar.j.toFixed(1)}</span>
            )}
          </div>
        )}

        {/* Charts */}
        {loading ? (
          <div className="space-y-1">
            <Skeleton className={`w-full bg-gray-200 dark:bg-gray-700`} style={{ height: mainChartH }} />
            <Skeleton className={`w-full bg-gray-200 dark:bg-gray-700`} style={{ height: volChartH }} />
            {(showMACD || showRSI || showKDJ) && <Skeleton className={`w-full bg-gray-200 dark:bg-gray-700`} style={{ height: subChartH }} />}
          </div>
        ) : chartData.length > 0 ? (
          <div className="space-y-0.5">
            {/* Price chart + MA lines */}
            <ResponsiveContainer width="100%" height={mainChartH}>
              <ComposedChart
                data={chartData}
                margin={{ top: 10, right: rightMargin, left: 0, bottom: 0 }}
                // @ts-ignore recharts cursor type mismatch
                cursor={{ strokeDasharray: '3 3', stroke: isDark ? '#6b7280' : '#94a3b8', strokeWidth: 0.5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} strokeOpacity={isDark ? 0.3 : 0.5} />
                <XAxis
                  dataKey="date"
                  type="category"
                  ticks={xTicks}
                  tick={{ fill: tickColor, fontSize: 10 }}
                  axisLine={{ stroke: axisLineColor }}
                  tickLine={{ stroke: axisLineColor }}
                />
                <YAxis
                  yAxisId="price"
                  domain={[priceRange.min, priceRange.max]}
                  tick={{ fill: tickColor, fontSize: 10 }}
                  axisLine={{ stroke: axisLineColor }}
                  tickLine={{ stroke: axisLineColor }}
                  tickFormatter={(v: number) => v.toFixed(2)}
                  width={50}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (!active || !payload || payload.length === 0) return null
                    const d = payload[0].payload as ChartBar
                    const isUp = d.close >= d.open
                    const color = isUp ? 'text-red-500' : 'text-green-500'

                    return (
                      <div className={`${tooltipBg} border rounded-lg p-3 shadow-lg text-xs min-w-[180px]`}>
                        <div className={`${tooltipTextColor} mb-2 font-medium`}>{d.date}</div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                          <div className="flex justify-between">
                            <span className={tooltipTextColor}>开盘</span>
                            <span className={color}>{d.open.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className={tooltipTextColor}>收盘</span>
                            <span className={`font-semibold ${color}`}>{d.close.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className={tooltipTextColor}>最高</span>
                            <span className="text-red-500">{d.high.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className={tooltipTextColor}>最低</span>
                            <span className="text-green-500">{d.low.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className={tooltipTextColor}>成交量</span>
                            <span className={tooltipValueColor}>{formatVolume(d.volume)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className={tooltipTextColor}>成交额</span>
                            <span className={tooltipValueColor}>{formatAmount(d.amount)}</span>
                          </div>
                        </div>
                        {showMA && (d.ma5 != null || d.ma10 != null) && (
                          <div className={`border-t border-gray-100 dark:border-gray-700 mt-1.5 pt-1 grid grid-cols-2 gap-x-3 gap-y-0.5`}>
                            {d.ma5 != null && (
                              <div className="flex justify-between">
                                <span className="text-amber-500">MA5</span>
                                <span className="text-amber-500">{d.ma5.toFixed(2)}</span>
                              </div>
                            )}
                            {d.ma10 != null && (
                              <div className="flex justify-between">
                                <span className="text-blue-500">MA10</span>
                                <span className="text-blue-500">{d.ma10.toFixed(2)}</span>
                              </div>
                            )}
                            {d.ma20 != null && (
                              <div className="flex justify-between">
                                <span className="text-purple-500">MA20</span>
                                <span className="text-purple-500">{d.ma20.toFixed(2)}</span>
                              </div>
                            )}
                            {d.ma60 != null && (
                              <div className="flex justify-between">
                                <span className="text-green-500">MA60</span>
                                <span className="text-green-500">{d.ma60.toFixed(2)}</span>
                              </div>
                            )}
                          </div>
                        )}
                        {showBOLL && d.bollUpper != null && (
                          <div className={`border-t border-gray-100 dark:border-gray-700 mt-1.5 pt-1 grid grid-cols-2 gap-x-3 gap-y-0.5`}>
                            <div className="flex justify-between">
                              <span className={tooltipTextColor}>BOLL上</span>
                              <span className={tooltipValueColor}>{d.bollUpper.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className={tooltipTextColor}>BOLL中</span>
                              <span className={tooltipValueColor}>{d.bollMiddle!.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className={tooltipTextColor}>BOLL下</span>
                              <span className={tooltipValueColor}>{d.bollLower!.toFixed(2)}</span>
                            </div>
                          </div>
                        )}
                        {showMACD && (d.dif != null || d.dea != null) && (
                          <div className={`border-t border-gray-100 dark:border-gray-700 mt-1.5 pt-1 grid grid-cols-3 gap-x-3 gap-y-0.5`}>
                            <div className="flex justify-between">
                              <span className="text-amber-500">DIF</span>
                              <span className="text-amber-500">{(d.dif ?? 0).toFixed(3)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-blue-500">DEA</span>
                              <span className="text-blue-500">{(d.dea ?? 0).toFixed(3)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className={d.macdHist != null && d.macdHist >= 0 ? 'text-red-500' : 'text-green-500'}>MACD</span>
                              <span className={d.macdHist != null && d.macdHist >= 0 ? 'text-red-500' : 'text-green-500'}>{(d.macdHist ?? 0).toFixed(3)}</span>
                            </div>
                          </div>
                        )}
                        {showRSI && d.rsi6 != null && (
                          <div className={`border-t border-gray-100 dark:border-gray-700 mt-1.5 pt-1 grid grid-cols-3 gap-x-3 gap-y-0.5`}>
                            <div className="flex justify-between">
                              <span className="text-cyan-500">RSI6</span>
                              <span className="text-cyan-500">{d.rsi6.toFixed(1)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-orange-500">RSI12</span>
                              <span className="text-orange-500">{(d.rsi12 ?? 0).toFixed(1)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-emerald-500">RSI24</span>
                              <span className="text-emerald-500">{(d.rsi24 ?? 0).toFixed(1)}</span>
                            </div>
                          </div>
                        )}
                        {showKDJ && d.k != null && (
                          <div className={`border-t border-gray-100 dark:border-gray-700 mt-1.5 pt-1 grid grid-cols-3 gap-x-3 gap-y-0.5`}>
                            <div className="flex justify-between">
                              <span className="text-blue-500">K</span>
                              <span className="text-blue-500">{d.k.toFixed(1)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-orange-500">D</span>
                              <span className="text-orange-500">{(d.d ?? 0).toFixed(1)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-purple-500">J</span>
                              <span className="text-purple-500">{(d.j ?? 0).toFixed(1)}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  }}
                />
                {prevClose > 0 && (
                  <ReferenceLine
                    yAxisId="price"
                    y={prevClose}
                    stroke="#3b82f6"
                    strokeDasharray="4 4"
                    strokeOpacity={0.5}
                  />
                )}
                {/* Custom candlestick + MA line rendering */}
                <Customized
                  component={(cp: Record<string, unknown>) => <CandlestickRenderer {...cp} bars={chartData} showMA={showMA} showBOLL={showBOLL} isDark={isDark} />}
                />
                {/* MA legend YAxis on right side (visual reference only) */}
                {showMA && (
                  <YAxis
                    yAxisId="ma"
                    domain={[priceRange.min, priceRange.max]}
                    orientation="right"
                    tick={{ fill: tickColor, fontSize: 10 }}
                    axisLine={{ stroke: axisLineColor }}
                    tickLine={{ stroke: axisLineColor }}
                    tickFormatter={(v: number) => v.toFixed(2)}
                    width={45}
                  />
                )}
                {/* Invisible bar to establish graphical items for Customized */}
                <Bar
                  yAxisId="price"
                  dataKey="close"
                  fill="transparent"
                  stroke="none"
                  isAnimationActive={false}
                />
              </ComposedChart>
            </ResponsiveContainer>

            {/* Volume chart */}
            <ResponsiveContainer width="100%" height={volChartH}>
              <ComposedChart
                data={chartData}
                margin={{ top: 0, right: rightMargin, left: 0, bottom: 0 }}
              >
                <XAxis
                  dataKey="date"
                  type="category"
                  ticks={xTicks}
                  tick={{ fill: tickColor, fontSize: 10 }}
                  axisLine={{ stroke: axisLineColor }}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, volRange.max]}
                  tick={false}
                  axisLine={false}
                  tickLine={false}
                  width={50}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (!active || !payload || payload.length === 0) return null
                    const d = payload[0].payload as ChartBar
                    return (
                      <div className={`${tooltipBg} border rounded-lg p-2 shadow-lg text-xs`}>
                        <div className={tooltipTextColor}>{d.date}</div>
                        <div className={tooltipValueColor}>成交量: {formatVolume(d.volume)}</div>
                      </div>
                    )
                  }}
                />
                <Bar
                  dataKey="volume"
                  shape={<VolumeBar />}
                  isAnimationActive={false}
                />
              </ComposedChart>
            </ResponsiveContainer>

            {/* MACD sub-chart */}
            {showMACD && (
              <ResponsiveContainer width="100%" height={subChartH}>
                <ComposedChart
                  data={chartData}
                  margin={{ top: 0, right: rightMargin, left: 0, bottom: 0 }}
                >
                  <XAxis
                    dataKey="date"
                    type="category"
                    ticks={xTicks}
                    tick={{ fill: tickColor, fontSize: 10 }}
                    axisLine={{ stroke: axisLineColor }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[macdRange.min, macdRange.max]}
                    tick={{ fill: tickColor, fontSize: 9 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v: number) => v.toFixed(2)}
                    width={50}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (!active || !payload || payload.length === 0) return null
                      const d = payload[0].payload as ChartBar
                      const dif = d.dif ?? 0
                      const dea = d.dea ?? 0
                      const hist = d.macdHist ?? 0
                      return (
                        <div className={`${tooltipBg} border rounded-lg p-2 shadow-lg text-xs min-w-[140px]`}>
                          <div className={`${tooltipTextColor} mb-1`}>{d.date}</div>
                          <div className="space-y-0.5">
                            <div className="flex justify-between gap-3">
                              <span className="text-amber-500">DIF</span>
                              <span className="text-amber-500">{dif.toFixed(3)}</span>
                            </div>
                            <div className="flex justify-between gap-3">
                              <span className="text-blue-500">DEA</span>
                              <span className="text-blue-500">{dea.toFixed(3)}</span>
                            </div>
                            <div className="flex justify-between gap-3">
                              <span className={hist >= 0 ? 'text-red-500' : 'text-green-500'}>MACD</span>
                              <span className={hist >= 0 ? 'text-red-500' : 'text-green-500'}>{hist.toFixed(3)}</span>
                            </div>
                          </div>
                        </div>
                      )
                    }}
                  />
                  <Bar dataKey="macdHist" shape={
                    <MACDBar />
                  } isAnimationActive={false} />
                  <Line
                    type="monotone"
                    dataKey="dif"
                    stroke="#f59e0b"
                    dot={false}
                    strokeWidth={1}
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="dea"
                    stroke="#3b82f6"
                    dot={false}
                    strokeWidth={1}
                    isAnimationActive={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            )}

            {/* RSI sub-chart */}
            {showRSI && (
              <ResponsiveContainer width="100%" height={subChartH}>
                <ComposedChart
                  data={chartData}
                  margin={{ top: 0, right: rightMargin, left: 0, bottom: 0 }}
                >
                  <XAxis
                    dataKey="date"
                    type="category"
                    ticks={xTicks}
                    tick={{ fill: tickColor, fontSize: 10 }}
                    axisLine={{ stroke: axisLineColor }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fill: tickColor, fontSize: 9 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v: number) => v.toFixed(0)}
                    width={50}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (!active || !payload || payload.length === 0) return null
                      const d = payload[0].payload as ChartBar
                      return (
                        <div className={`${tooltipBg} border rounded-lg p-2 shadow-lg text-xs min-w-[140px]`}>
                          <div className={`${tooltipTextColor} mb-1`}>{d.date}</div>
                          <div className="space-y-0.5">
                            <div className="flex justify-between gap-3">
                              <span className="text-cyan-500">RSI6</span>
                              <span className="text-cyan-500">{(d.rsi6 ?? 0).toFixed(1)}</span>
                            </div>
                            <div className="flex justify-between gap-3">
                              <span className="text-orange-500">RSI12</span>
                              <span className="text-orange-500">{(d.rsi12 ?? 0).toFixed(1)}</span>
                            </div>
                            <div className="flex justify-between gap-3">
                              <span className="text-emerald-500">RSI24</span>
                              <span className="text-emerald-500">{(d.rsi24 ?? 0).toFixed(1)}</span>
                            </div>
                          </div>
                        </div>
                      )
                    }}
                  />
                  <ReferenceLine y={80} stroke="#ef4444" strokeDasharray="2 2" strokeOpacity={0.4} />
                  <ReferenceLine y={20} stroke="#22c55e" strokeDasharray="2 2" strokeOpacity={0.4} />
                  <ReferenceLine y={50} stroke={gridColor} strokeDasharray="2 2" strokeOpacity={0.3} />
                  <Line
                    type="monotone"
                    dataKey="rsi6"
                    stroke="#06b6d4"
                    dot={false}
                    strokeWidth={1}
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="rsi12"
                    stroke="#f97316"
                    dot={false}
                    strokeWidth={1}
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="rsi24"
                    stroke="#10b981"
                    dot={false}
                    strokeWidth={1}
                    isAnimationActive={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            )}

            {/* KDJ sub-chart */}
            {showKDJ && (
              <ResponsiveContainer width="100%" height={subChartH}>
                <ComposedChart
                  data={chartData}
                  margin={{ top: 0, right: rightMargin, left: 0, bottom: 0 }}
                >
                  <XAxis
                    dataKey="date"
                    type="category"
                    ticks={xTicks}
                    tick={{ fill: tickColor, fontSize: 10 }}
                    axisLine={{ stroke: axisLineColor }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fill: tickColor, fontSize: 9 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v: number) => v.toFixed(0)}
                    width={50}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (!active || !payload || payload.length === 0) return null
                      const d = payload[0].payload as ChartBar
                      return (
                        <div className={`${tooltipBg} border rounded-lg p-2 shadow-lg text-xs min-w-[140px]`}>
                          <div className={`${tooltipTextColor} mb-1`}>{d.date}</div>
                          <div className="space-y-0.5">
                            <div className="flex justify-between gap-3">
                              <span className="text-blue-500">K</span>
                              <span className="text-blue-500">{(d.k ?? 0).toFixed(1)}</span>
                            </div>
                            <div className="flex justify-between gap-3">
                              <span className="text-orange-500">D</span>
                              <span className="text-orange-500">{(d.d ?? 0).toFixed(1)}</span>
                            </div>
                            <div className="flex justify-between gap-3">
                              <span className="text-purple-500">J</span>
                              <span className="text-purple-500">{(d.j ?? 0).toFixed(1)}</span>
                            </div>
                          </div>
                        </div>
                      )
                    }}
                  />
                  <ReferenceLine y={80} stroke="#ef4444" strokeDasharray="2 2" strokeOpacity={0.4} />
                  <ReferenceLine y={20} stroke="#22c55e" strokeDasharray="2 2" strokeOpacity={0.4} />
                  <ReferenceLine y={50} stroke={gridColor} strokeDasharray="2 2" strokeOpacity={0.3} />
                  <Line
                    type="monotone"
                    dataKey="k"
                    stroke="#3b82f6"
                    dot={false}
                    strokeWidth={1}
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="d"
                    stroke="#f97316"
                    dot={false}
                    strokeWidth={1}
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="j"
                    stroke="#a855f7"
                    dot={false}
                    strokeWidth={1}
                    isAnimationActive={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            )}
          </div>
        ) : (
          <div className={`flex items-center justify-center ${isFullscreen ? 'h-[500px]' : 'h-[400px]'} text-gray-400 dark:text-gray-500`}>
            暂无K线数据
          </div>
        )}
      </CardContent>
    </Card>
  )
}
