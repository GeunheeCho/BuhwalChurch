import { Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          {/* Logo */}
          <h2 className="text-[30px] font-bold text-gray-800">
            부활교회
          </h2>

          {/* Footer Nav */}
          <nav className="flex items-center gap-6">
            <a href="#" className="text-[14px] text-gray-600 hover:text-[#fcaa4c] transition-colors">
              교회안내
            </a>
            <a href="#" className="text-[14px] text-gray-600 hover:text-[#fcaa4c] transition-colors">
              예배안내
            </a>
            <a href="#" className="text-[14px] text-gray-600 hover:text-[#fcaa4c] transition-colors">
              오시는길
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="text-gray-500 hover:text-[#fcaa4c] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tzWuNwDi5dvvRSpvA7mMH8u1gPpPg8.png"
                alt="네이버 블로그"
                width={20}
                height={20}
                className="rounded"
              />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#fcaa4c] transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Info Section */}
        <div className="text-[13px] text-gray-500 space-y-1">
          <p>
            기독교대한감리회 의정부 부활교회 &nbsp; 담임목사: 리규성
          </p>
          <p>
            주소: 경기도 의정부시 추동로 92번길 29 전화번호: 031-877-4333
          </p>
          <p>
            <span className="text-gray-800 font-medium">온라인 헌금계좌:</span> 새마을금고 9002-2065-9938-1 | 신한은행 100-029-815627 예금주: 부활교회
          </p>
        </div>

        {/* Copyright */}
        <p className="text-[12px] text-gray-400 mt-4">
          ©BUHWALCHURCH ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  )
}
