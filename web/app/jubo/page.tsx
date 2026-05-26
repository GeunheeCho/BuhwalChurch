import { Metadata } from "next"
import BulletinContent from "@/components/jubo-content"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "온라인 주보 - 부활교회",
  description: "부활교회 온라인 주보",
}

export default function BulletinPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1 bg-white">
        <BulletinContent />
      </main>
      <Footer />
    </div>
  )
}