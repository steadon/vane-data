'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { BarChart3, Clock, RefreshCw, Maximize2, Minimize2, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { StockSearch } from '@/components/finance/stock-search'
import KLineChart from '@/components/finance/kline-chart'
import QuoteCards from '@/components/finance/quote-cards'
import type { QuoteData } from '@/components/finance/quote-cards'
import LimitPool from '@/components/finance/limit-pool'
import SectorPanel from '@/components/finance/sector-panel'
import FinanceNews from '@/components/finance/news-panel'
import MarketIndexPanel from '@/components/finance/market-index'
import Watchlist from '@/components/finance/watchlist'
import StockDetailPanel from '@/components/finance/stock-detail-panel'
import MarketHeatmap from '@/components/finance/market-heatmap'
import ScrollToTop from '@/components/finance/scroll-to-top'

const DEFAULT_SYMBOL = 'sh600519'

function getMarketTime(): string {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
  return `${dateStr} ${hours}:${minutes}:${seconds}`
}

function getMarketStatus(): { label: string; color: string; dotColor: string } {
  const now = new Date()
  const day = now.getDay()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const t = hours * 60 + minutes

  // Weekend
  if (day === 0 || day === 6) {
    return { label: '休市', color: 'text-gray-400', dotColor: 'bg-gray-400' }
  }
  // Morning session: 9:30-11:30
  if (t >= 570 && t <= 690) {
    return { label: '交易中', color: 'text-green-500', dotColor: 'bg-green-500 animate-pulse' }
  }
  // Lunch break: 11:30-13:00
  if (t > 690 && t < 780) {
    return { label: '午休', color: 'text-amber-500', dotColor: 'bg-amber-500' }
  }
  // Afternoon session: 13:00-15:00
  if (t >= 780 && t <= 900) {
    return { label: '交易中', color: 'text-green-500', dotColor: 'bg-green-500 animate-pulse' }
  }
  // Before open: before 9:30
  if (t < 570) {
    return { label: '盘前', color: 'text-blue-500', dotColor: 'bg-blue-500' }
  }
  // After close
  return { label: '已收盘', color: 'text-gray-400', dotColor: 'bg-gray-400' }
}

