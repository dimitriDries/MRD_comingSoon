import { useEffect, useRef } from 'react'

function Overlay({ title, onClose, children }) {
  const overlayRef = useRef(null)
  const previousActiveElement = useRef(null)

  useEffect(() => {
    previousActiveElement.current = document.activeElement
    overlayRef.current?.focus({ preventScroll: true })
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const el = overlayRef.current
        if (!el) return
        const focusable = el.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last?.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first?.focus()
          }
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previousActiveElement.current?.focus?.()
    }
  }, [onClose])

  return (
    <div
      ref={overlayRef}
      className="overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'overlay-title' : undefined}
      tabIndex={-1}
    >
      <div className="overlay__backdrop" onClick={onClose} aria-hidden="true" />
      <div className="overlay__panel">
        <button
          type="button"
          className="overlay__close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="overlay__content">
          {children}
        </div>
      </div>
      <style>{`
        .overlay {
          position: fixed;
          inset: 0;
          z-index: 2000;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 0;
          overflow-y: auto;
        }
        .overlay__backdrop {
          position: fixed;
          inset: 0;
          background: var(--color-overlay-backdrop);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          cursor: pointer;
        }
        .overlay__panel {
          position: relative;
          z-index: 1;
          width: 100%;
          min-height: 100%;
          max-width: 900px;
          margin: 0 auto;
          background: var(--color-bg-elevated);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        }
        @media (min-width: 768px) {
          .overlay__panel {
            min-height: auto;
            margin: 2rem auto;
            border-radius: var(--radius-lg);
            max-height: calc(100vh - 4rem);
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }
          .overlay__content { overflow-y: auto; flex: 1; }
        }
        .overlay__close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          z-index: 2;
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          line-height: 1;
          color: var(--color-text);
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: background var(--duration-transition) ease;
        }
        .overlay__close:hover { background: var(--color-border); }
        .overlay__close:focus-visible { outline: 2px solid var(--arylide-yellow); outline-offset: 2px; }
        .overlay__content { padding: 3rem 1.5rem 2rem; }
        @media (min-width: 768px) {
          .overlay__content { padding: 3rem 2rem 2rem; padding-top: 3.5rem; }
        }
      `}</style>
    </div>
  )
}

export default Overlay
