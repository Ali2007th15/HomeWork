import React from "react";
import styles from "./Header.module.css";
import HeaderLogo from "./HeaderLogo";
import HeaderNavigation from "./HeaderNavigation";
import HeaderActions from "./HeaderActions";

function Header() {
  return (
    <header className={styles.header_container}>
      <div className={styles.header}>
        <HeaderLogo />
        <HeaderNavigation />
        <HeaderActions />
      </div>
    </header>
  );
}

export default Header;
