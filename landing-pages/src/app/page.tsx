import Hero from "@/components/hero"
import TrustedCompanies from "@/components/trusted-companies"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import About from "@/components/about"
import FurnitureShowcase from "@/components/furniture-showcase"
import FurnitureFilter from "@/components/furniture-filter"
import Custom from "@/components/custom"
import News from "@/components/news"

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      
      <div id="home">
      <Navbar />
      <Hero />
      </div>

      <div id="about">
      <TrustedCompanies />
      <About />
      </div>

      <div id="features">
      <FurnitureShowcase />
      <FurnitureFilter />
      <Custom/>
      </div>

     
      <div id="contact">
      <News />
      <Footer />
      </div>
    </div>
  )
}

