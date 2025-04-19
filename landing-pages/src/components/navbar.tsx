"use client"
import Link from "next/link"
import { Search, Menu } from "lucide-react"
import styles from "@/styles/navbar.module.css"
import { useState } from "react"

export default function Navbar() {

  const [activeSection, setActiveSection] = useState<string>("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    if (isMenuOpen) {
      toggleMenu()
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto"
  }
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">DudeShape</Link>
        </div>

        <nav className={styles.nav}>
        <button
            className={`${styles.navLink} ${activeSection === "home" ? styles.active : ""}`}
            onClick={() => scrollToSection("home")}
            aria-current={activeSection === "home" ? "page" : undefined}
          >
            Home
          </button>

          <button
            className={`${styles.navLink} ${activeSection === "about" ? styles.active : ""}`}
            onClick={() => scrollToSection("about")}
            aria-current={activeSection === "about" ? "page" : undefined}
          >
            About
          </button>


          <button
            className={`${styles.navLink} ${activeSection === "features" ? styles.active : ""}`}
            onClick={() => scrollToSection("features")}
            aria-current={activeSection === "features" ? "page" : undefined}
          >
            Features
          </button>

          <button
            className={`${styles.navLink} ${activeSection === "contact" ? styles.active : ""}`}
            onClick={() => scrollToSection("contact")}
            aria-current={activeSection === "contact" ? "page" : undefined}
          >
            Contact
          </button>
        </nav>

        <div className={styles.actions}>
          <button aria-label="Search" className={styles.iconButton}>
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Menu" className={`${styles.iconButton} ${styles.menuButton}`}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
