import { pushLinkClick } from '../utils/dataLayer'

function Footer({ onOpenOverlay }) {
  const currentYear = new Date().getFullYear()

  const handleOverlayLink = (id) => {
    onOpenOverlay(id)
    pushLinkClick({
      componentName: id,
      componentType: 'footer-link',
      componentTarget: `#${id}`,
      componentText: id,
      section: 'footer',
    })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__grid">
        <div className="footer__col">
          <p className="footer__name">Dimitri</p>
          <p className="footer__meta">Remote / City, Country</p>
          <a href="mailto:placeholder@example.com" className="footer__link" onClick={() => pushLinkClick({ componentName: 'email', componentType: 'link', componentTarget: 'mailto:placeholder@example.com', componentText: 'email', section: 'footer' })}>placeholder@example.com</a>
          <p className="footer__tagline">Helping businesses turn data into reliable decision-making systems.</p>
        </div>
        <div className="footer__col">
          <p className="footer__col-title">Services</p>
          <ul className="footer__list">
            <li><button type="button" className="footer__link-btn" onClick={() => handleOverlayLink('services')}>Tracking Implementation</button></li>
            <li><button type="button" className="footer__link-btn" onClick={() => handleOverlayLink('services')}>Analytics Architecture</button></li>
            <li><button type="button" className="footer__link-btn" onClick={() => handleOverlayLink('services')}>Audits & Debugging</button></li>
            <li><button type="button" className="footer__link-btn" onClick={() => handleOverlayLink('services')}>Ongoing Analytics Support</button></li>
          </ul>
        </div>
        <div className="footer__col">
          <p className="footer__col-title">Navigation</p>
          <ul className="footer__list">
            <li><a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }}>Home</a></li>
            <li><button type="button" className="footer__link-btn" onClick={() => handleOverlayLink('about')}>About</button></li>
            <li><button type="button" className="footer__link-btn" onClick={() => handleOverlayLink('services')}>Services</button></li>
            <li><a href="#insights" onClick={(e) => { e.preventDefault(); document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' }); }}>Insights</a></li>
            <li><button type="button" className="footer__link-btn" onClick={() => handleOverlayLink('contact')}>Contact</button></li>
          </ul>
        </div>
        <div className="footer__col">
          <p className="footer__col-title">Social</p>
          <ul className="footer__list">
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter/X</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom container">
        <p className="footer__copy">© {currentYear} Dimitri — All rights reserved</p>
        <a href="#privacy" className="footer__privacy">Privacy Policy</a>
      </div>

      <style>{`
        .footer {
          background-color: transparent;
          padding-block: var(--space-section) 2rem;
          margin-top: var(--space-section);
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 600px) {
          .footer__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
          .footer__grid { grid-template-columns: repeat(4, 1fr); }
        }
        .footer__col-title {
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: var(--color-text);
        }
        .footer__name { font-weight: 600; margin: 0 0 0.25rem 0; }
        .footer__meta { margin: 0 0 0.5rem 0; color: var(--color-text-muted); font-size: 0.9rem; }
        .footer__tagline { margin: 0.75rem 0 0 0; font-size: 0.9rem; color: var(--color-text-muted); font-style: italic; }
        .footer__list { list-style: none; margin: 0; padding: 0; }
        .footer__list li { margin: 0; }
        .footer__list a, .footer__link-btn {
          display: inline-block;
          padding: 0.25rem 0;
          color: var(--color-text-muted);
          font-size: 0.95rem;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }
        .footer__list a:hover, .footer__link-btn:hover { color: var(--color-text); }
        .footer__link { color: var(--color-text); }
        .footer__bottom {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
        }
        .footer__copy { margin: 0; font-size: 0.9rem; color: var(--color-text-muted); }
        .footer__privacy { font-size: 0.9rem; color: var(--color-text-muted); }
      `}</style>
    </footer>
  )
}

export default Footer
