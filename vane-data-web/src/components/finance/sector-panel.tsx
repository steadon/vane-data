'use client'

import { useEffect, useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Layers, TrendingUp, ChevronRight, ChevronLeft } from 'lucide-react'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Sector {
  code: string
  name: string
  change_percent: number
  limit_up_count: number
  stock_count: number
  lead_stock_name: string
  lead_stock_code: string
  lead_stock_change: number
  market_cap: number
}

interface SectorData {
  type: string
  page: number
  page_size: number
  total: number
  pages: number
  source: string
  sectors: Sector[]
}

interface SectorStock {
  symbol: string
  code: string
  name: string
  price: number
  change_percent: number
}

interface SectorStocksData {
  sector_code: string
  page: number
  page_size: number
  total: number
  pages: number
  stocks: SectorStock[]
}

interface SectorPanelProps {
  onStockClick?: (symbol: string) => void
}

const SECTOR_PAGE_SIZE = 20
const STOCK_PAGE_SIZE = 20

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function SectorCard({ sector, onClick }: { sector: Sector; onClick: () => void }) {
  const isUp = sector.change_percent >= 0
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-150 cursor-pointer group active:scale-[0.98]"
    >
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
          {sector.name}
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-xs text-gray-400 dark:text-gray-500">{sector.stock_count}只</span>
          {sector.limit_up_count > 0 && (
            <span className="text-xs text-red-500/80">涨停{sector.limit_up_count}只</span>
          )}
          {sector.lead_stock_name && (
            <span className="text-xs text-gray-300 dark:text-gray-600 truncate max-w-[140px]">
              领涨: {sector.lead_stock_name} ({sector.lead_stock_change > 0 ? '+' : ''}{sector.lead_stock_change.toFixed(2)}%)
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Badge
          variant="outline"
          className={`text-[11px] font-semibold px-1.5 py-0 min-w-[52px] justify-center ${
            isUp
              ? 'text-red-500 border-red-500/30 bg-red-500/5'
              : 'text-green-500 border-green-500/30 bg-green-500/5'
          }`}
        >
          {isUp ? '+' : ''}
          {sector.change_percent.toFixed(2)}%
        </Badge>
        <ChevronRight className="size-3.5 text-gray-400 dark:text-gray-500 group-hover:text-gray-300 dark:group-hover:text-gray-400 transition-colors" />
      </div>
    </div>
  )
}

function SectorGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {Array.from({ length: SECTOR_PAGE_SIZE }).map((_, i) => (
        <Skeleton key={i} className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg" />
      ))}
    </div>
  )
}

