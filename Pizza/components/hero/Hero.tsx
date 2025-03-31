import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.herocontainer}>
        <div className={styles.heroleft}>
          <div className={styles.herotitle}>
            <span className={styles.herotitleMain}>The Fastest</span>
            <div className={styles.herotitleWithIcon}>
              <span>Pizza</span>
              <Image
                src="/icons/Lightning.png"
                alt="Lightning icon"
                width={50}
                height={50}
              />
              <span>Delivery</span>
            </div>
          </div>
          <p className={styles.herodescription}>
            We will deliver juicy pizza for your family in 30 minutes, if the
            courier is late -{" "}
            <span className={styles.herodescriptionHighlight}>pizza is free!</span>
          </p>
          <div className={styles.heroprocess}>
            <span>Cooking process </span>
            <Image
              src="/images/Hero2.png"
              alt="Cooking process"
              className={styles.heroprocessImage}
              width={272}
              height={193}
            />
          </div>
          <div className={styles.herocta}>
            <div className={styles.herobuttons}>
              <button className={styles.herobuttonPrimary}>To order</button>
              <button className={styles.herobuttonSecondary}>
                <span className={styles.herobuttonText}>Pizza-Menu</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.heroright}>
          <Image
            src="/images/Hero.png"
            alt="Pizza delivery"
            className={styles.heromainImage}
            width={456}
            height={684}
          />
         
          
        </div>
      </div>
    </section>
  );
}

export default HeroSection;