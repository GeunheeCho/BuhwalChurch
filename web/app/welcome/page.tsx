import Header from "@/components/header"
import Footer from "@/components/footer"
import WelcomeContent from "@/components/welcome-content"

export default function WelcomePage() {
    return (
      <main className="min-h-screen bg-white font-sans">
        <Header />
        <WelcomeContent />
        <Footer />
      </main>
    )
  }