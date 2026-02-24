import { useRef, useEffect } from 'react'
import { pushButtonClick } from '../utils/dataLayer'

const PARTICLES_CONFIG = {
  particles: {
    number: { value: 250, density: { enable: true, value_area: 1000 } },
    color: { value: '#f2f4f3' },
    shape: { type: 'circle' },
    opacity: { value: 0.1 },
    size: { value: 1 },
    line_linked: { enable: true, distance: 100, color: '#f2f4f3', opacity: 0.1, width: 1 },
    move: { enable: true, speed: 0.4, direction: 'none', out_mode: 'out' },
  },
  interactivity: {
    detect_on: 'window',
    events: { onhover: { enable: false }, onclick: { enable: true, mode: 'push' }, resize: false },
    modes: { push: { particles_nb: 4 } },
  },
  retina_detect: false,
}

function Hero({ onOpenContact }) {
  const containerRef = useRef(null)
  const initDone = useRef(false)

  useEffect(() => {
    if (!containerRef.current || initDone.current) return
    let cancelled = false
    import('particles.js').then(() => {
      if (cancelled || !containerRef.current || typeof window.particlesJS !== 'function') return
      window.particlesJS(containerRef.current.id, PARTICLES_CONFIG)
      initDone.current = true
    }).catch(() => { initDone.current = false })
    return () => { cancelled = true }
  }, [])

  const handleStartProject = () => {
    onOpenContact()
    pushButtonClick({ componentName: 'start-project', componentType: 'cta', componentTarget: '#contact', componentText: 'start a project', section: 'hero' })
  }

  const handleSeeHow = () => {
    document.getElementById('how-i-work')?.scrollIntoView({ behavior: 'smooth' })
    pushButtonClick({ componentName: 'see-how-i-work', componentType: 'cta', componentTarget: '#how-i-work', componentText: 'see how i work', section: 'hero' })
  }

  return (
    <section id="hero" className="hero section" aria-label="Hero">
      <div id="particles-hero" ref={containerRef} className="hero__particles" aria-hidden="true" />
      <div className="hero__content container">
        <div className="hero__text">
          <h1 className="hero__headline">Your analytics should drive decisions — not confusion.</h1>
          <p className="hero__subtext">
            I design and implement reliable tracking infrastructures that give you accurate, scalable and actionable data.
          </p>
          <div className="hero__ctas">
            <button type="button" className="btn-primary hero__cta-primary" onClick={handleStartProject}>
              Start a Project
            </button>
            <button type="button" className="btn-secondary hero__cta-secondary" onClick={handleSeeHow}>
              See How I Work
            </button>
          </div>
        </div>
        <div className="hero__visual">
          <img src="https://placehold.co/600x400/0d2137/afbfc0?text=Data+visual" alt="" width="600" height="400" />
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
        }
        .hero__particles {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero__particles canvas {
          position: absolute;
          inset: 0;
          width: 100% !important;
          height: 100% !important;
        }
        .hero__content {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }
        @media (min-width: 768px) {
          .hero__content { grid-template-columns: 1fr 1fr; }
        }
        .hero__headline {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          line-height: 1.2;
          margin: 0 0 1rem 0;
          font-weight: 700;
        }
        .hero__subtext {
          margin: 0 0 1.5rem 0;
          color: var(--color-text-muted);
          max-width: 36ch;
        }
        .hero__ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .hero__visual img {
          width: 100%;
          height: auto;
          border-radius: 4px;
        }
      `}</style>
    </section>
  )
}

export default Hero
