'use client'

import * as React from 'react'

type Theme = 'dark' | 'light' | 'system'

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'dark' | 'light'
}

const ThemeContext = React.createContext<ThemeProviderState>({
  theme: 'system',
  setTheme: () => {},
  resolvedTheme: 'light',
})

function getSystemTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system'
  try {
    return (localStorage.getItem('theme') as Theme) || 'system'
  } catch {
    return 'system'
  }
}

function applyThemeToDOM(theme: Theme): 'dark' | 'light' {
  const resolved = theme === 'system' ? getSystemTheme() : theme
  if (typeof window === 'undefined') return resolved
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(resolved)
  root.style.colorScheme = resolved
  return resolved
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  enableSystem = true,
  disableTransitionOnChange = false,
}: {
  children: React.ReactNode
  defaultTheme?: Theme
  enableSystem?: boolean
  attribute?: string
  disableTransitionOnChange?: boolean
}) {
  const [theme, setThemeState] = React.useState<Theme>('system')
  const [resolvedTheme, setResolvedTheme] = React.useState<'dark' | 'light'>('light')
  const [mounted, setMounted] = React.useState(false)

  // Only read from localStorage/DOM after mount (client-only)
  React.useEffect(() => {
    const stored = getStoredTheme()
    setThemeState(stored)
    const resolved = applyThemeToDOM(stored)
    setResolvedTheme(resolved)
    setMounted(true)
  }, [])

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    try {
      localStorage.setItem('theme', newTheme)
    } catch {}
  }, [])

  // Apply theme changes after mount
  React.useEffect(() => {
    if (!mounted) return

    if (disableTransitionOnChange) {
      const style = document.createElement('style')
      style.appendChild(
        document.createTextNode(
          '*{transition:none!important;-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important}'
        )
      )
      document.head.appendChild(style)
      window.getComputedStyle(document.body)
      setTimeout(() => document.head.removeChild(style), 1)
    }

    const resolved = applyThemeToDOM(theme)
    setResolvedTheme(resolved)
  }, [theme, mounted, disableTransitionOnChange])

  // Listen for system theme changes
  React.useEffect(() => {
    if (!enableSystem || !mounted) return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      if (theme === 'system') {
        const sys = getSystemTheme()
        applyThemeToDOM('system')
        setResolvedTheme(sys)
      }
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme, enableSystem, mounted])

  // Sync theme across tabs
  React.useEffect(() => {
    if (!mounted) return
    const handler = (e: StorageEvent) => {
      if (e.key === 'theme' && e.newValue) {
        setThemeState(e.newValue as Theme)
      }
    }
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [mounted])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
