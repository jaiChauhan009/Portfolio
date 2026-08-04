import { Suspense } from "react"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ExperienceSection from "@/components/ExperienceSection"
import SkillsSection from "@/components/SkillsSection"
import ProjectsSection from "@/components/ProjectsSection"
import AchievementsSection from "@/components/AchievementsSection"
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
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
        </Suspense>
      </div>
    </ThemeProvider>
  )
}
