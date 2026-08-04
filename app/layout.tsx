import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jai Kishan - Software Engineer @ Kosh | Payments & Backend Systems",
  description:
    "Portfolio of Jai Kishan, a Software Engineer at Kosh (YC-backed fintech) building payments infrastructure, ledgers, and real-time systems. Full stack developer with experience across Node.js, FastAPI, Golang, and Android.",
  keywords: "Software Engineer, Fintech, Payments Engineering, Backend Development, Node.js, FastAPI, Golang, System Design, Microservices, AWS, React, Kotlin",
  authors: [{ name: "Jai Kishan" }],
  openGraph: {
    title: "Jai Kishan - Software Engineer @ Kosh | Payments & Backend Systems",
    description:
      "Explore the portfolio of Jai Kishan — Software Engineer at Kosh building fault-tolerant payments and ledger systems, with experience across full stack, backend, and Android development.",
    // url: "https://yourdomain.dev", // replace with your deployed portfolio domain
    siteName: "Jai Kishan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jai Kishan - Software Engineer @ Kosh | Payments & Backend Systems",
    description:
      "Software Engineer at Kosh (YC-backed fintech) building payments infrastructure, ledgers, and real-time systems.",
  },
  generator: "v0.dev",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
