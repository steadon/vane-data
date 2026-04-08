'use client'

import { useEffect, useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Grid3X3 } from 'lucide-react'

interface SectorHeatItem {
  name: string
  code: string
  change_percent: number
  stock_count: number
}

interface MarketHeatmapProps {
  onSectorClick?: (code: string) => void
}

export default function MarketHeatmap({ onSectorClick }: MarketHeatmapProps) {
  const [sectors, setSectors] = useState<SectorHeatItem[]>([])
  const [loading, setLoading] = useState(true)

  const fetchSectors = useCallback(async () => {
    try {
      setLoading(true)
      // Request exactly 24 in the API's natural order — no client-side sorting.
      const res = await fetch('/api/finance/sectors?type=industry&page=1&page_size=24')
      const json = await res.json()
      if (json.code === 200 && json.data?.sectors) {
        setSectors(json.data.sectors)
      }
    } catch {
      // silent
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchSectors() }, [fetchSectors])

  // Calculate cell size based on change magnitude
  function getHeatColor(pct: number): string {
    if (pct >= 3) return 'bg-red-500 text-white'
    if (pct >= 2) return 'bg-red-400 text-white'
    if (pct >= 1) return 'bg-red-300 text-red-900 dark:text-red-100'
    if (pct >= 0) return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
    if (pct >= -1) return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
    if (pct >= -2) return 'bg-green-300 text-green-900 dark:text-green-100'
    if (pct >= -3) return 'bg-green-400 text-white'
    return 'bg-green-500 text-white'
  }

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md">
      <CardHeader className="pb-1 px-2.5 pt-2">
        <CardTitle className="text-xs font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-1.5">
          <Grid3X3 className="size-3 text-blue-500" />
          <span className="h-3 w-[3px] rounded-full bg-blue-400" />
          行业热力图
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2 pt-0">
        {loading ? (
          <div className="grid grid-cols-6 gap-0.5">
            {Array.from({ length: 24 }).map((_, i) => (
              <Skeleton key={i} className="h-14 bg-gray-100 dark:bg-gray-700 rounded-sm" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-6 gap-0.5">
            {sectors.map((s) => (
              <div
                key={s.code}
                onClick={() => onSectorClick?.(s.code)}
                className={`rounded-sm p-1 cursor-pointer transition-all duration-150 hover:scale-105 hover:shadow-sm ${getHeatColor(s.change_percent)}`}
                title={`${s.name} ${s.change_percent >= 0 ? '+' : ''}${s.change_percent.toFixed(2)}% (${s.stock_count}只)`}
              >
                <div className="text-[10px] font-medium truncate leading-tight">{s.name}</div>
                <div className="text-xs font-bold tabular-nums leading-tight mt-0.5">
                  {s.change_percent >= 0 ? '+' : ''}{s.change_percent.toFixed(2)}%
                </div>
                <div className="text-[9px] opacity-70 leading-tight">{s.stock_count}只</div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
