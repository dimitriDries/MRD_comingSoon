import { useState, useEffect } from 'react'

/* Wide, low rectangles (no squares); horizontal pill-style bars */
const SHAPES = [
  { width: 420, height: 100, left: '82%', top: '10%', color: 'var(--turkey-red)', opacity: 0.14, factor: 0.18 },
  { width: 320, height: 30, left: '-6%', top: '38%', color: 'var(--arylide-yellow)', opacity: 0.15, factor: -0.14 },
  { width: 380, height: 90, left: '2%', top: '72%', color: 'var(--turkey-red)', opacity: 0.12, factor: 0.22 },
  { width: 280, height: 70, left: '78%', top: '55%', color: 'var(--arylide-yellow)', opacity: 0.13, factor: -0.2 },
  { width: 360, height: 40, left: '-10%', top: '6%', color: 'var(--turkey-red)', opacity: 0.11, factor: -0.12 },
  { width: 260, height: 10, left: '70%', top: '82%', color: 'var(--arylide-yellow)', opacity: 0.1, factor: 0.15 },
]

function ScrollShapes() {
  const [scrollY, setScrollY] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const move = reduceMotion ? 0 : scrollY

  return (
    <div className="scroll-shapes" aria-hidden="true">
      {SHAPES.map((s, i) => (
        <div
          key={i}
          className="scroll-shapes__shape scroll-shapes__shape--rect"
          style={{
            left: s.left,
            top: s.top,
            width: s.width,
            height: s.height,
            backgroundColor: s.color,
            opacity: s.opacity,
            transform: `translateX(${move * s.factor}px)`,
          }}
        />
      ))}
      <style>{`
        .scroll-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 5;
          pointer-events: none;
          overflow: hidden;
        }
        .scroll-shapes__shape {
          position: absolute;
          will-change: transform;
        }
        .scroll-shapes__shape--rect {
          border-radius: 999px;
        }
      `}</style>
    </div>
  )
}

export default ScrollShapes
