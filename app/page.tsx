"use client"

import { Header } from "@/components/portfolio/header"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"
import { SocialSidebar } from "@/components/portfolio/social-sidebar"
import { I18nProvider } from "@/lib/i18n/context"

export default function Home() {
  return (
    <I18nProvider>
      <Header />
      <SocialSidebar />
      <main className="mx-auto">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </I18nProvider>
  )
}
