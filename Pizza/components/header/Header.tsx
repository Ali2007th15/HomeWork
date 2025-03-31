"use client"
import { useState } from "react"
import styles from "./Header.module.css"
import Link from "next/link"


function Header() {
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
    <header className={styles.header_container}>
      <div className={styles.header}>
        
        <Link href="/" aria-label="Pizza Shop Home">
          <span className={styles.header_logo}>pizzashop</span>
        </Link>

        
        <nav className={styles.header_navbar} aria-label="Main navigation">
          <button
            className={`${styles.header_navItem} ${activeSection === "home" ? styles.active : ""}`}
            onClick={() => scrollToSection("home")}
            aria-current={activeSection === "home" ? "page" : undefined}
          >
            Home
          </button>
          <button
            className={`${styles.header_navItem} ${activeSection === "menu" ? styles.active : ""}`}
            onClick={() => scrollToSection("menu")}
            aria-current={activeSection === "menu" ? "page" : undefined}
          >
            Menu
          </button>
          <button
            className={`${styles.header_navItem} ${activeSection === "events" ? styles.active : ""}`}
            onClick={() => scrollToSection("events")}
            aria-current={activeSection === "events" ? "page" : undefined}
          >
            Events
          </button>
          <button
            className={`${styles.header_navItem} ${activeSection === "about us" ? styles.active : ""}`}
            onClick={() => scrollToSection("about us")}
            aria-current={activeSection === "about us" ? "page" : undefined}
          >
            About us
          </button>
        </nav>

        
        <div className={styles.header_actions}>
          <button className={styles.header_loginButton} aria-label="Log in">
            Log in
          </button>
          <button className={styles.header_cartButton} aria-label="Cart">
            <img src="/icons/cart.png" alt="cart" width={25} height={25}/>
          </button>
        </div>

       
      </div>
    </header>
  )
}

export default Header

