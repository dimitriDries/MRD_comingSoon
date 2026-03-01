import { pushButtonClick } from '../../utils/dataLayer'
import Overlay from './Overlay'

const SERVICES = [
  { id: 'tracking', title: 'Tracking Implementation' },
  { id: 'architecture', title: 'Analytics Architecture' },
  { id: 'audits', title: 'Audits & Debugging' },
  { id: 'support', title: 'Ongoing Analytics Support' },
]

function ServicesOverlay({ onClose, onOpenContact }) {
  const handleDiscuss = () => {
    onOpenContact()
    pushButtonClick({ componentName: 'discuss-this-service', componentType: 'cta', componentTarget: '#contact', componentText: 'discuss this service', section: 'services-overlay' })
  }

  return (
    <Overlay title="Services" onClose={onClose}>
      <h2 id="overlay-title" className="overlay-services__title">Services</h2>

      <div className="overlay-services__grid">
        {SERVICES.map((s) => (
          <div key={s.id} className="overlay-services__card">
            <h3>{s.title}</h3>
          </div>
        ))}
      </div>

      {SERVICES.map((s) => (
        <section key={s.id} id={s.id} className="overlay-services__block">
          <h3>{s.title}</h3>
          <h4>Who This Is For</h4>
          <ul>
            <li>Scaling companies</li>
            <li>Product teams</li>
            <li>Marketing teams</li>
            <li>GA4 migrations</li>
          </ul>
          <h4>What's Included</h4>
          <ul>
            <li>Audit</li>
            <li>Implementation</li>
            <li>QA testing</li>
            <li>Documentation</li>
            <li>Optional training</li>
          </ul>
          <h4>Deliverables</h4>
          <ul>
            <li>Tracking plan</li>
            <li>Data layer documentation</li>
            <li>GTM structure</li>
            <li>QA report</li>
          </ul>
          <button type="button" className="btn-primary overlay-services__cta" onClick={handleDiscuss}>
            Discuss This Service
          </button>
        </section>
      ))}

      <style>{`
        .overlay-services__title { margin: 0 0 1.5rem 0; font-size: 1.5rem; }
        .overlay-services__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 600px) {
          .overlay-services__grid { grid-template-columns: repeat(4, 1fr); }
        }
        .overlay-services__card {
          padding: 1rem;
          background: var(--color-bg-elevated);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          text-align: center;
        }
        .overlay-services__card h3 { margin: 0; font-size: 0.95rem; }
        .overlay-services__block { margin-bottom: 2.5rem; padding-bottom: 2rem; border-bottom: 1px solid var(--color-border); }
        .overlay-services__block:last-of-type { border-bottom: none; }
        .overlay-services__block h3 { font-size: 1.25rem; margin: 0 0 1rem 0; }
        .overlay-services__block h4 { font-size: 1rem; margin: 1rem 0 0.5rem 0; }
        .overlay-services__block ul { margin: 0; padding-left: 1.5rem; color: var(--color-text-muted); }
        .overlay-services__cta { margin-top: 1rem; }
      `}</style>
    </Overlay>
  )
}

export default ServicesOverlay
