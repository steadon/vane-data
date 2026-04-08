/**
 * Shared localStorage utility for watchlist persistence.
 * Storage key: "vane-watchlist"
 * Format: { symbol: string; name: string }[]
 */

export interface WatchlistItem {
  symbol: string
  name: string
}

const STORAGE_KEY = 'vane-watchlist'

export const DEFAULT_WATCHLIST: WatchlistItem[] = [
  { symbol: 'sh600519', name: '贵州茅台' },
  { symbol: 'sz000001', name: '平安银行' },
  { symbol: 'sz300750', name: '宁德时代' },
  { symbol: 'sh601318', name: '中国平安' },
  { symbol: 'sz002594', name: '比亚迪' },
]

function isWatchlistItemArray(arr: unknown[]): arr is WatchlistItem[] {
  return arr.every(
    (item) =>
      item !== null &&
      typeof item === 'object' &&
      typeof (item as WatchlistItem).symbol === 'string' &&
      typeof (item as WatchlistItem).name === 'string'
  )
}

/** Migrate legacy string[] format to new {symbol, name}[] format */
function migrateLegacyFormat(stored: unknown): WatchlistItem[] {
  if (Array.isArray(stored) && stored.every((s) => typeof s === 'string')) {
    // Legacy format: string[]
    const defaultMap = new Map(DEFAULT_WATCHLIST.map((d) => [d.symbol, d.name]))
    return (stored as string[]).map((s) => ({
      symbol: s,
      name: defaultMap.get(s) || s,
    }))
  }
  return []
}

/** Read watchlist from localStorage. Returns default if empty or invalid. */
export function getWatchlist(): WatchlistItem[] {
  if (typeof window === 'undefined') return DEFAULT_WATCHLIST
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed) && parsed.length > 0) {
        if (isWatchlistItemArray(parsed)) return parsed as WatchlistItem[]
        // Try migration from legacy format
        const migrated = migrateLegacyFormat(parsed)
        if (migrated.length > 0) {
          saveWatchlist(migrated)
          return migrated
        }
      }
    }
  } catch {
    // Corrupted data, fall through to default
  }
  // First time: save defaults to localStorage
  saveWatchlist(DEFAULT_WATCHLIST)
  return DEFAULT_WATCHLIST
}

/** Write watchlist to localStorage. */
export function saveWatchlist(items: WatchlistItem[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

/** Check if a symbol is already in the watchlist. */
export function isInWatchlist(symbol: string): boolean {
  return getWatchlist().some((item) => item.symbol === symbol)
}

/** Add a stock to the watchlist. Returns true if added, false if already present. */
export function addToWatchlistStorage(symbol: string, name: string): boolean {
  const list = getWatchlist()
  if (list.some((item) => item.symbol === symbol)) return false
  list.push({ symbol, name })
  saveWatchlist(list)
  return true
}

/** Remove a stock from the watchlist by symbol. */
export function removeFromWatchlistStorage(symbol: string): boolean {
  const list = getWatchlist()
  const filtered = list.filter((item) => item.symbol !== symbol)
  if (filtered.length === list.length) return false
  saveWatchlist(filtered)
  return true
}

/** Move a stock up in the watchlist by one position. */
export function moveUp(items: WatchlistItem[], index: number): WatchlistItem[] {
  if (index <= 0 || index >= items.length) return items
  const result = [...items]
  ;[result[index - 1], result[index]] = [result[index], result[index - 1]]
  return result
}

/** Move a stock down in the watchlist by one position. */
export function moveDown(items: WatchlistItem[], index: number): WatchlistItem[] {
  if (index < 0 || index >= items.length - 1) return items
  const result = [...items]
  ;[result[index], result[index + 1]] = [result[index + 1], result[index]]
  return result
}

export { STORAGE_KEY }
