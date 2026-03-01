import { useState, useEffect, useCallback, useRef } from 'react'
import { pushPageImpression, pushOverlayView, pushOverlayClose } from './utils/dataLayer'
import { useInView } from './hooks/useInView'
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
import ScrollShapes from './components/ScrollShapes'
import ParticlesBackground from './components/ParticlesBackground'
import './index.css'

const OVERLAY_IDS = ['about', 'services', 'contact']

function getOverlayFromHash() {
  const hash = window.location.hash.slice(1).toLowerCase()
  return OVERLAY_IDS.includes(hash) ? hash : null
}

const SCROLL_THRESHOLD = 80
const SCROLL_THROTTLE_MS = 120

function App() {
  const [overlay, setOverlay] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)
  const lastScrollY = useRef(0)
  const throttleUntil = useRef(0)

  const refAbout = useRef(null)
  const refServices = useRef(null)
  const refHowIWork = useRef(null)
  const refClients = useRef(null)
  const refTestimonial = useRef(null)
  const refInsights = useRef(null)
  const refFinalCta = useRef(null)
  const inViewAbout = useInView(refAbout)
  const inViewServices = useInView(refServices)
  const inViewHowIWork = useInView(refHowIWork)
  const inViewClients = useInView(refClients)
  const inViewTestimonial = useInView(refTestimonial)
  const inViewInsights = useInView(refInsights)
  const inViewFinalCta = useInView(refFinalCta)

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

  // Header: hide on scroll down, show on scroll up (and when mobile menu is open)
  useEffect(() => {
    if (mobileMenuOpen) {
      setHeaderVisible(true)
      return
    }
    const handleScroll = () => {
      const now = Date.now()
      if (now < throttleUntil.current) return
      throttleUntil.current = now + SCROLL_THROTTLE_MS
      const y = window.scrollY
      if (y <= SCROLL_THRESHOLD) {
        setHeaderVisible(true)
      } else if (y > lastScrollY.current) {
        setHeaderVisible(false)
      } else {
        setHeaderVisible(true)
      }
      lastScrollY.current = y
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileMenuOpen])

  return (
    <div className="app-root">
      <ParticlesBackground />
      <div className="scroll-shapes-layer" aria-hidden="true">
        <ScrollShapes />
      </div>
      <a href="#hero" className="sr-only sr-only--focusable">Skip to main content</a>
      <Header
        onOpenOverlay={openOverlay}
        onOpenContact={() => openOverlay('contact')}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((o) => !o)}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
        headerVisible={headerVisible}
      />
      <div style={{ height: 'var(--header-height)' }} aria-hidden="true" />
      <main>
        <Hero onOpenContact={() => openOverlay('contact')} />
        <section ref={refAbout} id="about-teaser" className={`section section--alt ${inViewAbout ? 'section--visible' : ''}`} aria-label="About teaser">
          <SectionAbout onOpenAbout={() => openOverlay('about')} />
        </section>
        <section ref={refServices} id="services-teaser" className={`section section--overlap ${inViewServices ? 'section--visible' : ''}`} aria-label="Services teaser">
          <SectionServices onOpenServices={() => openOverlay('services')} />
        </section>
        <section ref={refHowIWork} id="how-i-work" className={`section section--alt ${inViewHowIWork ? 'section--visible' : ''}`} aria-label="How I work">
          <SectionHowIWork onOpenContact={() => openOverlay('contact')} />
        </section>
        <section ref={refClients} id="clients" className={`section section--overlap ${inViewClients ? 'section--visible' : ''}`} aria-label="Client logos">
          <SectionClientLogos />
        </section>
        <section ref={refTestimonial} id="testimonial" className={`section section--alt ${inViewTestimonial ? 'section--visible' : ''}`} aria-label="Testimonial">
          <SectionTestimonial />
        </section>
        <section ref={refInsights} id="insights" className={`section section--overlap ${inViewInsights ? 'section--visible' : ''}`} aria-label="Insights">
          <SectionInsights />
        </section>
        <section ref={refFinalCta} id="final-cta" className={`section section--alt section--overlap ${inViewFinalCta ? 'section--visible' : ''}`} aria-label="Final CTA">
          <SectionFinalCta onOpenContact={() => openOverlay('contact')} />
        </section>
      </main>
      <Footer onOpenOverlay={openOverlay} />

      {overlay === 'about' && <AboutOverlay onClose={closeOverlay} onOpenContact={() => { closeOverlay(); openOverlay('contact') }} />}
      {overlay === 'services' && <ServicesOverlay onClose={closeOverlay} onOpenContact={() => { closeOverlay(); openOverlay('contact') }} />}
      {overlay === 'contact' && <ContactOverlay onClose={closeOverlay} />}
    </div>
  )
}

export default App
