"use client"
import type React from "react"
import { useState } from "react"
import styles from "@/styles/news.module.css"
import { Mail } from "lucide-react"

export default function News() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log("Submitted email:", email)
    
    setEmail("")
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Subscribe to get the latest news about us</h2>
        <p className={styles.description}>
        Subscribe to our newsletter for weekly insights, exclusive offers, and community updates. Enter your email to stay in the loop! 
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <Mail className={styles.mailIcon} size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Register
          </button>
        </form>
      </div>
    </section>
  )
}
