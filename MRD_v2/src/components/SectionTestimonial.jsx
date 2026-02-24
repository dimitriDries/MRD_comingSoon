function SectionTestimonial() {
  return (
    <div className="container">
      <blockquote className="section-testimonial">
        <p className="section-testimonial__quote">
          "Dimitri transformed our unreliable tracking setup into a structured analytics system we can actually trust."
        </p>
        <footer className="section-testimonial__footer">
          <cite>Name</cite>
          <span className="section-testimonial__role">Role</span>
          <span className="section-testimonial__company">Company</span>
        </footer>
      </blockquote>
      <style>{`
        .section-testimonial {
          margin: 0;
          padding: 2rem;
          background: var(--color-bg-elevated);
          border-radius: 4px;
          border-left: 4px solid var(--color-accent);
        }
        .section-testimonial__quote { font-size: 1.25rem; margin: 0 0 1rem 0; font-style: italic; }
        .section-testimonial__footer { color: var(--color-text-muted); font-size: 0.95rem; }
        .section-testimonial__footer cite { font-style: normal; font-weight: 600; }
        .section-testimonial__role::before,
        .section-testimonial__company::before { content: ' · '; }
      `}</style>
    </div>
  )
}

export default SectionTestimonial
