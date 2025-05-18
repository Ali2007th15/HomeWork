"use client";

import { SessionProvider } from "next-auth/react";
import type React from "react";
import "./globals.css";
import icon from "@/images/icon.png";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <head>
        <title>DudeShape</title>
        <meta name="description" content="Welcome to Dude Shape" />
        <link rel="icon" href={icon.src}  />
      </head>
      <SessionProvider>
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
