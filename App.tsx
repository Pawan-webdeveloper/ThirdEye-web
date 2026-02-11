
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { TechDeepDive } from './components/TechDeepDive';
import { ImpactMetrics } from './components/ImpactMetrics';
import { CaseStudy } from './components/CaseStudy';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="technology">
          <BentoGrid />
          <TechDeepDive />
        </div>
        <div id="solutions">
          <ImpactMetrics />
          <CaseStudy />
        </div>
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
