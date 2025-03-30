import styles from './about.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>About us</h1>
        <p className={styles.description}>
          In just a couple of years, we have opened 6 outlets in different cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we plan to develop the network in other major cities of Russia.
        </p>
        <div className={styles.smallPizzas}>
          <Image src="/images/pizza-1.png" alt="Pizza 1" width={150} height={150} className={styles.smallPizza} />
          <Image src="/images/pizza-2.png" alt="Pizza 2" width={150} height={150} className={styles.smallPizza} />
          <Image src="/images/pizza-3.png" alt="Pizza 3" width={150} height={150} className={styles.smallPizza} />
        </div>
        <p className={styles.description}>
          The kitchen of each point is at least: 400-500 sq.m. meters, hundreds of employees, smoothly performing work in order to receive / prepare / deliver customer orders on time.
        </p>
      </div>
      <div className={styles.rightSection}>
        <Image src="/images/main-pizza.png" alt="Main Pizza" width={500} height={500} className={styles.mainPizza} />
      </div>
    </div>
  );
}
