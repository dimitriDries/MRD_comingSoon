import { pushButtonClick, pushLinkClick } from '../utils/dataLayer'

function Header({ onOpenOverlay, onOpenContact, mobileMenuOpen, onToggleMobileMenu, onCloseMobileMenu }) {
  const handleNavClick = (type, target) => {
    if (type === 'overlay') {
      onOpenOverlay(target)
      pushLinkClick({
        componentName: target,
        componentType: 'nav-overlay',
        componentTarget: `#${target}`,
        componentText: target,
        section: 'header',
      })
    }
    onCloseMobileMenu?.()
  }

  const handleAnchorClick = (id, label) => {
    pushLinkClick({
      componentName: id,
      componentType: 'nav-anchor',
      componentTarget: `#${id}`,
      componentText: label.toLowerCase(),
      section: 'header',
    })
    onCloseMobileMenu?.()
  }

  const handleCtaClick = () => {
    onOpenContact()
    pushButtonClick({
      componentName: 'start-project',
      componentType: 'cta',
      componentTarget: '#contact',
      componentText: 'start a project',
      section: 'header',
    })
  }

  return (
    <header className="header" role="banner">
      <div className="header__inner container">
        <a href="#" className="header__logo" onClick={(e) => { e.preventDefault(); handleAnchorClick('hero', 'home'); }} aria-label="Home">
          <img src="/images/MonsieurData_logo.png" alt="MonsieurData — Dimitri Digital Analytics" width="160" height="48" />
        </a>

        <button
          type="button"
          className="header__menu-toggle"
          aria-expanded={mobileMenuOpen}
          aria-controls="header-nav"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={onToggleMobileMenu}
        >
          <span className="header__menu-icon" aria-hidden />
        </button>

        <nav id="header-nav" className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`} aria-label="Main">
          <ul className="header__nav-list">
            <li><a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); handleAnchorClick('hero', 'home'); }}>Home</a></li>
            <li><button type="button" className="header__nav-link" onClick={() => handleNavClick('overlay', 'about')}>About</button></li>
            <li><button type="button" className="header__nav-link" onClick={() => handleNavClick('overlay', 'services')}>Services</button></li>
            <li><a href="#how-i-work" onClick={(e) => { e.preventDefault(); document.getElementById('how-i-work')?.scrollIntoView({ behavior: 'smooth' }); handleAnchorClick('how-i-work', 'how i work'); }}>How I Work</a></li>
            <li><a href="#insights" onClick={(e) => { e.preventDefault(); document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' }); handleAnchorClick('insights', 'insights'); }}>Insights</a></li>
            <li><button type="button" className="header__nav-link" onClick={() => handleNavClick('overlay', 'contact')}>Contact</button></li>
          </ul>
          <button type="button" className="btn-primary header__cta" onClick={handleCtaClick}>
            Start a Project
          </button>
        </nav>
      </div>

      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
          height: var(--header-height);
        }
        .header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }
        .header__logo {
          display: flex;
          align-items: center;
        }
        .header__logo img {
          height: 2rem;
          width: auto;
        }
        .header__menu-toggle {
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .header__menu-icon {
          width: 1.5rem;
          height: 2px;
          background: var(--color-text);
          box-shadow: 0 6px 0 var(--color-text);
          border-radius: 2px;
        }
        .header__nav {
          position: fixed;
          top: var(--header-height);
          left: 0;
          right: 0;
          background: var(--color-bg);
          padding: 1rem;
          border-bottom: 1px solid var(--color-border);
          transform: translateY(-100%);
          visibility: hidden;
          transition: transform 0.2s ease, visibility 0.2s ease;
        }
        .header__nav--open {
          transform: translateY(0);
          visibility: visible;
        }
        .header__nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .header__nav-list li {
          margin: 0;
        }
        .header__nav-list a,
        .header__nav-link {
          display: block;
          padding: 0.75rem 0;
          color: var(--color-text);
          font-weight: 500;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 1rem;
          cursor: pointer;
        }
        .header__nav-list a:hover,
        .header__nav-link:hover {
          color: var(--ash-gray);
        }
        .header__cta {
          margin-top: 1rem;
          width: 100%;
        }
        @media (min-width: 768px) {
          .header__menu-toggle { display: none; }
          .header__nav {
            position: static;
            transform: none;
            visibility: visible;
            border: none;
            padding: 0;
            display: flex;
            align-items: center;
            gap: 1.5rem;
          }
          .header__nav-list {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          .header__nav-list a,
          .header__nav-link {
            padding: 0.5rem 0.75rem;
            width: auto;
          }
          .header__cta {
            margin-top: 0;
            width: auto;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
