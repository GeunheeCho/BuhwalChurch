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
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <BulletinContent />
      </main>
      <Footer />
    </>
  )
}