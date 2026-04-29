import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import UpcomingEvents from "@/components/upcoming-events"
import SocialLinks from "@/components/social-links"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <UpcomingEvents />
      <SocialLinks />
      <Footer />
    </main>
  )
}
