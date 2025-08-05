import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import HowItWorks from './components/HowItWorks';
import PointsRewards from './components/PointsRewards';
import TaskCTA from './components/TaskCTA';
import Community from './components/Community';
import Footer from './components/Footer';
import TokenomicsSection from './components/tokenomics.jsx'
import Roadmap from './components/roadmap.jsx'
import Whatsapp from './components/whatsapp.jsx'


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0E0E12] text-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Whatsapp/>
      <Hero />
      <Highlights />
      <HowItWorks />
      <PointsRewards />
      <TokenomicsSection />
      <Roadmap/>
      <TaskCTA />
      <Community />
      <Footer />
    </div>
  );
}

export default App;