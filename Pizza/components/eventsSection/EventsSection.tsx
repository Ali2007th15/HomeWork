import Image from "next/image"
import styles from "./EventsSection.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.eventsGrid}>
        <div className={styles.card}>
          <div className={styles.cardContent} style={{ backgroundImage: "url(/images/pizza.png)" }}>
            <h2>
              HOW WE
              <br />
              COOKING
            </h2>
            <button className={styles.moreButton}>More</button>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContent} style={{ backgroundImage: "url(/images/pizza2.png)" }}>
            <h2>OUR BLOG</h2>
            <button className={styles.moreButton}>More</button>
          </div>
        </div>

        <div className={styles.eventsHeader}>
          <h1>Events</h1>
          <p>There are regular events in our pizzeria that will allow you to eat delicious food for a lower price!</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContent} style={{ backgroundImage: "url(/images/pizza3.png)" }}>
            <h2>
              TWO PIZZA
              <br />
              FOR 1 PRICE
            </h2>
            <button className={styles.moreButton}>More</button>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContent} style={{ backgroundImage: "url(/images/pizza4.png)" }}>
            <h2>
              KITCHEN
              <br />
              TOUR
            </h2>
            <button className={styles.moreButton}>More</button>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContent} style={{ backgroundImage: "url(/images/pizza5.png)" }}>
            <h2>
              FREE COFFEE
              <br />
              FOR 3 PIZZA
            </h2>
            <button className={styles.moreButton}>More</button>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContent} style={{ backgroundImage: "url(/images/pizza6.png)" }}>
            <h2>
              OUR
              <br />
              INSTAGRAM
            </h2>
            <button className={styles.moreButton}>More</button>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContent} style={{ backgroundImage: "url(/images/pizza7.png)" }}>
            <h2>
              WHERE ARE
              <br />
              YOU CHOOSE
              <br />
              US?
            </h2>
            <button className={styles.moreButton}>More</button>
          </div>
        </div>
      </div>

     
    </div>
  )
}

