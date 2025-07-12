import React from 'react'
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import GlobalReachSection from '../components/GlobalReachSection';
import WhyIndicaaSection from '../components/WhyIndicaaSection';
import ContactSection from '../components/ContactSection';
import AchievementsSection from '../components/AchievementsSection';

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <GlobalReachSection />
      <WhyIndicaaSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  )
}
