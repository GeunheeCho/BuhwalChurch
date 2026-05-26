"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

type SubMenuItem = {
  label: string
  href: string
}

type MenuItem =
  | {
      title: string
      hasDropdown: true
      subItems: SubMenuItem[]
    }
  | {
      title: string
      hasDropdown: false
      href: string
    }

const menuItems: MenuItem[] = [
  {
    title: "교회안내",
    hasDropdown: true,
    subItems: [
      { label: "WELCOME", href: "/welcome" },
      { label: "부활교회는", href: "/aboutBuhwal" },
      { label: "오시는길", href: "/location" },
      { label: "섬기는 분들", href: "/staff" },
    ],
  },
  {
    title: "예배안내",
    hasDropdown: false,
    href: "/worship",
  },
  {
    title: "부활교회 소식",
    hasDropdown: true,
    subItems: [
      { label: "온라인 주보", href: "/jubo" },
      { label: "부활 갤러리", href: "" },
      { label: "부활교회 찬양", href: "" },
    ],
  },
]

function isPathActive(pathname: string, href: string) {
  if (!href) return false
  return pathname === href || pathname.startsWith(`${href}/`)
}

function isMenuActive(pathname: string, item: MenuItem) {
  if (!item.hasDropdown && "href" in item) {
    return isPathActive(pathname, item.href)
  }
  if (item.hasDropdown) {
    return item.subItems.some((sub) => isPathActive(pathname, sub.href))
  }
  return false
}

const activeLinkClass = "text-[#fcaa4c]"
const inactiveLinkClass = "text-gray-800 hover:text-[#fcaa4c]"

export default function Header() {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="relative block w-[180px] h-[60px] shrink-0">
          <Image
            src="/Logo.png"
            alt=""
            fill
            sizes="180px"
            priority
            className="object-contain"
          />
        </Link>

        {/* Navigation - centered */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-12">
          {menuItems.map((item, index) => {
            const isActive = isMenuActive(pathname, item)
            const isOpen = openDropdown === index
            const parentClassName = `flex items-center gap-1 text-[19px] font-medium transition-colors ${
              isActive || isOpen ? activeLinkClass : inactiveLinkClass
            }`

            return (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {!item.hasDropdown ? (
                  <Link href={item.href} className={parentClassName}>
                    {item.title}
                  </Link>
                ) : (
                  <button type="button" className={parentClassName}>
                    {item.title}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                )}

                {/* Dropdown */}
                {item.hasDropdown && isOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    <div className="bg-white shadow-lg border border-gray-100 min-w-[140px]">
                      {item.subItems.map((subItem) => {
                        const subActive = isPathActive(pathname, subItem.href)
                        const className = `block w-full px-4 py-2 text-[14px] text-center transition-colors ${
                          subActive
                            ? "text-[#fcaa4c] bg-gray-50"
                            : "text-gray-700 hover:text-[#fcaa4c] hover:bg-gray-50"
                        }`

                        if (!subItem.href) {
                          return (
                            <button key={subItem.label} type="button" className={className}>
                              {subItem.label}
                            </button>
                          )
                        }

                        return (
                          <Link key={subItem.label} href={subItem.href} className={className}>
                            {subItem.label}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
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
