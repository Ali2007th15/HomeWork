import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/hero.module.css"
import chair from "@/images/chair.png"
export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image
              src={chair}
              alt="Modern white armchair"
              
              fill
              priority
              />
            </div>
          </div>

          <div className={styles.contentContainer}>
            <div className={styles.content}>
              <h1 className={styles.title}>We Help You Make Modern Furniture</h1>

              <p className={styles.description}>
                All of our furniture uses the best materials and choices for our customers. We ensure quality
                craftsmanship in every piece we create.
              </p>

              <Link href="/about" className={styles.button}>
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
