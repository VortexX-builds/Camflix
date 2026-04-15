import React, { useState } from 'react';
import Preloader from './components/ui/Preloader';
import { Navbar } from './components/ui/mini-navbar';
import Hero from './components/sections/Hero';
import FeatureZigZag from './components/sections/FeatureZigZag';
import FaqAccordion from './components/sections/FaqAccordion';
import Footer from './components/layout/Footer';
import { DemoOne } from './components/sections/demo';

export default function App() {
  const [isSiteLoaded, setIsSiteLoaded] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  if (showDemo) {
    return <DemoOne />;
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#E50914]">
      {!isSiteLoaded && (
        <Preloader onComplete={() => setIsSiteLoaded(true)} />
      )}
      <main>
        <Navbar onSignIn={() => setShowDemo(true)} />
        <Hero isVisible={isSiteLoaded} onGetStarted={() => setShowDemo(true)} />
        <FeatureZigZag />
        <FaqAccordion />
        <Footer />
      </main>
    </div>
  );
}

