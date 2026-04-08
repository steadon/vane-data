'use client'

import { useState, useCallback, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, ChevronUp, ChevronDown, X, Trash2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import {
  getWatchlist,
  saveWatchlist,
  moveUp,
  moveDown,
  type WatchlistItem,
} from '@/lib/watchlist-storage'

interface WatchlistProps {
  onStockClick?: (symbol: string) => void
}

export default function Watchlist({ onStockClick }: WatchlistProps) {
  const [watchItems, setWatchItems] = useState<WatchlistItem[]>([])

  // Load watchlist from localStorage and subscribe to storage changes (client-only)
  useEffect(() => {
    const load = () => setWatchItems(getWatchlist())
    load()
    const handler = (e: StorageEvent) => {
      if (e.key === 'watchlist') load()
    }
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [])
  const { toast } = useToast()

  const handleRemove = useCallback(
    (symbol: string, name: string) => {
      const newItems = watchItems.filter((item) => item.symbol !== symbol)
      setWatchItems(newItems)
      saveWatchlist(newItems)
      toast({
        title: '已从自选移除',
        description: name || symbol,
      })
    },
    [watchItems, toast]
  )

  const handleMoveUp = useCallback(
    (index: number) => {
      const newItems = moveUp(watchItems, index)
      setWatchItems(newItems)
      saveWatchlist(newItems)
    },
    [watchItems]
  )

  const handleMoveDown = useCallback(
    (index: number) => {
      const newItems = moveDown(watchItems, index)
      setWatchItems(newItems)
      saveWatchlist(newItems)
    },
    [watchItems]
  )

  const handleClearAll = useCallback(() => {
    setWatchItems([])
    saveWatchlist([])
    toast({ title: '已清空', description: '自选列表已清空' })
  }, [toast])

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md">
      <CardHeader className="pb-1 px-2.5 pt-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xs font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-1.5">
            <Star className="size-3.5 text-blue-500 fill-blue-500" />
            <span className="h-3 w-[3px] rounded-full bg-blue-400" />
            我的自选
            <span className="text-[11px] text-gray-400 dark:text-gray-500 font-normal">({watchItems.length})</span>
          </CardTitle>
          <div className="flex items-center gap-1">
            {watchItems.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearAll}
                className="h-6 text-xs text-gray-400 dark:text-gray-500 hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 px-2"
              >
                <Trash2 className="size-3" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 px-2 pb-1.5">
        {watchItems.length > 0 ? (
          <div className="space-y-0.5 px-1">
            {watchItems.map((item, index) => (
              <div
                key={item.symbol}
                className="flex items-center gap-1 px-1.5 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-150 cursor-pointer group active:scale-[0.98]"
                onClick={() => onStockClick?.(item.symbol)}
              >
                {/* Reorder buttons - visible on hover */}
                <div className="flex flex-col gap-0 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleMoveUp(index)
                    }}
                    disabled={index === 0}
                    className="p-0 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed"
                    title="上移"
                  >
                    <ChevronUp className="size-3" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleMoveDown(index)
                    }}
                    disabled={index === watchItems.length - 1}
                    className="p-0 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed"
                    title="下移"
                  >
                    <ChevronDown className="size-3" />
                  </button>
                </div>

                {/* Stock info */}
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 font-mono">{item.symbol}</div>
                </div>

                {/* Index badge */}
                <span className="text-[10px] text-gray-300 dark:text-gray-600 tabular-nums font-medium">
                  #{index + 1}
                </span>

                {/* Remove button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemove(item.symbol, item.name)
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-400 dark:text-gray-500 hover:text-red-400"
                  title="移除"
                >
                  <X className="size-3.5" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 dark:text-gray-500 text-sm py-8">
            暂无自选股，点击行情卡片上的 ＋自选 添加
          </div>
        )}
      </CardContent>
    </Card>
  )
}
