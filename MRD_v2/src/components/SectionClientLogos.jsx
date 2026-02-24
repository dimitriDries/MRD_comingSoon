function SectionClientLogos() {
  return (
    <div className="container">
      <div className="section-logos">
        <h2 className="section-logos__headline">Trusted by growing teams and digital-first companies.</h2>
        <div className="section-logos__grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="logo-placeholder" aria-hidden>
              Client logo
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .section-logos__headline { font-size: 1.5rem; margin: 0 0 2rem 0; text-align: center; }
        .section-logos__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        @media (min-width: 600px) {
          .section-logos__grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 900px) {
          .section-logos__grid { grid-template-columns: repeat(6, 1fr); }
        }
        .logo-placeholder {
          aspect-ratio: 2/1;
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-muted);
          font-size: 0.85rem;
          filter: grayscale(1);
        }
      `}</style>
    </div>
  )
}

export default SectionClientLogos
