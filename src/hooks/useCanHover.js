import { useEffect, useState } from 'react'

// Same rule as the CSS `hover` variant in index.css: hover effects only on a
// desktop (hover-capable pointer, at least 1024px wide).
const DESKTOP_HOVER = '(hover: hover) and (min-width: 1024px)'

export function useCanHover() {
  const [canHover, setCanHover] = useState(() => window.matchMedia(DESKTOP_HOVER).matches)
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_HOVER)
    const update = () => setCanHover(mq.matches)
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return canHover
}
