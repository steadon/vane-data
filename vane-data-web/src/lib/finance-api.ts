/**
 * Finance API shared utilities
 * Common helper functions for upstream financial data APIs
 * (Tencent, Sina, EastMoney)
 */

const REQUEST_TIMEOUT = 10000; // 10 seconds
const MAX_RETRIES = 2;
const RETRY_DELAY = 500; // ms

// ---- Shared HTTP headers ----
const DEFAULT_HEADERS: Record<string, string> = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
  Referer: "https://finance.qq.com/",
};

// ---- Upstream API URLs ----
export const TENCENT_KLINE_URL = "http://web.ifzq.gtimg.cn/appstock/app/fqkline/get";
export const TENCENT_QUOTE_URL = "http://qt.gtimg.cn/q=";
export const SINA_QUOTE_URL = "http://hq.sinajs.cn/list=";
export const EASTMONEY_SECTOR_URL = "http://push2.eastmoney.com/api/qt/clist/get";
export const EASTMONEY_NEWS_URL = "https://np-listapi.eastmoney.com/comm/wap/getListInfo";

// ---- Unified response type ----
export interface ApiResponse<T = unknown> {
  code: number;
  msg: string;
  data: T;
}

// ---- Symbol parsing helpers ----

/**
 * Parse stock symbol into market prefix and code.
 * e.g. "sh600519" → ["sh", "600519"]
 *       "600519"   → ["sh", "600519"]  (6xx defaults to SH)
 *       "000001"   → ["sz", "000001"]  (0/3xx defaults to SZ)
 */
export function parseSymbol(symbol: string): [string, string] {
  const s = symbol.trim().toLowerCase();
  if (s.startsWith("sh") || s.startsWith("sz")) {
    return [s.slice(0, 2), s.slice(2)];
  }
  const code = s;
  if (code.startsWith("6")) {
    return ["sh", code];
  }
  return ["sz", code];
}

/**
 * Convert EastMoney bare code to standard symbol.
 * e.g. "600519" → "sh600519", "000001" → "sz000001"
 */
export function eastCodeToSymbol(code: string): string {
  const c = code.trim();
  if (c.startsWith("0") || c.startsWith("3")) {
    return `sz${c}`;
  }
  return `sh${c}`;
}

// ---- Safe fetch with retry & timeout ----

export async function safeFetch(
  url: string,
  options: RequestInit & { params?: Record<string, string> } = {}
): Promise<Response | null> {
  const { params, headers: customHeaders, ...restOptions } = options;
  const headers = { ...DEFAULT_HEADERS, ...customHeaders };

  // Build URL with query params
  let fullUrl = url;
  if (params && Object.keys(params).length > 0) {
    const qs = new URLSearchParams(params).toString();
    fullUrl = `${url}?${qs}`;
  }

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

      const resp = await fetch(fullUrl, {
        ...restOptions,
        headers,
        signal: controller.signal,
        cache: "no-store",
      });

      clearTimeout(timeoutId);

      if (resp.ok) {
        return resp;
      }
      console.warn(
        `[finance-api] Request failed status=${resp.status} url=${fullUrl} attempt=${attempt}`
      );
    } catch (err) {
      console.warn(
        `[finance-api] Request error url=${fullUrl} attempt=${attempt} err=${err instanceof Error ? err.message : String(err)}`
      );
    }
    if (attempt < MAX_RETRIES) {
      await new Promise((r) => setTimeout(r, RETRY_DELAY * attempt));
    }
  }
  return null;
}

/**
 * Fetch text from a URL, handling GBK-encoded Chinese finance APIs.
 *
 * Many Chinese finance APIs (Tencent qt.gtimg.cn, Sina hq.sinajs.cn)
 * return GBK-encoded responses. `fetch().text()` in Node.js Edge runtime
 * may not properly decode GBK when Content-Type doesn't declare it, or
 * even when it does (the Edge runtime TextDecoder may lack GBK support).
 *
 * Strategy:
 * 1. Read raw ArrayBuffer
 * 2. Try TextDecoder with charset from Content-Type
 * 3. Fallback: try UTF-8 first (most common), then GBK
 * 4. Final fallback: Latin-1 (never fails, preserves bytes)
 */
export async function safeFetchText(
  url: string,
  options: RequestInit & { params?: Record<string, string>; forceGbk?: boolean } = {}
): Promise<string | null> {
  const resp = await safeFetch(url, options);
  if (!resp) return null;

  try {
    const buffer = await resp.arrayBuffer();

    // 1. Detect charset from Content-Type header
    const contentType = resp.headers.get("content-type") || "";
    let declaredCharset = "";
    const charsetMatch = contentType.match(/charset=([A-Za-z0-9_-]+)/i);
    if (charsetMatch) {
      declaredCharset = charsetMatch[1].trim().toLowerCase();
    }

    // 2. Determine candidate charsets to try
    const candidates: string[] = [];
    if (declaredCharset) {
      candidates.push(declaredCharset);
    }
    // Always try UTF-8 first for JSON endpoints (EastMoney, Tencent K-line HTTPS redirect)
    candidates.push("utf-8");
    // GBK for Chinese finance text endpoints
    if (declaredCharset === "gbk" || declaredCharset === "gb2312" || declaredCharset === "gb18030" || options.forceGbk) {
      // Put GBK first if declared
      if (candidates[0] !== declaredCharset) {
        candidates.unshift("gbk");
      }
    } else {
      candidates.push("gbk");
    }
    candidates.push("gb18030"); // GBK superset
    candidates.push("iso-8859-1"); // Latin-1 never fails

    // 3. Try each charset
    for (const charset of candidates) {
      try {
        const decoder = new TextDecoder(charset, { fatal: false });
        const text = decoder.decode(buffer);
        // Validate: if text contains Chinese characters, it's probably correct
        // Chinese chars are in range \u4e00-\u9fff
        if (/[\u4e00-\u9fff]/.test(text) || charset === "utf-8" && declaredCharset !== "gbk") {
          return text;
        }
        // If no Chinese found and we have more candidates, try next
        if (candidates.indexOf(charset) < candidates.length - 1) {
          continue;
        }
        return text;
      } catch {
        // TextDecoder doesn't support this charset, try next
        continue;
      }
    }

    // 4. Final fallback: use UTF-8
    return new TextDecoder("utf-8", { fatal: false }).decode(buffer);
  } catch (err) {
    console.warn(`[finance-api] Failed to decode response: ${err instanceof Error ? err.message : String(err)}`);
    return null;
  }
}

/**
 * Fetch JSON from a URL. Handles encoding properly for Chinese APIs.
 */
export async function safeFetchJSON<T = unknown>(
  url: string,
  options: RequestInit & { params?: Record<string, string> } = {}
): Promise<T | null> {
  const text = await safeFetchText(url, options);
  if (!text) return null;

  try {
    return JSON.parse(text) as T;
  } catch (err) {
    console.warn(`[finance-api] Failed to parse JSON: ${err instanceof Error ? err.message : String(err)}`);
    return null;
  }
}

// ---- EastMoney common parameter builder ----

export function buildEastMoneyParams(overrides: Record<string, string>): Record<string, string> {
  return {
    ut: "7eea3edcaed734bea9telecast",
    np: "1",
    fltt: "2",
    invt: "2",
    _: String(Date.now()),
    ...overrides,
  };
}