export default function Home() {
  const [symbol, setSymbol] = useState(DEFAULT_SYMBOL)
  const [period, setPeriod] = useState('day')
  const [adjust, setAdjust] = useState('qfq')
  const [dayRange, setDayRange] = useState(90)
  const [currentTime, setCurrentTime] = useState('--')
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)
  const quoteDataRef = useRef<QuoteData | null>(null)
  const { toast } = useToast()
  const { theme, setTheme } = useTheme()

  // Clock timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getMarketTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Auto-refresh quote data every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey((k) => k + 1)
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const handleSymbolChange = useCallback((newSymbol: string) => {
    setSymbol(newSymbol)
    toast({
      title: '切换股票',
      description: `正在查看 ${newSymbol}`,
    })
  }, [toast])

  const handleQuoteDataChange = useCallback((data: QuoteData | null) => {
    quoteDataRef.current = data
  }, [])

  const handleManualRefresh = useCallback(() => {
    setIsRefreshing(true)
    setRefreshKey((k) => k + 1)
    setTimeout(() => setIsRefreshing(false), 1000)
    toast({
      title: '刷新成功',
      description: '数据已更新',
    })
  }, [toast])

  const handleStockClick = useCallback((stockSymbol: string) => {
    setSymbol(stockSymbol)
    toast({
      title: '切换股票',
      description: `正在查看 ${stockSymbol}`,
    })
  }, [toast])

  const [marketStatus, setMarketStatus] = useState<{ label: string; color: string; dotColor: string }>({ label: '--', color: 'text-gray-400', dotColor: 'bg-gray-300' })

  // Market status (client-only to avoid hydration mismatch from timezone difference)
  useEffect(() => {
    const update = () => setMarketStatus(getMarketStatus())
    update()
    const interval = setInterval(update, 60000)
    return () => clearInterval(interval)
  }, [])

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col ${isFullscreen ? 'overflow-hidden' : ''}`}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-[1600px] mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <BarChart3 className="size-4 text-white" />
              </div>
              <h1 className="text-base font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                Vane Data
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-1.5 ml-4 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className={`w-1.5 h-1.5 rounded-full ${currentTime.includes(':') ? 'bg-blue-500 live-pulse' : 'bg-gray-300'}`} />
              <span className="text-xs text-gray-400 dark:text-gray-500">实时</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-md">
              <Clock className="size-3.5" />
              <span className="font-mono tabular-nums" suppressHydrationWarning>{currentTime}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800">
              <div className={`w-1.5 h-1.5 rounded-full ${marketStatus.dotColor}`} />
              <span className={`${marketStatus.color}`} suppressHydrationWarning>{marketStatus.label}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="h-8 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title={theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式'}
            >
              {theme === 'dark' ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="h-8 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title={isFullscreen ? '退出全屏图表' : '全屏图表'}
            >
              {isFullscreen ? <Minimize2 className="size-3.5" /> : <Maximize2 className="size-3.5" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleManualRefresh}
              className="h-8 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <RefreshCw className={`size-3.5 mr-1.5 ${isRefreshing ? 'animate-spin' : 'transition-transform hover:rotate-180'}`} />
              <span className="text-xs">刷新</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={`${isFullscreen ? '' : 'max-w-[1600px] mx-auto px-4'} py-1.5 space-y-1.5 flex-1 ${isFullscreen ? 'px-4 max-w-[1800px] mx-auto' : ''} animate-fade-in`}>
        {/* Market Index Panel */}
        {!isFullscreen && (
          <div className="animate-slide-up" style={{ animationDelay: '0.05s' }}>
            <MarketIndexPanel onIndexClick={handleStockClick} />
          </div>
        )}

        {/* Search */}
        {!isFullscreen && (
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <StockSearch currentSymbol={symbol} onSymbolChange={handleSymbolChange} />
          </div>
        )}

        {/* Main Grid: Quote + Chart + Sector (left), Watchlist + Limit Pool + News (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-1.5">
          <div className="space-y-1">
            {/* Quote Cards (above K-line) */}
            {!isFullscreen && (
              <div key={`${symbol}-${refreshKey}`} className="animate-slide-up card-hover-lift" style={{ animationDelay: '0.15s' }}>
                <QuoteCards symbol={symbol} onDataChange={handleQuoteDataChange} />
              </div>
            )}

            {/* Market Heatmap */}
            {!isFullscreen && (
              <div className="animate-slide-up card-hover-lift" style={{ animationDelay: '0.2s' }}>
                <MarketHeatmap onSectorClick={(code) => {}} />
              </div>
            )}

            {/* K-Line Chart */}
            <div className="animate-slide-up" style={{ animationDelay: '0.25s' }}>
              <KLineChart
                symbol={symbol}
                period={period}
                setPeriod={setPeriod}
                adjust={adjust}
                setAdjust={setAdjust}
                dayRange={dayRange}
                setDayRange={setDayRange}
                isFullscreen={isFullscreen}
              />
            </div>

            {/* Stock Detail */}
            {!isFullscreen && (
              <div className="animate-slide-up card-hover-lift" style={{ animationDelay: '0.3s' }}>
                <StockDetailPanel symbol={symbol} />
              </div>
            )}

            {/* Sector Analysis (same width as K-line) */}
            {!isFullscreen && (
              <div className="animate-slide-up card-hover-lift" style={{ animationDelay: '0.35s' }}>
                <SectorPanel onStockClick={handleStockClick} />
              </div>
            )}

            {/* Mobile: Watchlist + Limit Pool */}
            {!isFullscreen && (
              <div className="lg:hidden space-y-2">
                <Watchlist onStockClick={handleStockClick} />
                <LimitPool onStockClick={handleStockClick} />
              </div>
            )}
          </div>

          {/* Right Sidebar: Watchlist + Limit Pool + News */}
          {!isFullscreen && (
            <div className="hidden lg:flex flex-col gap-1 flex-1 min-h-0">
              <Watchlist onStockClick={handleStockClick} />
              <LimitPool onStockClick={handleStockClick} />
              <FinanceNews />
            </div>
          )}
        </div>

        {/* Mobile: News */}
        {!isFullscreen && (
          <div className="lg:hidden">
            <FinanceNews />
          </div>
        )}
      </main>

      {/* Footer */}
      {!isFullscreen && (
        <footer className="mt-auto bg-white dark:bg-gray-900">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          <div className="max-w-[1600px] mx-auto px-4 py-1.5 flex items-center justify-between">
            <span className="text-[10px] text-gray-400">
              数据来源：腾讯财经 / 新浪财经 / 东方财富
            </span>
            <span className="text-[10px] text-gray-400">
              仅供参考，不构成投资建议
            </span>
          </div>
        </footer>
      )}
      <ScrollToTop />
    </div>
  )
}
