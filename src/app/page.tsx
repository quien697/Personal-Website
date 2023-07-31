"use client"

import Header from '@/components/Header/header'
import AboutSection from '@/Page/about'
import ContactSection from '@/Page/contact'
import ExperienceSection from '@/Page/experience'
import HomeSection from '@/Page/home'
import PortfolioSection from '@/Page/portfolio'

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
