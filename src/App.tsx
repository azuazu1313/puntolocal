import React, { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import PainPointSection from './sections/PainPointSection';
import ServicesSection from './sections/ServicesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import HowItWorksSection from './sections/HowItWorksSection';
import CtaBanner from './sections/CtaBanner';
import FaqSection from './sections/FaqSection';
import TrustSection from './sections/TrustSection';
import Footer from './components/Footer';
import { NavBarDemo } from './components/NavbarDemo';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <NavBarDemo />
      <HeroSection />
      <PainPointSection />
      <ServicesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <CtaBanner />
      <FaqSection />
      <TrustSection />
      <Footer />
    </div>
  );
}

export default App;