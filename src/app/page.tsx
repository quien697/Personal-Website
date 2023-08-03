"use client"

import Header from "@/components/Header"
import HomeSection from "@/components/Page/Home"
import AboutSection from "@/components/Page/About"
import ExperienceSection from "@/components/Page/Experience"
import PortfolioSection from "@/components/Page/Portfolio/portfolio"
import ContactSection from "@/components/Page/Contact"

export default function Home() {
  return (
    <div className="ml-auto lg:ml-64">
      <Header />
      <main className="block">
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  )
}
