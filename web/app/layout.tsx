import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import NaverAnalytics from '@/components/naver-analytics'
import './globals.css'

export const metadata: Metadata = {
  title: '부활교회',
  description: '기독교대한감리회 의정부 부활교회',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 네이버 애널리틱스 기본 스크립트 파일 로드 */}
        <Script 
          src="https://wcs.pstatic.net/wcslog.js" 
          strategy="afterInteractive" 
        />
      </head>
      <body className="font-sans antialiased">
        <NaverAnalytics />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

