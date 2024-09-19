import React from 'react';
import HeroSection from './components/organisms/HeroSection/HeroSection';
import TechCarousel from './components/organisms/TechCarousel/TechCarousel';
import FeaturesSection from './components/organisms/FeaturesSection/FeaturesSection';
import CodeSection from './components/organisms/CodeSection/CodeSection';
import OurStorySection from './components/organisms/OurStorySection/OurStorySection';

function App() {
  return (
    <div>
      <HeroSection />
      <TechCarousel />
      <FeaturesSection />
      <CodeSection />
      <OurStorySection />
    </div>
  );
}

export default App;
