import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jai Kishan - Full Stack Developer | AWS & React Certified | Backend & App Dev Enthusiast",
  description:
    "Portfolio of Jai Kishan, a dedicated Full Stack Developer with expertise in Node.js, React, Spring Boot, Golang, and app development. Certified in AWS and React, currently mastering backend frameworks and exploring AI, GenAI, and cybersecurity.",
  keywords: "Full Stack Development, AWS, React, Spring Boot, Golang, Node.js, Kotlin, App Development, AI, Cybersecurity, Docker, Microservices, Django, Flask",
  authors: [{ name: "Jai Kishan" }],
  openGraph: {
    title: "Jai Kishan - Full Stack Developer | Backend & App Development | AWS & React Certified",
    description:
      "Explore the portfolio of Jai Kishan — proficient in Node.js, React, Spring Boot, Golang, and Kotlin app development, with ongoing learning in AI, cybersecurity, and modern backend frameworks.",
    // url: "https://yourdomain.dev", // replace with your deployed portfolio domain
    siteName: "Jai Kishan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jai Kishan - Full Stack Dev | AWS & React Certified | Backend & App Enthusiast",
    description:
      "Tech enthusiast mastering full stack, backend, app development, AI, and cybersecurity — building optimized and scalable solutions.",
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
