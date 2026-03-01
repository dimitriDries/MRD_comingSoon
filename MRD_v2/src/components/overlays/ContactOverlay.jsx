import { useState } from 'react'
import { pushFormSubmit } from '../../utils/dataLayer'
import Overlay from './Overlay'

function ContactOverlay({ onClose }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    pushFormSubmit({ formName: 'contact', formId: 'contact-form' })
    setSubmitted(true)
  }

  return (
    <Overlay title="Contact" onClose={onClose}>
      <h2 id="overlay-title" className="overlay-contact__title">Let's talk about your analytics setup.</h2>

      <form id="contact-form" className="overlay-contact__form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="contact-name">Name</label>
        <input type="text" id="contact-name" name="name" required placeholder="Your name" className="overlay-contact__input" />

        <label htmlFor="contact-company">Company</label>
        <input type="text" id="contact-company" name="company" placeholder="Company" className="overlay-contact__input" />

        <label htmlFor="contact-email">Email</label>
        <input type="email" id="contact-email" name="email" required placeholder="you@example.com" className="overlay-contact__input" />

        <label htmlFor="contact-website">Website</label>
        <input type="url" id="contact-website" name="website" placeholder="https://" className="overlay-contact__input" />

        <label htmlFor="contact-message">What do you need help with?</label>
        <textarea id="contact-message" name="message" rows={4} placeholder="Describe your analytics needs…" className="overlay-contact__input overlay-contact__textarea" />

        <label htmlFor="contact-budget">Budget range (optional)</label>
        <select id="contact-budget" name="budget" className="overlay-contact__input">
          <option value="">Select range</option>
          <option value="small">Small project</option>
          <option value="medium">Medium</option>
          <option value="large">Large / ongoing</option>
        </select>

        <label htmlFor="contact-timeline">Timeline (optional)</label>
        <select id="contact-timeline" name="timeline" className="overlay-contact__input">
          <option value="">Select timeline</option>
          <option value="asap">ASAP</option>
          <option value="1-3">1–3 months</option>
          <option value="3-6">3–6 months</option>
          <option value="6+">6+ months</option>
        </select>

        <button type="submit" className="btn-primary overlay-contact__submit">
          Send Message
        </button>
      </form>

      {submitted && (
        <p className="overlay-contact__notice" role="status">
          Thank you. (Form is placeholder — no message is sent.)
        </p>
      )}
      <p className="overlay-contact__notice">I typically respond within 1–2 business days.</p>

      <style>{`
        .overlay-contact__title { margin: 0 0 1.5rem 0; font-size: 1.5rem; }
        .overlay-contact__form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .overlay-contact__form label { font-size: 0.9rem; font-weight: 500; }
        .overlay-contact__input {
          padding: 0.6rem 0.75rem;
          background: var(--color-input-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text);
          font-family: inherit;
          font-size: 1rem;
        }
        .overlay-contact__input::placeholder { color: var(--color-text-muted); }
        .overlay-contact__input:focus {
          outline: 2px solid var(--arylide-yellow);
          outline-offset: 0;
        }
        .overlay-contact__textarea { min-height: 100px; resize: vertical; }
        .overlay-contact__submit { margin-top: 0.5rem; align-self: flex-start; }
        .overlay-contact__notice { margin: 0; font-size: 0.9rem; color: var(--color-text-muted); }
      `}</style>
    </Overlay>
  )
}

export default ContactOverlay
