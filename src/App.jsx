import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

import Projects from './components/Projects';

import Contact from './components/Contact';
import Background from './components/Background';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import "./index.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
        <div className="fixed inset-0 z-0">
          <Background />
        </div>
        <Navbar />
        <main>
          <Hero />
          <About />

          <Skills />
          <Projects />

          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div >
    </>
  );
};

export default App;
