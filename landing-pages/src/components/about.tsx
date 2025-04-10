import Image from "next/image"
import { Shield, CheckCircle, Truck } from "lucide-react"
import styles from "@/styles/about-us-section.module.css"
import About from "@/images/about.png"

export default function AboutUsSection() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.imageContainer}>
          <Image
            src={About}
            alt="Modern living room with mint green sofa"
            fill
            className="object-cover"
          />
        </div>

        <div className={styles.contentContainer}>
          <div>
            <h2 className={styles.heading}>About Us</h2>
            <p className={styles.description}>
              All of our furniture uses the best materials and choices for our customers. All of our furniture uses the
              best materials.
            </p>
          </div>

          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <Shield className="h-6 w-6" />
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Best Quality</h3>
                <p className={styles.featureDescription}>All of our furniture uses the best materials and choices</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <CheckCircle className="h-6 w-6" />
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>100% Secure</h3>
                <p className={styles.featureDescription}>All of our furniture uses the best materials and choices</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <Truck className="h-6 w-6" />
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Free Shipping</h3>
                <p className={styles.featureDescription}>All of our furniture uses the best materials and choices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
