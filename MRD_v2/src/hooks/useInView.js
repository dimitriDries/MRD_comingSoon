import { useState, useEffect } from 'react'

/**
 * Returns true when the element is in view (Intersection Observer).
 * @param {React.RefObject<HTMLElement|null>} ref
 * @param {{ threshold?: number, rootMargin?: string }} options
 * @returns {boolean}
 */
export function useInView(ref, options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -40px 0px' } = options
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref?.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { threshold, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold, rootMargin])

  return isInView
}
