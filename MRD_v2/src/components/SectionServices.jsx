import { pushButtonClick } from '../utils/dataLayer'

const SERVICES = [
  { title: 'Tracking Implementation', description: 'Robust client-side and server-side tracking setups.' },
  { title: 'Analytics Architecture', description: 'Scalable data layers and structured event design.' },
  { title: 'Audits & Debugging', description: 'Fixing broken tracking and improving data quality.' },
  { title: 'Ongoing Analytics Support', description: 'Continuous optimization and analytics advisory.' },
]

function SectionServices({ onOpenServices }) {
  const handleLearnMore = () => {
    onOpenServices()
    pushButtonClick({ componentName: 'explore-all-services', componentType: 'cta', componentTarget: '#services', componentText: 'explore all services', section: 'services-teaser' })
  }

  return (
    <div className="container">
      <div className="section-services">
        <div className="section-services__grid">
          {SERVICES.map((s) => (
            <article key={s.title} className="service-card">
              <div className="service-card__icon" aria-hidden>◇</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.description}</p>
              <button type="button" className="service-card__link" onClick={() => { onOpenServices(); pushButtonClick({ componentName: s.title.toLowerCase().replace(/\s+/g, '-'), componentType: 'cta', componentTarget: '#services', componentText: 'learn more', section: 'services-teaser' }); }}>
                Learn more
              </button>
            </article>
          ))}
        </div>
        <button type="button" className="btn-primary section-services__cta" onClick={handleLearnMore}>
          Explore All Services
        </button>
      </div>
      <style>{`
        .section-services__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 600px) {
          .section-services__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
          .section-services__grid { grid-template-columns: repeat(4, 1fr); }
        }
        .service-card {
          padding: 1.5rem;
          background: var(--color-bg-elevated);
          border-radius: 4px;
          border: 1px solid var(--color-border);
        }
        .service-card__icon { color: var(--arylide-yellow); margin-bottom: 0.5rem; font-size: 1.5rem; }
        .service-card__title { font-size: 1.1rem; margin: 0 0 0.5rem 0; }
        .service-card__desc { margin: 0 0 1rem 0; font-size: 0.95rem; color: var(--color-text-muted); }
        .service-card__link {
          background: none;
          border: none;
          color: var(--color-accent);
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
        }
        .service-card__link:hover { text-decoration: underline; }
        .section-services__cta { margin-top: 2rem; }
      `}</style>
    </div>
  )
}

export default SectionServices
