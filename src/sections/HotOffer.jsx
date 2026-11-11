import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Reveal } from '../components/motion'

// Countdown starts at the Figma value (02d 04h 30m 50s) and ticks down live.
const START = ((2 * 24 + 4) * 60 + 30) * 60 + 50

function useCountdown() {
  const [deadline] = useState(() => Date.now() + START * 1000)
  const [left, setLeft] = useState(START)
  useEffect(() => {
    const id = setInterval(() => setLeft(Math.max(0, Math.round((deadline - Date.now()) / 1000))), 1000)
    return () => clearInterval(id)
  }, [deadline])
  return [Math.floor(left / 86400), Math.floor((left % 86400) / 3600), Math.floor((left % 3600) / 60), left % 60]
}

const pad = (n) => String(n).padStart(2, '0')

function Unit({ value, label, width = 60 }) {
  return (
    <div className="flex flex-col items-center gap-3" style={{ width }}>
      <div className="relative flex h-[60px] w-full items-center justify-center overflow-hidden rounded-lg bg-white p-[10px]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-[24px] leading-none font-medium tracking-[-0.96px] whitespace-nowrap text-title tabular-nums"
          >
            {pad(value)}
          </motion.span>
        </AnimatePresence>
      </div>
      <p className="w-full text-center text-[12px] leading-none tracking-[-0.24px] text-title">{label}</p>
    </div>
  )
}

export default function HotOffer() {
  const [d, h, m, s] = useCountdown()

  return (
    <section className="flex flex-col items-center gap-10 overflow-hidden bg-primary-soft px-5 py-14 md:px-10 md:py-[60px] lg:h-[737px] lg:flex-row lg:justify-between lg:px-[60px]">
      <div className="flex w-full flex-col items-start gap-[18px] lg:w-[583px] lg:shrink-0">
        <Reveal className="flex w-full flex-col gap-4 text-title">
          <div className="flex w-full flex-col gap-[7px]">
            <p className="text-[16px] leading-[1.5] md:text-[18px]">Todays Hot Offers</p>
            <h2 className="text-[34px] leading-[1.1] font-medium tracking-[-1.36px] md:text-[48px] md:tracking-[-1.92px]">
              Unlock 25% Off on Essential Medicines!
            </h2>
          </div>
          <p className="text-[16px] leading-[1.5] md:text-[18px]">
            Embrace wellness without brooking the bank! Enjoy a generous discount on a Wide range Of vital medicines at
            our pharmacy. Your health matters, and so does budget
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex items-center gap-4">
          <Unit value={d} label="Days" />
          <Unit value={h} label="Hours" width={61} />
          <Unit value={m} label="Minutes" />
          <Unit value={s} label="Seconds" />
        </Reveal>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 60, rotate: 4 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[554/617] w-full max-w-[554px] shrink-0"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 overflow-hidden"
        >
          <img
            src="/assets/hot-offer.png"
            alt="Real Roots Runder Milt supplement bottle with capsules"
            loading="lazy"
            className="absolute top-[-16.89%] left-[-24.43%] h-[133.77%] w-[148.85%] max-w-none"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
