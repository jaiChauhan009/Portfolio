import { Suspense } from "react"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import LearningSection from "@/components/LearningSection"
import BlogsSection from "@/components/BlogsSection"
import ContactSection from "@/components/ContactSection"
import Navigation from "@/components/Navigation"
import { ThemeProvider } from "@/components/ThemeProvider"
import Loading from "./loading"
import ThemeToggle from "@/components/ThemeToggle"

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <ThemeToggle />
        <Navigation />
        <Suspense fallback={<Loading />}>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <LearningSection />
          {/* <BlogsSection /> */}
          <ContactSection />
        </Suspense>
      </div>
    </ThemeProvider>
  )
}
