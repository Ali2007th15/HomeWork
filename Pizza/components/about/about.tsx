import Image from "next/image"
import styles from "./about.module.css"

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div className={styles.headerSection}>
            <h1 className={styles.heading}>About us</h1>

            <p className={styles.paragraph}>
              In just a couple of years, we have opened 6 outlets in different cities: Kazan, Chelyabinsk, Ufa, Samara,
              Izhevsk, and in the future we plan to develop the network in other major cities of Russia.
            </p>
          </div>

          <div className={styles.pizzaRow}>
            <div className={styles.pizzaImage1}>
              <Image src="/images/pizza-1.png" alt="Pizza 1" width={176} height={176} />
            </div>
            <div className={styles.pizzaImage2}>
              <Image src="/images/italian.png" alt="Pizza 2" width={176} height={176} />
            </div>
            <div className={styles.pizzaImage3}>
              <Image src="/images/venecia.png" alt="Pizza 3" width={176} height={176} />
            </div>
            <div className={styles.pizzaImage4}>
              <Image src="/images/pizza-2.png" alt="Pizza 4" width={176} height={176} />
            </div>
          </div>

          <div>
            <p className={styles.paragraph}>
              The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees, smoothly performing
              work in order to receive / prepare / form / deliver customer orders on time.
            </p>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.mainPizzaImage}>
            <Image src="/images/main-pizza.png" alt="Delicious pizza with toppings" fill priority />
          </div>
        </div>
      </div>
    </div>
  )
}

