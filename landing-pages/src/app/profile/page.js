"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import styles from "@/styles/profile.module.css"

export default function ProfilePage() {
  const { data: session, status } = useSession()

 

  
  if (status === "loading" || !session) {
    return (
      <div className={styles.pageBackground}>
        <div className={styles.container}>
          <p className={styles.title}>Loading...</p>
        </div>
      </div>
    )
  }

  
  const initial = session.user?.name ? session.user.name.charAt(0).toUpperCase() : "?"

  return (
    <div className={styles.pageBackground}>
      <div className={styles.container}>
        <Link href="/" className={styles.homeIcon}>
          <ArrowLeft size={24} />
        </Link>

        <div className={styles.header}>
          <h1 className={styles.title}>Profile Page</h1>
          <div className={styles.avatar}>
            <span className={styles.avatarInitial}>{initial}</span>
          </div>
        </div>

        <div className={styles.profileInfo}>
          <div className={styles.profileItem}>
            <span className={styles.label}>Name:</span>
            <span className={styles.value}>{session.user?.name}</span>
          </div>
          <div className={styles.profileItem}>
            <span className={styles.label}>Email:</span>
            <span className={styles.value}>{session.user?.email}</span>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button onClick={() => signOut({ callbackUrl: "/signin" })} className={styles.signOutButton}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}
