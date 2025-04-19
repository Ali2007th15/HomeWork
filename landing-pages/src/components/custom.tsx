import Image from "next/image"
import styles from "@/styles/custom.module.css"
import custom from "@/images/custom.png"
import person from "@/images/person.png"

export default function Custom() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
        
            <div className={styles.imageWrapper}>
              <Image
                src={custom}
                
                alt="Wooden dresser with decorative items"
                className={styles.image}
                priority
              />
            </div>
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>Our customers are verry importan to us</h2>
            <p className={styles.paragraph}>
              All of our furniture uses the best materials and choices for our customers. All of our furniture uses the
              best materials and choices for our customers.
            </p>

            <div className={styles.testimonial}>
              <div className={styles.avatar}>
                <Image
                  src={person}
                  width={48}
                  height={48}
                  alt="Customer avatar"
                  className={styles.avatarImage}
                />
              </div>
              <div className={styles.testimonialContent}>
                <h3 className={styles.customerName}>Mh Jibon</h3>
                <div className={styles.rating}>
                  <svg
                    className={styles.star}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#ffb624"
                    stroke="#ffb624"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className={styles.ratingValue}>4.8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
