import { useState, useEffect, useCallback } from 'react'
import { pushPageImpression, pushOverlayView, pushOverlayClose } from './utils/dataLayer'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import SectionAbout from './components/SectionAbout'
import SectionServices from './components/SectionServices'
import SectionHowIWork from './components/SectionHowIWork'
import SectionClientLogos from './components/SectionClientLogos'
import SectionTestimonial from './components/SectionTestimonial'
import SectionInsights from './components/SectionInsights'
import SectionFinalCta from './components/SectionFinalCta'
import AboutOverlay from './components/overlays/AboutOverlay'
import ServicesOverlay from './components/overlays/ServicesOverlay'
import ContactOverlay from './components/overlays/ContactOverlay'
import './index.css'

const OVERLAY_IDS = ['about', 'services', 'contact']

function getOverlayFromHash() {
  const hash = window.location.hash.slice(1).toLowerCase()
  return OVERLAY_IDS.includes(hash) ? hash : null
}

function App() {
  const [overlay, setOverlay] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const openOverlay = useCallback((id) => {
    if (!OVERLAY_IDS.includes(id)) return
    setOverlay(id)
    window.location.hash = id
    pushOverlayView(id)
  }, [])

  const closeOverlay = useCallback(() => {
    setOverlay((current) => {
      if (current) pushOverlayClose(current)
      return null
    })
    window.history.replaceState(null, '', window.location.pathname + window.location.search)
  }, [])

  // Sync overlay state from hash on load and when user uses back/forward or changes hash
  useEffect(() => {
    const handleHashChange = () => setOverlay(getOverlayFromHash())
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Page impression once on mount
  useEffect(() => {
    pushPageImpression({ pageName: 'home', pageType: 'landing', pageLanguage: 'en' })
  }, [])

  return (
    <>
      <a href="#hero" className="sr-only sr-only--focusable">Skip to main content</a>
      <Header
        onOpenOverlay={openOverlay}
        onOpenContact={() => openOverlay('contact')}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((o) => !o)}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
      />
      <main>
        <Hero onOpenContact={() => openOverlay('contact')} />
        <section id="about-teaser" className="section" aria-label="About teaser">
          <SectionAbout onOpenAbout={() => openOverlay('about')} />
        </section>
        <section id="services-teaser" className="section" aria-label="Services teaser">
          <SectionServices onOpenServices={() => openOverlay('services')} />
        </section>
        <section id="how-i-work" className="section" aria-label="How I work">
          <SectionHowIWork onOpenContact={() => openOverlay('contact')} />
        </section>
        <section id="clients" className="section" aria-label="Client logos">
          <SectionClientLogos />
        </section>
        <section id="testimonial" className="section" aria-label="Testimonial">
          <SectionTestimonial />
        </section>
        <section id="insights" className="section" aria-label="Insights">
          <SectionInsights />
        </section>
        <section id="final-cta" className="section" aria-label="Final CTA">
          <SectionFinalCta onOpenContact={() => openOverlay('contact')} />
        </section>
      </main>
      <Footer onOpenOverlay={openOverlay} />

      {overlay === 'about' && <AboutOverlay onClose={closeOverlay} onOpenContact={() => { closeOverlay(); openOverlay('contact') }} />}
      {overlay === 'services' && <ServicesOverlay onClose={closeOverlay} onOpenContact={() => { closeOverlay(); openOverlay('contact') }} />}
      {overlay === 'contact' && <ContactOverlay onClose={closeOverlay} />}
    </>
  )
}

export default App
