"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const menuItems = [
  {
    title: "교회안내",
    hasDropdown: true,
    subItems: ["WELCOME", "부활교회는", "오시는길", "섬기는 분들"],
  },
  {
    title: "예배안내",
    hasDropdown: false,
  },
  {
    title: "부활교회 소식",
    hasDropdown: true,
    subItems: ["공지사항", "주보", "갤러리"],
  },
]

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo placeholder */}
        <div className="w-[180px] h-[60px] bg-gray-200 flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300">
          로고 이미지
        </div>

        {/* Navigation - centered */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-12">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 text-[19px] font-medium transition-colors ${
                  openDropdown === index ? "text-[#fcaa4c]" : "text-gray-800 hover:text-[#fcaa4c]"
                }`}
              >
                {item.title}
                {item.hasDropdown && (
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === index ? "rotate-180" : ""}`} />
                )}
              </button>

              {/* Dropdown */}
              {item.hasDropdown && openDropdown === index && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="bg-white shadow-lg border border-gray-100 min-w-[140px]">
                    {item.subItems?.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-4 py-2 text-[14px] text-gray-700 hover:text-[#fcaa4c] hover:bg-gray-50 text-center transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Spacer for balance */}
        <div className="hidden md:block w-[180px]" />

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
