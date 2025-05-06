"use client"
import Link from "next/link"
import type React from "react"

import styles from "@/styles/navbar.module.css"
import { useState, useRef, useEffect } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { Search, UserPlus, X, User, LogIn, LogOut } from "lucide-react"
const mockSearchResults = [
  { id: 1, title: "Home Page", url: "#home", category: "Page" },
  { id: 2, title: "About Us", url: "#about", category: "Page" },
  { id: 3, title: "Our Features", url: "#features", category: "Page" },
  { id: 4, title: "Contact Information", url: "#contact", category: "Page" },
  { id: 5, title: "Product Design", url: "#", category: "Service" },
  { id: 6, title: "Web Development", url: "#", category: "Service" },
  { id: 7, title: "Mobile App Development", url: "#", category: "Service" },
]

export default function Navbar() {
  const { data: session } = useSession()
 
  const [activeSection, setActiveSection] = useState<string>("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<typeof mockSearchResults>([])
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchContainerRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    setSearchTerm("")
    setSearchResults([])

    if (!isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)

    if (value.trim() === "") {
      setSearchResults([])
      return
    }

    const filteredResults = mockSearchResults.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
    setSearchResults(filteredResults)
  }

  const handleResultClick = (url: string) => {
    if (url.startsWith("#")) {
      const id = url.substring(1)
      scrollToSection(id)
    } else {
      window.location.href = url
    }
    setIsSearchOpen(false)
    setSearchTerm("")
    setSearchResults([])
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (isSearchOpen && searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscape)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isSearchOpen])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchTerm)
  }

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>
              Dude<span className={styles.logoAccent}>Shape</span>
            </span>
          </Link>
        </div>

        <nav className={styles.nav}>
          <button
            className={`${styles.navLink} ${activeSection === "home" ? styles.active : ""}`}
            onClick={() => scrollToSection("home")}
            aria-current={activeSection === "home" ? "page" : undefined}
          >
            <span className={styles.navLinkText}>Home</span>
          </button>

          <button
            className={`${styles.navLink} ${activeSection === "about" ? styles.active : ""}`}
            onClick={() => scrollToSection("about")}
            aria-current={activeSection === "about" ? "page" : undefined}
          >
            <span className={styles.navLinkText}>About</span>
          </button>

          <button
            className={`${styles.navLink} ${activeSection === "features" ? styles.active : ""}`}
            onClick={() => scrollToSection("features")}
            aria-current={activeSection === "features" ? "page" : undefined}
          >
            <span className={styles.navLinkText}>Features</span>
          </button>

          <button
            className={`${styles.navLink} ${activeSection === "contact" ? styles.active : ""}`}
            onClick={() => scrollToSection("contact")}
            aria-current={activeSection === "contact" ? "page" : undefined}
          >
            <span className={styles.navLinkText}>Contact</span>
          </button>
        </nav>

        <div className={styles.actions}>
          <div className={styles.searchWrapper} ref={searchContainerRef}>
            <button
              aria-label={isSearchOpen ? "Close search" : "Search"}
              className={`${styles.iconButton} ${isSearchOpen ? styles.iconButtonActive : ""}`}
              onClick={toggleSearch}
            >
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </button>

            {isSearchOpen && (
              <div className={styles.searchContainer}>
                <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
                  <Search className={styles.searchIcon} />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search..."
                    className={styles.searchInput}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    aria-label="Search"
                    aria-expanded={searchResults.length > 0}
                    aria-controls="search-results"
                  />
                </form>

                {searchResults.length > 0 ? (
                  <div className={styles.searchResults} id="search-results" role="listbox">
                    {searchResults.map((result) => (
                      <button
                        key={result.id}
                        className={styles.searchResultItem}
                        onClick={() => handleResultClick(result.url)}
                        role="option"
                      >
                        <span className={styles.resultTitle}>{result.title}</span>
                        <span className={styles.resultCategory}>{result.category}</span>
                      </button>
                    ))}
                  </div>
                ) : searchTerm.trim() !== "" ? (
                  <div className={styles.searchEmpty}>
                    <p>No results found for "{searchTerm}"</p>
                  </div>
                ) : null}
              </div>
            )}
          </div>

          {session ? (
  <>
    <Link href="/profile" className={styles.navLink} aria-label="Profile">
      <User className="h-5 w-5" />
    </Link>
    <button
      onClick={() => signOut({ callbackUrl: "/signin" })}
      className={styles.navLink}
      aria-label="Sign Out"
    >
      <LogOut className="h-5 w-5" />
    </button>
  </>
) : (
  <>
    <Link href="/signup" className={styles.navLink} aria-label="Sign In">
      <LogIn className="h-5 w-5" />
    </Link>
    
  </>
)}
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            <button
              className={`${styles.mobileNavLink} ${activeSection === "home" ? styles.mobileActive : ""}`}
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className={`${styles.mobileNavLink} ${activeSection === "about" ? styles.mobileActive : ""}`}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button
              className={`${styles.mobileNavLink} ${activeSection === "features" ? styles.mobileActive : ""}`}
              onClick={() => scrollToSection("features")}
            >
              Features
            </button>
            <button
              className={`${styles.mobileNavLink} ${activeSection === "contact" ? styles.mobileActive : ""}`}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
