import { useState } from 'react';
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
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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
        <Process />
        <StudioLife />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default App;
