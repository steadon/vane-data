'use client'

import { useEffect, useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Newspaper, ExternalLink, Clock, Loader2 } from 'lucide-react'

interface NewsItem {
  id: string
  title: string
  digest: string
  image: string
  source: string
  time: string
  url: string
}

const PAGE_SIZE = 15
const MAX_PAGES = 5   // cap at 5 pages (75 items) to prevent unbounded memory growth

function timeAgo(timeStr: string): string {
  if (!timeStr) return ''
  const now = new Date()
  const time = new Date(timeStr.replace(/-/g, '/'))
  if (isNaN(time.getTime())) return timeStr

  const diffMs = now.getTime() - time.getTime()
  const diffSeconds = Math.floor(diffMs / 1000)
  const diffMinutes = Math.floor(diffSeconds / 60)
  const diffHours = Math.floor(diffMinutes / 60)

  const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const timeDate = new Date(time.getFullYear(), time.getMonth(), time.getDate())
  const dayDiff = Math.floor((nowDate.getTime() - timeDate.getTime()) / (1000 * 60 * 60 * 24))

  if (diffMinutes < 1) return '刚刚'
  if (diffMinutes < 60) return `${diffMinutes}分钟前`
  if (diffHours < 24) return `${diffHours}小时前`
  if (dayDiff === 1) return '昨天'
  if (dayDiff === 2) return '前天'
  if (dayDiff < 7) return `${dayDiff}天前`

  const month = String(time.getMonth() + 1).padStart(2, '0')
  const day = String(time.getDate()).padStart(2, '0')
  return `${month}-${day}`
}

function NewsRow({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-sm border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-150 group"
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-relaxed line-clamp-2">
            {item.title}
          </h4>
          {item.digest && (
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 line-clamp-2 leading-relaxed">
              {item.digest}
            </p>
          )}
          <div className="flex items-center gap-3 mt-1.5">
            <span className="text-xs text-gray-400 dark:text-gray-500">{item.source}</span>
            <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1" title={item.time}>
              <Clock className="size-2.5" />
              {timeAgo(item.time)}
            </span>
          </div>
        </div>
        <ExternalLink className="size-3.5 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors mt-1 shrink-0" />
      </div>
    </a>
  )
}

function NewsSkeleton() {
  return (
    <div className="space-y-0.5">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="p-3">
          <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700 mb-2" />
          <Skeleton className="h-3 w-3/4 bg-gray-200 dark:bg-gray-700 mb-1" />
          <Skeleton className="h-3 w-1/4 bg-gray-200 dark:bg-gray-700" />
        </div>
      ))}
    </div>
  )
}

export default function FinanceNews() {
  const [allNews, setAllNews] = useState<NewsItem[]>([])
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(1)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPage = useCallback(async (pageNum: number, append: boolean) => {
    if (append) {
      setLoadingMore(true)
    } else {
      setLoading(true)
      setError(null)
    }

    try {
      const res = await fetch(`/api/finance/news?page=${pageNum}&page_size=${PAGE_SIZE}`)
      const json = await res.json()
      if (json.code === 200 && json.data) {
        const { news, page_count } = json.data as { news: NewsItem[]; page_count: number }
        setPageCount(page_count)
        setPage(pageNum)
        if (append) {
          // Deduplicate by id in case of overlap
          setAllNews((prev) => {
            const existingIds = new Set(prev.map((n) => n.id))
            const fresh = news.filter((n: NewsItem) => !existingIds.has(n.id))
            return [...prev, ...fresh]
          })
        } else {
          setAllNews(news)
        }
      } else {
        if (!append) setError(json.msg || '获取新闻失败')
      }
    } catch {
      if (!append) setError('网络请求失败')
    } finally {
      if (append) setLoadingMore(false)
      else setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPage(1, false)
  }, [fetchPage])

  const hasMore = page < pageCount && page < MAX_PAGES

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md">
      <CardHeader className="pb-1 px-2.5 pt-2 shrink-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xs font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-1.5">
            <Newspaper className="size-3.5 text-blue-500" />
            <span className="h-3 w-[3px] rounded-full bg-blue-400" />
            财经快讯
          </CardTitle>
          {allNews.length > 0 && (
            <Badge variant="outline" className="text-[11px] text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-700">
              东方财富
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-0 px-2 pb-2 flex flex-col">
        {/* Fixed-height scroll area — card never grows when more news loads */}
        <div className="h-[480px] overflow-y-auto custom-scrollbar">
          {loading ? (
            <NewsSkeleton />
          ) : error ? (
            <div className="text-center text-gray-400 dark:text-gray-500 text-sm py-8">{error}</div>
          ) : allNews.length > 0 ? (
            <div className="space-y-0.5 px-1">
              {allNews.map((item) => (
                <NewsRow key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400 dark:text-gray-500 text-sm py-8">暂无新闻数据</div>
          )}
        </div>

        {/* Load more button — only shown when there are more pages */}
        {!loading && !error && hasMore && (
          <div className="shrink-0 pt-2 border-t border-gray-100 dark:border-gray-700">
            <Button
              variant="ghost"
              size="sm"
              className="w-full h-7 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              disabled={loadingMore}
              onClick={() => fetchPage(page + 1, true)}
            >
              {loadingMore ? (
                <>
                  <Loader2 className="size-3 mr-1.5 animate-spin" />
                  加载中…
                </>
              ) : (
                `加载更多 (第 ${page + 1} 页)`
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
