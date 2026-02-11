import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { TechDeepDive } from './components/TechDeepDive';
import { ImpactMetrics } from './components/ImpactMetrics';
import { CaseStudy } from './components/CaseStudy';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Apply reveal to all major sections and their inner children for dynamic effect
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <main>
        <section id="home" className="reveal active">
          <Hero />
        </section>
        
        <div id="technology" className="reveal">
          <BentoGrid />
          <TechDeepDive />
        </div>
        
        <div id="solutions" className="reveal">
          <ImpactMetrics />
          <CaseStudy />
        </div>
        
        <section id="faq" className="reveal">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;