import { pushButtonClick } from '../utils/dataLayer'

function SectionAbout({ onOpenAbout }) {
  const handleLearnMore = () => {
    onOpenAbout()
    pushButtonClick({ componentName: 'learn-more-about', componentType: 'cta', componentTarget: '#about', componentText: 'learn more about me', section: 'about-teaser' })
  }

  return (
    <div className="container">
      <div className="section-about section__stagger">
        <div className="section-about__text">
          <h2 className="section-about__headline">Analytics without guesswork.</h2>
          <p>
            I'm a freelance Digital Analytics Developer specialized in building clean, scalable tracking setups using tools like Google Tag Manager, GA4, server-side tracking and product analytics platforms.
          </p>
          <p>
            My focus is simple: data integrity, clarity, and long-term maintainability.
          </p>
          <button type="button" className="btn-secondary section-about__cta" onClick={handleLearnMore}>
            Learn more about me
          </button>
        </div>
        <div className="section-about__visual">
          <img src="https://placehold.co/500x350/f5f2ef/5c5c5c?text=About" alt="" width="500" height="350" />
        </div>
      </div>
      <style>{`
        .section-about {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }
        @media (min-width: 768px) {
          .section-about { grid-template-columns: 1fr 1fr; }
        }
        .section-about__headline { font-size: 1.75rem; margin: 0 0 1rem 0; }
        @media (max-width: 767px) {
          .section-about__headline { font-size: 1.5rem; }
        }
        .section-about__text p { margin: 0 0 1rem 0; color: var(--color-text-muted); }
        .section-about__cta { margin-top: 0.5rem; }
        .section-about__visual img { width: 100%; height: auto; border-radius: var(--radius-md); }
      `}</style>
    </div>
  )
}

export default SectionAbout
