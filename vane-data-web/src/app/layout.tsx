import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// CJK font for Chinese characters — system fonts with broad CJK coverage
const cjkFontStack =
  '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", "WenQuanYi Micro Hei", sans-serif';

// Inline script for FOUC prevention — runs in <head> before React hydrates, no React warning
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme")||"system";var d=document.documentElement;var r=t==="system"?(window.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"):t;d.classList.remove("light","dark");d.classList.add(r);d.style.colorScheme=r}catch(e){}})()`;

export const metadata: Metadata = {
  title: "Vane Data - A股金融数据聚合服务",
  description: "A股金融数据聚合服务，提供实时行情、K线图表、涨跌停股票池、板块分析等功能。",
  keywords: ["金融", "股票", "A股", "K线", "行情", "板块", "Vane Data"],
  authors: [{ name: "Z.ai Team" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Vane Data",
    description: "A股金融数据聚合服务，提供实时行情、K线图表、涨跌停股票池、板块分析等功能。",
    siteName: "Vane Data",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vane Data",
    description: "A股金融数据聚合服务",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} suppressHydrationWarning />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: `var(--font-geist-sans), ${cjkFontStack}` }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
