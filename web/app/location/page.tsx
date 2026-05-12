import Header from "@/components/header"
import Footer from "@/components/footer"
import LocationContent from "@/components/location-content"

export const metadata = {
  title: "오시는 길 - 부활교회",
  description: "부활교회 오시는 길 안내",
}

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />
      <LocationContent />
      <Footer />
    </main>
  )
}