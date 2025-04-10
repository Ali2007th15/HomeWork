import Image from "next/image"
import styles from "@/styles/trusted-companies.module.css"
import Airbnb from "@/images/airbnb.png"
import Uber from "@/images/uber.png"
import Visa from "@/images/visa.png"
import Master from "@/images/master.png"
import PayPal from "@/images/paypal.png"
import Stripe from "@/images/stripe.png"
export default function TrustedCompanies() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Trusted by 20,000+ companies</h2>

        <div className={styles.logoGrid}>
          <div className={styles.logoWrapper}>
            <Image src={Master}  alt="Mastercard" fill className="object-contain" />
          </div>
          <div className={styles.logoWrapper}>
            <Image src={Airbnb} alt="Airbnb" fill className="object-contain" />
          </div>
          <div className={styles.logoWrapper}>
            <Image src={Uber} alt="Uber" fill className="object-contain" />
          </div>
          <div className={styles.logoWrapper}>
            <Image src={PayPal}  alt="PayPal" fill className="object-contain" />
          </div>
          <div className={styles.logoWrapper}>
            <Image src={Visa}  alt="Visa" fill className="object-contain" />
          </div>
          <div className={styles.logoWrapper}>
            <Image src={Stripe}  alt="Stripe" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
