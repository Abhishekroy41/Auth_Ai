import Navbar from './components/layout/Navbar'
import { useScrollReveal } from './hooks/useScrollReveal'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import UseCases from './components/sections/UseCases'
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

export default function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Why />
        <BroadcastFeature />
        <UseCases />
        <Services />
        <Industries />
        <Process />
        <Results />
        <Testimonials />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
