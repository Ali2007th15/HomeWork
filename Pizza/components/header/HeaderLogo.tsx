import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'

function HeaderLogo() {
  return (
    <>
    <Link href="/">
        <span className={styles.header_logo}>pizzashop</span>
    </Link>
    </>
  )
}

export default HeaderLogo