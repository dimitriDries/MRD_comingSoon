import { useState, useEffect } from 'react'

const TESTIMONIALS = [
  {
    quote: "Dimitri transformed our unreliable tracking setup into a structured analytics system we can actually trust.",
    name: "Name",
    role: "Role",
    company: "Company",
  },
  {
    quote: "Working with Dimitri gave us clarity on our data layer and confidence in our GA4 implementation. Highly recommend.",
    name: "Client Two",
    role: "Head of Marketing",
    company: "Example Co",
  },
  {
    quote: "Clear documentation, scalable architecture, and a partner who thinks about long-term maintainability. Exactly what we needed.",
    name: "Client Three",
    role: "Product Lead",
    company: "Startup Inc",
  },
]

const AUTO_ADVANCE_MS = 4500

function SectionTestimonial() {
  const count = TESTIMONIALS.length
  const list = [...TESTIMONIALS, ...TESTIMONIALS]
  const totalCards = list.length

  const [offset, setOffset] = useState(0)
  const [transition, setTransition] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setOffset((prev) => (prev + 1) % (count + 1))
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [count])

  useEffect(() => {
    if (offset !== count) return
    const t = setTimeout(() => {
      setTransition(false)
      setOffset(0)
      requestAnimationFrame(() => requestAnimationFrame(() => setTransition(true)))
    }, 820)
    return () => clearTimeout(t)
  }, [offset, count])

  const oneCardPercent = 100 / totalCards
  const translateX = -offset * oneCardPercent

  return (
    <div className="container">
      <div className="section-testimonial-wrap section__stagger">
        <h2 className="section-testimonial__headline">What clients say</h2>
        <div className="section-testimonial__viewport" aria-hidden="true">
          <div
            className="section-testimonial__track"
            style={{
              transform: `translateX(${translateX}%)`,
              transition: transition ? 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none',
            }}
          >
            {list.map((t, i) => (
              <blockquote key={i} className="section-testimonial__card">
                <p className="section-testimonial__quote">"{t.quote}"</p>
                <footer className="section-testimonial__footer">
                  <cite>{t.name}</cite>
                  <span className="section-testimonial__role">{t.role}</span>
                  <span className="section-testimonial__company">{t.company}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .section-testimonial-wrap { position: relative; }
        .section-testimonial__headline { font-size: 1.75rem; margin: 0 0 1.5rem 0; text-align: center; }
        @media (max-width: 767px) {
          .section-testimonial__headline { font-size: 1.5rem; }
        }
        .section-testimonial__viewport {
          overflow: hidden;
          margin-inline: calc(-1 * var(--container-padding, 1.25rem));
          width: 100%;
        }
        .section-testimonial__track {
          --gap: 1rem;
          display: flex;
          gap: var(--gap);
          width: max-content;
          padding-inline: var(--container-padding, 1.25rem);
        }
        .section-testimonial__card {
          flex: 0 0 calc(100vw - 2 * var(--container-padding, 1.25rem) - 2 * var(--gap));
          min-width: 280px;
          max-width: calc(100vw - 2 * var(--container-padding) - 2 * var(--gap));
          margin: 0;
          padding: 1.75rem;
          background: var(--color-bg-elevated);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--color-accent);
          box-shadow: var(--shadow-card);
        }
        @media (min-width: 600px) {
          .section-testimonial__card {
            flex: 0 0 calc((100vw - 2 * var(--container-padding) - 3 * var(--gap)) / 2);
            max-width: none;
          }
        }
        @media (min-width: 900px) {
          .section-testimonial__card {
            flex: 0 0 calc((min(100vw, 1200px) - 2 * var(--container-padding) - 4 * var(--gap)) / 3);
          }
        }
        .section-testimonial__quote { font-size: 1.1rem; margin: 0 0 0.75rem 0; font-style: italic; line-height: 1.5; }
        .section-testimonial__footer { color: var(--color-text-muted); font-size: 0.9rem; }
        .section-testimonial__footer cite { font-style: normal; font-weight: 600; }
        .section-testimonial__role::before,
        .section-testimonial__company::before { content: ' · '; }
      `}</style>
    </div>
  )
}

export default SectionTestimonial
