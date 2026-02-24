import { pushButtonClick } from '../../utils/dataLayer'
import Overlay from './Overlay'

function AboutOverlay({ onClose, onOpenContact }) {
  const handleStartProject = () => {
    onOpenContact()
    pushButtonClick({ componentName: 'start-project', componentType: 'cta', componentTarget: '#contact', componentText: 'start a project', section: 'about-overlay' })
  }

  return (
    <Overlay title="About" onClose={onClose}>
      <h2 id="overlay-title" className="overlay-about__title">About</h2>

      <section className="overlay-about__block">
        <h3>Who I Am</h3>
        <p>I'm a freelance Digital Analytics Developer focused on building scalable measurement systems.</p>
        <p>Short professional background summary.</p>
      </section>

      <section className="overlay-about__block">
        <h3>What I Do</h3>
        <ul>
          <li>Tracking infrastructure design</li>
          <li>GTM implementations</li>
          <li>GA4 & product analytics setup</li>
          <li>Server-side tracking</li>
          <li>Data validation frameworks</li>
        </ul>
      </section>

      <section className="overlay-about__block">
        <h3>How I Work</h3>
        <ul>
          <li>Business-first thinking</li>
          <li>Documentation-driven</li>
          <li>Scalable architecture</li>
          <li>Clean naming conventions</li>
          <li>Long-term maintainability</li>
        </ul>
      </section>

      <section className="overlay-about__block">
        <h3>What This Means For You</h3>
        <ul>
          <li>Reliable data</li>
          <li>Faster experimentation</li>
          <li>Clear reporting structures</li>
          <li>Reduced engineering friction</li>
          <li>Confidence in decisions</li>
        </ul>
      </section>

      <p className="overlay-about__cta-text">Let's build a tracking foundation you can rely on.</p>
      <button type="button" className="btn-primary" onClick={handleStartProject}>
        Start a Project
      </button>

      <style>{`
        .overlay-about__title { margin: 0 0 1.5rem 0; font-size: 1.5rem; }
        .overlay-about__block { margin-bottom: 2rem; }
        .overlay-about__block h3 { font-size: 1.15rem; margin: 0 0 0.75rem 0; }
        .overlay-about__block p, .overlay-about__block ul { margin: 0 0 0.5rem 0; color: var(--color-text-muted); }
        .overlay-about__block ul { padding-left: 1.5rem; }
        .overlay-about__cta-text { margin: 2rem 0 1rem 0; font-weight: 600; }
      `}</style>
    </Overlay>
  )
}

export default AboutOverlay
