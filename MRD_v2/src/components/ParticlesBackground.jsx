import { useRef, useEffect } from 'react'

const PARTICLES_CONFIG = {
  particles: {
    number: { value: 250, density: { enable: true, value_area: 1000 } },
    color: { value: '#5c5c5c' },
    shape: { type: 'circle' },
    opacity: { value: 0.28 },
    size: { value: 1.5 },
    line_linked: { enable: true, distance: 100, color: '#5c5c5c', opacity: 0.2, width: 1 },
    move: { enable: true, speed: 0.4, direction: 'none', out_mode: 'out' },
  },
  interactivity: {
    detect_on: 'window',
    events: { onhover: { enable: false }, onclick: { enable: true, mode: 'push' }, resize: false },
    modes: { push: { particles_nb: 4 } },
  },
  retina_detect: false,
}

function ParticlesBackground() {
  const containerRef = useRef(null)
  const initDone = useRef(false)

  useEffect(() => {
    if (!containerRef.current || initDone.current) return
    const el = containerRef.current
    if (typeof window.particlesJS !== 'function') return
    const init = () => {
      if (!containerRef.current) return
      try {
        window.particlesJS(el.id, PARTICLES_CONFIG)
        initDone.current = true
      } catch (_) {}
    }
    if (document.readyState === 'complete') {
      requestAnimationFrame(init)
    } else {
      window.addEventListener('load', () => requestAnimationFrame(init))
    }
    return () => {}
  }, [])

  return (
    <div
      id="particles-bg"
      ref={containerRef}
      className="particles-bg"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}

export default ParticlesBackground