function Pager({
  page, pages, loading, onPrev, onNext, totalLabel,
}: {
  page: number; pages: number; loading: boolean
  onPrev: () => void; onNext: () => void
  totalLabel?: string
}) {
  if (pages <= 1 && !totalLabel) return null
  return (
    <div className="flex items-center justify-between pt-2 px-1 border-t border-gray-100 dark:border-gray-700 mt-2">
      <Button
        variant="ghost" size="sm"
        className="h-7 px-2.5 text-xs text-gray-500 dark:text-gray-400 disabled:opacity-30"
        disabled={page <= 1 || loading}
        onClick={onPrev}
      >
        <ChevronLeft className="size-3 mr-0.5" />上页
      </Button>
      <span className="text-xs text-gray-400 dark:text-gray-500 tabular-nums">
        {totalLabel ? `共${totalLabel} · ` : ''}{page} / {Math.max(1, pages)}
      </span>
      <Button
        variant="ghost" size="sm"
        className="h-7 px-2.5 text-xs text-gray-500 dark:text-gray-400 disabled:opacity-30"
        disabled={page >= pages || loading}
        onClick={onNext}
      >
        下页<ChevronRight className="size-3 ml-0.5" />
      </Button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function SectorPanel({ onStockClick }: SectorPanelProps) {
  const [industryData, setIndustryData] = useState<SectorData | null>(null)
  const [conceptData, setConceptData] = useState<SectorData | null>(null)
  const [loadingIndustry, setLoadingIndustry] = useState(true)
  const [loadingConcept, setLoadingConcept] = useState(true)
  const [industryPage, setIndustryPage] = useState(1)
  const [conceptPage, setConceptPage] = useState(1)

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null)
  const [stocksData, setStocksData] = useState<SectorStocksData | null>(null)
  const [loadingStocks, setLoadingStocks] = useState(false)
  const [stocksPage, setStocksPage] = useState(1)

  // ---------------------------------------------------------------------------
  // Fetch sectors (page-aware)
  // ---------------------------------------------------------------------------

  const fetchSectors = useCallback(async (
    type: string,
    page: number,
    setter: (d: SectorData) => void,
    setLoad: (l: boolean) => void,
  ) => {
    try {
      setLoad(true)
      const res = await fetch(`/api/finance/sectors?type=${type}&page=${page}&page_size=${SECTOR_PAGE_SIZE}`)
      const json = await res.json()
      if (json.code === 200 && json.data) setter(json.data)
    } catch {
      // silent fail
    } finally {
      setLoad(false)
    }
  }, [])

  useEffect(() => {
    fetchSectors('industry', industryPage, setIndustryData, setLoadingIndustry)
  }, [industryPage, fetchSectors])

  useEffect(() => {
    fetchSectors('concept', conceptPage, setConceptData, setLoadingConcept)
  }, [conceptPage, fetchSectors])

  // ---------------------------------------------------------------------------
  // Fetch sector stocks (page-aware, resets when sector changes)
  // ---------------------------------------------------------------------------

  const fetchSectorStocks = useCallback(async (code: string, page: number) => {
    setLoadingStocks(true)
    try {
      const res = await fetch(
        `/api/finance/sector-stocks?code=${code}&page=${page}&page_size=${STOCK_PAGE_SIZE}`
      )
      const json = await res.json()
      if (json.code === 200 && json.data) setStocksData(json.data)
    } catch {
      // silent fail
    } finally {
      setLoadingStocks(false)
    }
  }, [])

  useEffect(() => {
    if (!selectedSector || !dialogOpen) return
    fetchSectorStocks(selectedSector.code, stocksPage)
  }, [selectedSector, stocksPage, dialogOpen, fetchSectorStocks])

  const handleSectorClick = useCallback((sector: Sector) => {
    setSelectedSector(sector)
    setStocksData(null)
    setStocksPage(1)
    setDialogOpen(true)
  }, [])

  const handleStockClickInDialog = useCallback(
    (symbol: string) => {
      setDialogOpen(false)
      onStockClick?.(symbol)
    },
    [onStockClick]
  )

  // ---------------------------------------------------------------------------
  // Render helpers
  // ---------------------------------------------------------------------------

  const renderSectorList = (
    data: SectorData | null,
    loading: boolean,
    page: number,
    onPrev: () => void,
    onNext: () => void,
  ) => {
    if (loading && !data) return <SectorGridSkeleton />

    if (!data || data.sectors.length === 0) {
      return (
        <div className="text-center text-gray-400 dark:text-gray-500 text-sm py-8">暂无板块数据</div>
      )
    }

    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {data.sectors.map((sector) => (
            <SectorCard
              key={sector.code}
              sector={sector}
              onClick={() => handleSectorClick(sector)}
            />
          ))}
        </div>
        <Pager
          page={page}
          pages={data.pages}
          loading={loading}
          onPrev={onPrev}
          onNext={onNext}
          totalLabel={`${data.total}个板块`}
        />
      </div>
    )
  }

  // ---------------------------------------------------------------------------
  // JSX
  // ---------------------------------------------------------------------------

  return (
    <>
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md">
        <CardHeader className="pb-1 px-2.5 pt-2">
          <CardTitle className="text-xs font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-1.5">
            <Layers className="size-3.5 text-blue-500" />
            <span className="h-3 w-[3px] rounded-full bg-blue-400" />
            板块分析
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 pt-0">
          <Tabs defaultValue="industry">
            <TabsList className="bg-gray-100 dark:bg-gray-700 h-7 mb-2">
              <TabsTrigger
                value="industry"
                className="text-xs data-[state=active]:bg-blue-50 data-[state=active]:dark:bg-blue-900/30 data-[state=active]:text-blue-600 data-[state=active]:dark:text-blue-400 flex-1"
              >
                <TrendingUp className="size-3 mr-1" />
                行业板块{industryData ? ` (${industryData.total})` : ''}
              </TabsTrigger>
              <TabsTrigger
                value="concept"
                className="text-xs data-[state=active]:bg-blue-50 data-[state=active]:dark:bg-blue-900/30 data-[state=active]:text-blue-600 data-[state=active]:dark:text-blue-400 flex-1"
              >
                <Layers className="size-3 mr-1" />
                概念板块{conceptData ? ` (${conceptData.total})` : ''}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="industry" className="mt-0">
              {renderSectorList(
                industryData, loadingIndustry, industryPage,
                () => setIndustryPage((p) => Math.max(1, p - 1)),
                () => setIndustryPage((p) => p + 1),
              )}
            </TabsContent>
            <TabsContent value="concept" className="mt-0">
              {renderSectorList(
                conceptData, loadingConcept, conceptPage,
                () => setConceptPage((p) => Math.max(1, p - 1)),
                () => setConceptPage((p) => p + 1),
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Sector stocks dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 max-w-lg max-h-[85vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-gray-900 dark:text-gray-100">
              {selectedSector?.name || '板块成分股'}
            </DialogTitle>
            <DialogDescription className="text-gray-400 dark:text-gray-500">
              {selectedSector
                ? `共 ${stocksData?.total ?? selectedSector.stock_count} 只股票 · 涨跌幅 ${selectedSector.change_percent >= 0 ? '+' : ''}${selectedSector.change_percent.toFixed(2)}%`
                : ''}
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-1 min-h-0 custom-scrollbar -mx-2 px-2">
            {loadingStocks ? (
              <div className="space-y-2 py-2">
                {Array.from({ length: STOCK_PAGE_SIZE }).map((_, i) => (
                  <Skeleton key={i} className="h-11 bg-gray-200 dark:bg-gray-700 rounded-lg" />
                ))}
              </div>
            ) : stocksData && stocksData.stocks.length > 0 ? (
              <div className="space-y-1 py-1">
                <div className="grid grid-cols-3 gap-2 px-3 py-1.5 text-xs text-gray-400 dark:text-gray-500">
                  <span>股票名称</span>
                  <span className="text-right">最新价</span>
                  <span className="text-right">涨跌幅</span>
                </div>
                {stocksData.stocks.map((stock) => {
                  const isUp = stock.change_percent >= 0
                  return (
                    <div
                      key={stock.symbol}
                      onClick={() => handleStockClickInDialog(stock.symbol)}
                      className="grid grid-cols-3 gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-150 cursor-pointer group active:scale-[0.98]"
                    >
                      <div className="min-w-0">
                        <div className="text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                          {stock.name}
                        </div>
                        <div className="text-xs text-gray-400 dark:text-gray-500 font-mono">{stock.symbol}</div>
                      </div>
                      <div className="text-right text-sm text-gray-700 dark:text-gray-300 tabular-nums self-center">
                        {stock.price.toFixed(2)}
                      </div>
                      <div className="text-right self-center">
                        <Badge
                          variant="outline"
                          className={`text-xs font-semibold px-2 py-0.5 ${
                            isUp
                              ? 'text-red-500 border-red-500/30 bg-red-500/5'
                              : 'text-green-500 border-green-500/30 bg-green-500/5'
                          }`}
                        >
                          {isUp ? '+' : ''}{stock.change_percent.toFixed(2)}%
                        </Badge>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="text-center text-gray-400 dark:text-gray-500 text-sm py-8">暂无成分股数据</div>
            )}
          </ScrollArea>

          {/* Dialog pagination */}
          {stocksData && stocksData.pages > 1 && (
            <Pager
              page={stocksPage}
              pages={stocksData.pages}
              loading={loadingStocks}
              onPrev={() => setStocksPage((p) => Math.max(1, p - 1))}
              onNext={() => setStocksPage((p) => p + 1)}
              totalLabel={`${stocksData.total}只`}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
