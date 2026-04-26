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
