import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutContent from "@/components/about-buhwal-content"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}