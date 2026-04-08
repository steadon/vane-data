'use client'

import { useState, useCallback, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, X, Clock, Trash2 } from 'lucide-react'

interface PresetStock {
  symbol: string
  name: string
}

interface SearchHistoryItem {
  symbol: string
  name: string
  timestamp: number
}

const PRESET_STOCKS: PresetStock[] = [
  { symbol: 'sh600519', name: '贵州茅台' },
  { symbol: 'sz000001', name: '平安银行' },
  { symbol: 'sz300750', name: '宁德时代' },
  { symbol: 'sz002594', name: '比亚迪' },
  { symbol: 'sh601318', name: '中国平安' },
]

const HISTORY_KEY = 'vane-search-history'
const MAX_HISTORY = 8

function getHistory(): SearchHistoryItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveHistory(item: SearchHistoryItem) {
  try {
    let history = getHistory()
    // Remove duplicate
    history = history.filter(h => h.symbol !== item.symbol)
    // Add to front
    history.unshift(item)
    // Limit
    history = history.slice(0, MAX_HISTORY)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
  } catch {
    // ignore
  }
}

function clearHistory() {
  try {
    localStorage.removeItem(HISTORY_KEY)
  } catch {
    // ignore
  }
}

interface StockSearchProps {
  currentSymbol: string
  onSymbolChange: (symbol: string) => void
}

export function StockSearch({ currentSymbol, onSymbolChange }: StockSearchProps) {
  const [inputValue, setInputValue] = useState('')
  const [history, setHistory] = useState<SearchHistoryItem[]>(() => getHistory())
  const [showHistory, setShowHistory] = useState(false)
  const [nameMap, setNameMap] = useState<Record<string, string>>({})

  const handleSearch = useCallback(() => {
    const raw = inputValue.trim()
    if (!raw) return

    // Auto-detect market prefix
    let symbol = raw.toLowerCase()
    if (!symbol.startsWith('sh') && !symbol.startsWith('sz')) {
      if (symbol.startsWith('6') || symbol.startsWith('5')) {
        symbol = 'sh' + symbol
      } else {
        symbol = 'sz' + symbol
      }
    }

    // Save to history
    const name = nameMap[symbol] || raw
    saveHistory({ symbol, name, timestamp: Date.now() })
    setHistory(getHistory())

    onSymbolChange(symbol)
    setInputValue('')
    setShowHistory(false)
  }, [inputValue, onSymbolChange, nameMap])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') handleSearch()
    },
    [handleSearch]
  )

  const handlePreset = useCallback(
    (symbol: string, name: string) => {
      saveHistory({ symbol, name, timestamp: Date.now() })
      setHistory(getHistory())
      onSymbolChange(symbol)
      setInputValue('')
      setShowHistory(false)
    },
    [onSymbolChange]
  )

  const handleHistoryClick = useCallback(
    (item: SearchHistoryItem) => {
      onSymbolChange(item.symbol)
      setInputValue('')
      setShowHistory(false)
    },
    [onSymbolChange]
  )

  const handleClearHistory = useCallback(() => {
    clearHistory()
    setHistory([])
  }, [])

  const activePreset = PRESET_STOCKS.find((s) => s.symbol === currentSymbol)

  return (
    <div className="space-y-1.5">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="输入股票代码，如 600519 或 sh600519"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowHistory(true)}
            onBlur={() => setTimeout(() => setShowHistory(false), 200)}
            className="pl-9 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-blue-500/50 dark:focus:border-blue-400/50 focus:ring-blue-500/20 h-8"
          />
          {inputValue && (
            <button
              onClick={() => setInputValue('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="size-3.5" />
            </button>
          )}
          {/* Search history dropdown */}
          {showHistory && history.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 overflow-hidden">
              <div className="flex items-center justify-between px-3 py-1.5 bg-gray-50 dark:bg-gray-750 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                  <Clock className="size-3" />
                  <span>搜索历史</span>
                </div>
                <button
                  onClick={handleClearHistory}
                  className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="size-3" />
                  <span>清除</span>
                </button>
              </div>
              {history.map(item => (
                <div
                  key={item.symbol}
                  onClick={() => handleHistoryClick(item)}
                  className="flex items-center justify-between px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-750 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-900 dark:text-gray-100">{item.name || item.symbol}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">{item.symbol}</span>
                  </div>
                  <Clock className="size-3 text-gray-300 dark:text-gray-600" />
                </div>
              ))}
            </div>
          )}
        </div>
        <Button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white h-8 px-3 text-xs"
        >
          查询
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] text-gray-400 dark:text-gray-500">热门:</span>
        {PRESET_STOCKS.map((stock) => (
          <Button
            key={stock.symbol}
            variant="outline"
            size="sm"
            onClick={() => handlePreset(stock.symbol, stock.name)}
            className={`h-6 text-[11px] px-2 transition-all ${
              activePreset?.symbol === stock.symbol
                ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-300 dark:border-blue-500/30 text-blue-600 dark:text-blue-400'
                : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500/30'
            }`}
          >
            {stock.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
