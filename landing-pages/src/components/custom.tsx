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
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
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
