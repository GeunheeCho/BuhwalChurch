import Header from "@/components/header"
import Footer from "@/components/footer"
import WorshipContent from "@/components/worship-content"

export default function WorshipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <WorshipContent />
      </main>
      <Footer />
    </div>
  )
}