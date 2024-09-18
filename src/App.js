import React from 'react';
import HeroSection from './components/organisms/HeroSection/HeroSection';
import TechCarousel from './components/organisms/TechCarousel/TechCarousel';
import FeaturesSection from './components/organisms/FeaturesSection/FeaturesSection';

function App() {
  return (
    <div>
      <HeroSection />
      <TechCarousel />
      <FeaturesSection />
    </div>
  );
}

export default App;
