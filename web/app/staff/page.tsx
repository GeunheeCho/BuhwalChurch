import Header from "@/components/header"
import Footer from "@/components/footer"
import StaffContent from "@/components/staff-content"

export const metadata = {
  title: "섬기는 분들 - 부활교회",
  description: "부활교회 섬기는 분들을 소개합니다.",
}

export default function StaffPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        <StaffContent />
      </main>
      <Footer />
    </div>
  )
}