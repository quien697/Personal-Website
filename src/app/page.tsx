"use client"

import Header from "@/components/Header"
import HomeSection from "@/Page/Home"
import AboutSection from "@/Page/About"
import ExperienceSection from "@/Page/Experience"
import PortfolioSection from "@/Page/portfolio"
import ContactSection from "@/Page/contact"

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
