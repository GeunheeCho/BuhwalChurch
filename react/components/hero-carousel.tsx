"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative w-full" style={{ height: "800px", maxHeight: "50vw" }}>
      {/* Carousel placeholder */}
      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p className="text-2xl mb-2">캐러셀 이미지</p>
          <p className="text-lg">1920 x 800px</p>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white text-gray-700 rounded-full transition-colors"
        aria-label="이전 슬라이드"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white text-gray-700 rounded-full transition-colors"
        aria-label="다음 슬라이드"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
