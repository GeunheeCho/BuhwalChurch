"use client"

import { useState } from "react"
import { Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export interface PraiseItem {
  id: number
  title: string
  thumbnailUrl: string
  isFolder: boolean
  rawKey: string // URL 인코딩 등에 사용
}

interface PraiseContentProps {
  initialPraiseData?: PraiseItem[]
}

export default function PraiseContent({ initialPraiseData = [] }: PraiseContentProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  // 검색어 필터링 (제목 검색)
  const filteredItems = initialPraiseData.filter((item) => {
    if (!searchQuery) return true
    return item.title.toLowerCase().includes(searchQuery.toLowerCase())
  })

  // 페이지네이션 설정: 한 행에 4개씩 * 3줄 = 12개
  const itemsPerPage = 12
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1
  
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* 검색 영역 */}
        <div className="flex justify-end items-center gap-2 mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1) // 검색 시 1페이지로 리셋
              }}
              className="h-10 w-[240px] sm:w-[320px] px-4 pr-10 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-amber-500 transition-colors"
              placeholder="찬양 제목을 입력하세요"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-500 transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 갤러리 그리드: 1행에 4개씩 배치 (데스크톱 기준 lg:grid-cols-4) */}
        {paginatedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {paginatedItems.map((item) => (
              <Link
                key={item.id}
                href={`/praise/${encodeURIComponent(item.title)}`}
                className="group flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md hover:border-amber-400 transition-all duration-300"
              >
                {/* 썸네일 영역 */}
                <div className="relative aspect-[4/3] w-full bg-gray-50 overflow-hidden">
                  <Image
                    src={item.thumbnailUrl}
                    alt={item.title}
                    fill
                    sizes="(max-w-640px) 100vw, (max-w-768px) 50vw, (max-w-1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.isFolder && (
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded-full font-medium">
                      Multi
                    </div>
                  )}
                </div>
                {/* 텍스트 영역 */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h3 className="text-[16px] font-bold text-gray-800 line-clamp-2 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center border-t border-b border-gray-100">
            <p className="text-gray-400 text-[15px]">등록된 찬양 게시글이 없습니다.</p>
          </div>
        )}

        {/* 페이지네이션 */}
        {filteredItems.length > 0 && (
          <div className="flex justify-center items-center mt-12">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-amber-500 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                aria-label="첫 페이지"
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-amber-500 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                aria-label="이전 페이지"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded text-[14px] font-medium transition-colors ${
                    currentPage === page
                      ? "text-[#fcaa4c] bg-amber-50/50 font-bold"
                      : "text-gray-500 hover:text-amber-500"
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-amber-500 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                aria-label="다음 페이지"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-amber-500 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                aria-label="마지막 페이지"
              >
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
