import { pushButtonClick } from '../utils/dataLayer'

const STEPS = [
  { num: 1, title: 'Audit & Discovery', text: 'I analyze your setup, business model and tracking gaps.' },
  { num: 2, title: 'Architecture Design', text: 'I design a structured measurement framework aligned with business goals.' },
  { num: 3, title: 'Implementation', text: 'Precise implementation with documentation.' },
  { num: 4, title: 'Validation & Handover', text: 'QA testing, documentation, stakeholder walkthrough.' },
]

function SectionHowIWork({ onOpenContact }) {
  const handleDiscuss = () => {
    onOpenContact()
    pushButtonClick({ componentName: 'discuss-your-setup', componentType: 'cta', componentTarget: '#contact', componentText: 'discuss your setup', section: 'how-i-work' })
  }

  return (
    <div className="container">
      <div className="section-how">
        <h2 className="section-how__headline">How I Work</h2>
        <ol className="section-how__timeline">
          {STEPS.map((step) => (
            <li key={step.num} className="section-how__step">
              <span className="section-how__num">{step.num}</span>
              <div>
                <h3 className="section-how__step-title">{step.title}</h3>
                <p className="section-how__step-text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <button type="button" className="btn-secondary section-how__cta" onClick={handleDiscuss}>
          Discuss Your Setup
        </button>
      </div>
      <style>{`
        .section-how__headline { font-size: 1.75rem; margin: 0 0 2rem 0; text-align: center; }
        .section-how__timeline {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .section-how__timeline { grid-template-columns: repeat(4, 1fr); }
        }
        .section-how__step {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1rem;
          background: var(--color-bg-elevated);
          border-radius: 4px;
          border-left: 4px solid var(--color-accent);
        }
        .section-how__num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          background: var(--color-accent);
          color: var(--white-smoke);
          font-weight: 700;
          border-radius: 50%;
          font-size: 0.9rem;
        }
        .section-how__step-title { margin: 0 0 0.25rem 0; font-size: 1.05rem; }
        .section-how__step-text { margin: 0; font-size: 0.9rem; color: var(--color-text-muted); }
        .section-how__cta { margin: 2rem auto 0; display: block; }
      `}</style>
    </div>
  )
}

export default SectionHowIWork
