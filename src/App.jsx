import React from 'react';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import GlobalReachSection from './components/GlobalReachSection';
import WhyIndicaaSection from './components/WhyIndicaaSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AchievementsSection from './components/AchievementsSection';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <GlobalReachSection />
      <WhyIndicaaSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
