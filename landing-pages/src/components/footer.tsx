import Link from "next/link"
import styles from "@/styles/footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h3 className={styles.heading}>DudeShape</h3>
            <p className={styles.text}>Modern furniture for modern living.</p>
          </div>
          <div>
            <h3 className={styles.heading}>Links</h3>
            <ul className={styles.linksList}>
              <li>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/features" className={styles.link}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.heading}>Help</h3>
            <ul className={styles.linksList}>
              <li>
                <Link href="#" className={styles.link}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.link}>
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.link}>
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.heading}>Contact</h3>
            <address className={styles.address}>
              <p>123 Furniture St.</p>
              <p>Design City, DC 12345</p>
              <p className="mt-2">info@dudeshape.com</p>
            </address>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} DudeShape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
