import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'

function HeaderActions() {
  return (
    <div className={styles.header_actions}>
      <button className={styles.header_loginButton}>Log in</button>
      <button className={styles.header_cartButton}>
        <Image src="/icons/cart.png" alt="cart" width={25} height={25}/>
      </button>

    </div>
  )
}

export default HeaderActions