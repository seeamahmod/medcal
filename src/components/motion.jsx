import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const ease = [0.22, 1, 0.36, 1]

// Fades + slides children up when they scroll into view.
export function Reveal({ children, delay = 0, y = 32, className = '', as = 'div', ...rest }) {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease, delay }}
      {...rest}
    >
      {children}
    </Comp>
  )
}

// Container that staggers its <StaggerItem> children.
export function Stagger({ children, className = '', stagger = 0.08, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', y = 28, ...rest }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

// Counts a number up when it scrolls into view, e.g. "26+", "5k+", "1M".
export function CountUp({ value }) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? Number(match[1]) : 0
  const suffix = match ? match[2] : value
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setN(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, target])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}
