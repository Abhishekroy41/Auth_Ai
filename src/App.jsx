import Navbar from './components/layout/Navbar'
import { useScrollReveal } from './hooks/useScrollReveal'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import UseCases from './components/sections/UseCases'
import N8nSection from './components/n8n/N8nSection'
import BroadcastFeature from './components/sections/BroadcastFeature'
import Why from './components/sections/Why'
import Services from './components/sections/Services'
import Industries from './components/sections/Industries'
import Process from './components/sections/Process'
import Results from './components/sections/Results'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import CCTVSecurityPopup from './components/CCTVSecurityPopup'
import CCTVSecurityPage from './components/sections/CCTVSecurityPage'
import { useState, useEffect } from 'react'

export default function App() {
  useScrollReveal()
  const [showCCTVPage, setShowCCTVPage] = useState(window.location.hash === '#security')

  useEffect(() => {
    const handleHashChange = () => {
      setShowCCTVPage(window.location.hash === '#security');
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openSecurityPage = () => {
    window.location.hash = '#security';
  };

  const closeSecurityPage = () => {
    window.location.hash = '#home';
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="pt-16">
        {showCCTVPage ? (
          <CCTVSecurityPage onBack={closeSecurityPage} />
        ) : (
          <>
            <Hero />
            <Why />
            <BroadcastFeature />
            <UseCases />
            <N8nSection />
            <Services />
            <Industries />
            <Process />
            <Results />
            <Testimonials />
            <FAQ />
            <About />
            <Contact />
          </>
        )}
      </main>
      {!showCCTVPage && <CCTVSecurityPopup onLearnMore={openSecurityPage} />}
      <Footer />
    </div>
  )
}
