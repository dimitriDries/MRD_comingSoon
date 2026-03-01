import { pushButtonClick } from '../utils/dataLayer'

function Hero({ onOpenContact }) {
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
          <img src="https://placehold.co/600x400/f5f2ef/5c5c5c?text=Data+visual" alt="" width="600" height="400" />
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
          min-height: var(--hero-min-height, 100vh);
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
        @media (max-width: 767px) {
          .hero__headline { font-size: 1.35rem; }
          .hero__subtext { font-size: 0.85rem; }
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
          border-radius: var(--radius-md);
        }
      `}</style>
    </section>
  )
}

export default Hero
