'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// Window 인터페이스 확장으로 TypeScript 컴파일 에러 방지
declare global {
  interface Window {
    wcs?: any
    wcs_add?: any
    wcs_do?: () => void
  }
}

function AnalyticsTrigger() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 1. 네이버 애널리틱스 설정 객체 초기화
      if (!window.wcs_add) {
        window.wcs_add = {}
      }
      window.wcs_add['wa'] = '75b36ef58664ec' // 사용자 고유 ID

      // 2. wcslog.js가 로드되어 wcs 객체가 존재한다면 페이지뷰 전송
      if (window.wcs && typeof window.wcs_do === 'function') {
        window.wcs_do()
      }
    }
  }, [pathname, searchParams]) // 페이지 경로 또는 쿼리 파라미터가 변경될 때마다 실행

  return null
}

export default function NaverAnalytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTrigger />
    </Suspense>
  )
}
