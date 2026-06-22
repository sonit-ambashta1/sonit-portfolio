import { useState, useEffect } from 'react';

import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Education from './components/Sections/Education';
import Projects from './components/Sections/Projects';
import Experience from './components/Sections/Experience';
import Skills from './components/Sections/Skills';
import Footer from './components/Layout/Footer';
import BackToTop from './components/Layout/BackToTop';
import LoadingScreen from './components/utils/LoadingScreen';
import useActiveSection from './hooks/useActionSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const activeSection = useActiveSection();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-dark-bg to-dark-bg2 font-montserrat text-text-primary">
      <a
        className="sr-only absolute left-2 top-2 z-50 rounded border bg-white p-2 text-sm focus:not-sr-only"
        data-skip
        href="#app"
      >
        Skip to content
      </a>
      {/* Background radial gradients */}
      <div className="pointer-events-none fixed inset-0 z-[-2] bg-[radial-gradient(circle_at_10%_20%,rgba(79,70,229,0.06)_0%,transparent_25%),radial-gradient(circle_at_90%_80%,rgba(107,114,128,0.05)_0%,transparent_25%),radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.04)_0%,transparent_35%)]" />

      <Navbar activeSection={activeSection} />

      <main className="pt-18">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Skills />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
