"use client"
import { useState } from "react"
import Image from "next/image"
import styles from "@/styles/hero.module.css"
import chair from "@/images/chair.png"
import { X, ArrowRight, CheckCircle2 } from "lucide-react"

export default function Hero() {
  const [isInfoOpen, setIsInfoOpen] = useState(false)

  const openInfo = () => {
    setIsInfoOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeInfo = () => {
    setIsInfoOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src={chair || "/placeholder.svg"}
                alt="Modern white armchair"
                fill
                priority
                className={styles.heroImage}
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

              <button onClick={openInfo} className={styles.button}>
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>

      {isInfoOpen && (
        <div className={styles.infoModal}>
          <div className={styles.infoModalContent}>
            <div className={styles.infoModalHeader}>
              <h2 className={styles.infoModalTitle}>About Our Furniture</h2>
              <button className={styles.closeButton} onClick={closeInfo}>
                <X size={24} />
              </button>
            </div>

            <div className={styles.infoModalBody}>
              <div className={styles.infoSection}>
                <h3 className={styles.infoSectionTitle}>Our Story</h3>
                <p className={styles.infoSectionText}>
                  Founded in 2010, our furniture company began with a simple mission: to create beautiful, functional,
                  and sustainable furniture that enhances people's lives. What started as a small workshop has grown
                  into a renowned brand that serves customers worldwide while maintaining our commitment to quality
                  craftsmanship and innovative design.
                </p>
                <p className={styles.infoSectionText}>
                  Our team of skilled artisans and designers work collaboratively to blend traditional techniques with
                  modern aesthetics, resulting in pieces that are both timeless and contemporary. We believe that
                  furniture should not only look good but also stand the test of time, which is why we meticulously
                  select materials and pay attention to every detail in our production process.
                </p>
              </div>

              <div className={styles.infoGrid}>
                <div className={styles.infoImageContainer}>
                  <Image
                    src={chair || "/placeholder.svg"}
                    alt="Our furniture craftsmanship"
                    fill
                    className={styles.infoImage}
                  />
                </div>

                <div className={styles.infoFeatures}>
                  <h3 className={styles.infoSectionTitle}>Why Choose Us</h3>

                  <ul className={styles.featuresList}>
                    <li className={styles.featureItem}>
                      <CheckCircle2 className={styles.featureIcon} />
                      <div>
                        <h4 className={styles.featureTitle}>Premium Materials</h4>
                        <p className={styles.featureText}>
                          We source only the highest quality materials from sustainable suppliers.
                        </p>
                      </div>
                    </li>

                    <li className={styles.featureItem}>
                      <CheckCircle2 className={styles.featureIcon} />
                      <div>
                        <h4 className={styles.featureTitle}>Expert Craftsmanship</h4>
                        <p className={styles.featureText}>
                          Our skilled artisans bring decades of experience to every piece they create.
                        </p>
                      </div>
                    </li>

                    <li className={styles.featureItem}>
                      <CheckCircle2 className={styles.featureIcon} />
                      <div>
                        <h4 className={styles.featureTitle}>Innovative Design</h4>
                        <p className={styles.featureText}>
                          Our designs blend functionality with aesthetic appeal for modern living.
                        </p>
                      </div>
                    </li>

                    <li className={styles.featureItem}>
                      <CheckCircle2 className={styles.featureIcon} />
                      <div>
                        <h4 className={styles.featureTitle}>Sustainability Focus</h4>
                        <p className={styles.featureText}>
                          We're committed to environmentally responsible practices throughout our process.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.infoSection}>
                <h3 className={styles.infoSectionTitle}>Our Process</h3>
                <div className={styles.processSteps}>
                  <div className={styles.processStep}>
                    <div className={styles.processStepNumber}>1</div>
                    <h4 className={styles.processStepTitle}>Design</h4>
                    <p className={styles.processStepText}>
                      Our designers create concepts that balance form and function.
                    </p>
                  </div>

                  <div className={styles.processStep}>
                    <div className={styles.processStepNumber}>2</div>
                    <h4 className={styles.processStepTitle}>Material Selection</h4>
                    <p className={styles.processStepText}>
                      We carefully source sustainable materials of the highest quality.
                    </p>
                  </div>

                  <div className={styles.processStep}>
                    <div className={styles.processStepNumber}>3</div>
                    <h4 className={styles.processStepTitle}>Crafting</h4>
                    <p className={styles.processStepText}>
                      Skilled artisans handcraft each piece with meticulous attention to detail.
                    </p>
                  </div>

                  <div className={styles.processStep}>
                    <div className={styles.processStepNumber}>4</div>
                    <h4 className={styles.processStepTitle}>Quality Control</h4>
                    <p className={styles.processStepText}>
                      Rigorous testing ensures each piece meets our exacting standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.ctaSection}>
                <h3 className={styles.ctaTitle}>Ready to transform your space?</h3>
                <p className={styles.ctaText}>Browse our collection and find the perfect pieces for your home.</p>
                <button className={styles.ctaButton} onClick={closeInfo}>
                  View Collection <ArrowRight className={styles.ctaButtonIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
