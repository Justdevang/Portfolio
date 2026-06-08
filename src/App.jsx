import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Capabilities from './components/Capabilities';
import SelectedWork from './components/SelectedWork';
import Process from './components/Process';
import StudioLife from './components/StudioLife';
import GithubRepos from './components/GithubRepos';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Connect Lenis to ScrollTrigger
    if (window.lenis) {
      window.lenis.on('scroll', ScrollTrigger.update);
    }
    
    // Cleanup
    return () => {
      if (window.lenis) {
        window.lenis.off('scroll', ScrollTrigger.update);
      }
    };
  }, []);

  return (
    <>
      <div
        id="hero-fixed-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          overflow: 'hidden',
          zIndex: 50,
          pointerEvents: 'none',
          opacity: 0,
          willChange: 'transform, width, height, border-radius, opacity',
        }}
      >
        <img
          src="/images/Untitled (15).png"
          alt="Digital Experience"
          fetchPriority="high"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
        />
        <div
          className="hero-bg-dark-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.52)',
            opacity: 0,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
      </div>

      <CustomCursor />
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <Navbar />
      <main>
        <Hero isReady={!isLoading} />
        <Marquee />
        <About />
        <Capabilities />
        <SelectedWork />
        <GithubRepos />
        <Process />
        <StudioLife />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default App;
