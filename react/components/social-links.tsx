import { Instagram } from "lucide-react"

export default function SocialLinks() {
  return (
    <section className="py-8 bg-white">
      <div className="flex items-center justify-center gap-8">
        {/* Instagram */}
        <a
          href="#"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
        >
          <Instagram className="w-6 h-6" />
        </a>

        {/* Naver Blog */}
        <a
          href="#"
          className="w-12 h-12 rounded-md bg-[#03c75a] flex items-center justify-center text-white font-bold text-sm hover:opacity-80 transition-opacity"
        >
          blog
        </a>
      </div>
    </section>
  )
}
