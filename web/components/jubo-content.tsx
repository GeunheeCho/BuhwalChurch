"use client"

import { useState } from "react"
import { Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"

// 샘플 데이터 - 나중에 실제 데이터로 교체
const bulletinData = [
  { id: 139, title: "5월 10일", date: "2일 전", views: 3 },
  { id: 138, title: "5월 3일", date: "1주 전", views: 6 },
  { id: 137, title: "4월 26일", date: "2주 전", views: 2 },
  { id: 136, title: "4월 19일", date: "3주 전", views: 3 },
  { id: 135, title: "4월 12일", date: "3주 전", views: 2 },
  { id: 134, title: "3월 29일", date: "1달 전", views: 7 },
  { id: 133, title: "3월 22일", date: "1달 전", views: 12 },
  { id: 132, title: "3월 15일", date: "2달 전", views: 11 },
]

export default function BulletinContent() {
  const [searchType, setSearchType] = useState("전체")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* 검색 영역 */}
        <div className="flex justify-end items-center gap-2 mb-6">
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="h-10 px-3 border border-gray-300 text-[14px] focus:outline-none focus:border-gray-400"
          >
            <option value="전체">전체</option>
            <option value="제목">제목</option>
            <option value="내용">내용</option>
          </select>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-[200px] sm:w-[300px] px-3 pr-10 border border-gray-300 text-[14px] focus:outline-none focus:border-gray-400"
              placeholder=""
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 테이블 헤더 */}
        <div className="border-t-2 border-gray-800">
          <div className="grid grid-cols-[60px_1fr_100px_60px] sm:grid-cols-[80px_1fr_120px_80px] items-center py-3 border-b border-gray-300 bg-white">
            <span className="text-center text-[14px] sm:text-[15px] font-medium text-gray-700">NO</span>
            <span className="text-center text-[14px] sm:text-[15px] font-medium text-gray-700">제목</span>
            <span className="text-center text-[14px] sm:text-[15px] font-medium text-gray-700">작성일</span>
            <span className="text-center text-[14px] sm:text-[15px] font-medium text-gray-700">조회수</span>
          </div>

          {/* 테이블 본문 */}
          {bulletinData.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[60px_1fr_100px_60px] sm:grid-cols-[80px_1fr_120px_80px] items-center py-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <span className="text-center text-[13px] sm:text-[14px] text-gray-500">{item.id}</span>
              <span className="text-[13px] sm:text-[14px] text-gray-800 pl-4">{item.title}</span>
              <span className="text-center text-[13px] sm:text-[14px] text-gray-500">{item.date}</span>
              <span className="text-center text-[13px] sm:text-[14px] text-[#fcaa4c]">{item.views}</span>
            </div>
          ))}
        </div>

        {/* 페이지네이션 + 새 글 버튼 */}
        <div className="flex justify-center items-center mt-8 relative">
          {/* 페이지네이션 */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage(1)}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
              aria-label="첫 페이지"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
              aria-label="이전 페이지"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center text-[14px] ${
                  currentPage === page
                    ? "text-gray-800 font-medium"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
              aria-label="다음 페이지"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
              aria-label="마지막 페이지"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>

          {/* 새 글 버튼 */}
          <button className="absolute right-0 px-6 py-2 border border-gray-300 text-[14px] text-gray-700 hover:bg-gray-50 transition-colors">
            새 글
          </button>
        </div>
      </div>
    </section>
  )
}