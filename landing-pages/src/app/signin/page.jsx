"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";  
import styles from '@/styles/signin.module.css';  

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    if (res.ok) router.push("/");
    else alert("Invalid credentials");
  };

  return (
    <div className={styles.signinContainer}>
      <div className={styles.signinBackground}></div>

      <div className={styles.signinForm}>
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={styles.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className={styles.inputField}
          />
          <button
            type="submit"
            className={styles.submitButton}
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <Link href="/signup" className={styles.signupLink}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
