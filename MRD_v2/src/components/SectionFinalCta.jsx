import { pushButtonClick } from '../utils/dataLayer'

function SectionFinalCta({ onOpenContact }) {
  const handleStartProject = () => {
    onOpenContact()
    pushButtonClick({ componentName: 'start-project', componentType: 'cta', componentTarget: '#contact', componentText: 'start a project', section: 'final-cta' })
  }

  const handleSendMessage = () => {
    onOpenContact()
    pushButtonClick({ componentName: 'send-message', componentType: 'cta', componentTarget: '#contact', componentText: 'send a message', section: 'final-cta' })
  }

  return (
    <div className="section-final container section__stagger">
      <h2 className="section-final__headline">Ready to fix your analytics foundation?</h2>
      <p className="section-final__text">
        Whether you need a full tracking implementation or a structured audit, I can help.
      </p>
      <div className="section-final__ctas">
        <button type="button" className="btn-primary section-final__cta" onClick={handleStartProject}>
          Start a Project
        </button>
        <button type="button" className="btn-secondary section-final__cta" onClick={handleSendMessage}>
          Send a Message
        </button>
      </div>
      <style>{`
        .section-final {
          text-align: center;
          padding: 3rem 0;
          background: var(--color-bg-elevated);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-card);
        }
        @media (max-width: 767px) {
          .section-final {
            width: calc(100% - 2 * var(--container-padding));
            margin-inline: auto;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .section-final {
            padding-block: 3.5rem 0;
          }
          .section-final__ctas {
            margin-bottom: 1.5rem;
          }
        }
        @media (min-width: 768px) {
          .section-final {
            max-width: 800px;
            margin-inline: auto;
          }
        }
        .section-final__headline { font-size: 1.75rem; margin: 0 0 1rem 0; }
        @media (max-width: 767px) {
          .section-final__headline { font-size: 1.35rem; }
        }
        .section-final__text { margin: 0 0 1.5rem 0; color: var(--color-text-muted); max-width: 40ch; margin-inline: auto; }
        @media (max-width: 767px) {
          .section-final__text { font-size: 0.85rem; }
        }
        .section-final__ctas { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; }
      `}</style>
    </div>
  )
}

export default SectionFinalCta
