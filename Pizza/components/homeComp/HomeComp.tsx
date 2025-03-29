import React from "react";
import styles from "./HomeComp.module.css";
import Image from "next/image";

function HomeComp() {
  return (
    <div className={styles.home}>
      <div className={styles.home_container}>
        <div className={styles.home_leftSide}>
          <div className={styles.home_leftSide_title}>
            <span className={styles.home_leftSide_title_text}>The Fastest</span>
            <div className={styles.home_leftSide_title_textWithIcon}>
              <span>Pizza</span>
              <Image
                src="/icons/Lightning.png"
                alt=""
                width={50}
                height={50}
              ></Image>
              <span>Delivery</span>
            </div>
          </div>
          <span className={styles.leftSide_desc}>
            We will deliver juicy pizza for your family in 30 minutes, if the
            courier is late -{" "}
            <span className={styles.leftSide_descGray}>pizza is free!</span>
          </span>
          <div className={styles.leftSide_process}>
            <span>Cooking process </span>
            <Image
              src="/images/HomeComp1.png"
              alt=""
              className={styles.leftSide_process_img}
              width={272}
              height={193}
            ></Image>
          </div>
          <div className={styles.leftSide_buttonsContainer}>
            <div className={styles.leftSide_btnGroup}>
              <button className={styles.leftSide_btnGroup_btn}>To order</button>
              <button className={styles.leftSide_btnGroup_btn}>
                <span className={styles.leftSide_btnGroup_btn_second}>Pizza-Menu</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.home_rightSide}>
          <Image
            src="/images/HomeComp2.png"
            alt="HomeComp2"
            className={styles.home_rightSide_mainImg}
            width={456}
            height={684}
          ></Image>
          <Image
            src="/icons/fries.png"
            alt=""
            className={styles.home_rightSide_additionImg_fries}
            width={212}
            height={226}
          ></Image>
          <Image
            src="/icons/pizza.png"
            alt=""
            className={styles.home_rightSide_additionImg_pizza}
            width={252}
            height={252}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default HomeComp;
