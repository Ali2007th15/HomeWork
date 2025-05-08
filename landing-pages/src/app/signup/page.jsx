"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "@/styles/signup.module.css"

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    if (res.ok) router.push("/signin")
    else alert("Error signing up")
  }

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBackground}></div>

      <div className={styles.signupForm}>
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={styles.inputField}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={styles.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className={styles.inputField}
          />
          <button type="submit" className={styles.submitButton}>
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <Link href="/signin" className={styles.signinLink}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}
