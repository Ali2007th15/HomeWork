import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import icon from "@/images/icon.png"
import { Inter } from "next/font/google"
import { SessionProvider } from "next-auth/react";


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DudeShape",
  description: "Discover the best furniture for your home",
  icons: {
    icon: { url: icon.src },
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}