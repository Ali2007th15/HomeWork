import Link from "next/link"
import { Search, Menu } from "lucide-react"
import styles from "@/styles/navbar.module.css"

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">DudeShape</Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/features" className={styles.navLink}>
            Features
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
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
