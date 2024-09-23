import React from 'react';
import HeroSection from './components/organisms/HeroSection/HeroSection';
import TechCarousel from './components/organisms/TechCarousel/TechCarousel';
import FeaturesSection from './components/organisms/FeaturesSection/FeaturesSection';
import CodeSection from './components/organisms/CodeSection/CodeSection';
import OurStorySection from './components/organisms/OurStorySection/OurStorySection';
import ProjectsSection from './components/organisms/ProjectsSection/ProjecsSection';
import FAQsSection from './components/organisms/FaqSection/FaqSection';
import Footer from './components/organisms/Footer/Footer';

function App() {
  return (
    <div>
      <HeroSection />
      <TechCarousel />
      <FeaturesSection />
      <CodeSection />
      <OurStorySection />
      <ProjectsSection />
      <FAQsSection />
      <Footer />
    </div>
  );
}

export default App;
