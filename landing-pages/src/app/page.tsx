import Hero from "@/components/hero"
import TrustedCompanies from "@/components/trusted-companies"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import About from "@/components/about"

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <About />
      <Footer />
    </div>
  )
}

