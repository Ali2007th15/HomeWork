"use client";

import React from "react";
import styles from "./Header.module.css";

const HeaderNavigation: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.header_navbar}>
      <button className={styles.header_navItem} onClick={() => scrollToSection("home")}>
        Home
      </button>
      <button className={styles.header_navItem} onClick={() => scrollToSection("menu")}>
        Menu
      </button>
      <button className={styles.header_navItem} onClick={() => scrollToSection("events")}>
        Events
      </button>
      <button className={styles.header_navItem} onClick={() => scrollToSection("about us")}>
        About us
      </button>
    </nav>
  );
};

export default HeaderNavigation;
