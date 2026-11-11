import { motion } from 'framer-motion'
import { Reveal } from '../components/motion'

// Real hospital logos (SVG, from Wikimedia Commons). Each logo is fitted into
// the same bounding box the "logoipsum" placeholders used in Figma, with a
// per-logo height so wide wordmarks and tall emblems look optically balanced.
const hospitals = [
  { name: 'Cleveland Clinic', src: '/assets/hospitals/cleveland.svg', h: 34 },
  { name: 'Penn Medicine', src: '/assets/hospitals/penn.svg', h: 30 },
  { name: 'Mount Sinai Health System', src: '/assets/hospitals/mountsinai.svg', h: 58 },
  { name: 'Northwell Health', src: '/assets/hospitals/northwell.svg', h: 54 },
  { name: 'UCLA Health', src: '/assets/hospitals/ucla.svg', h: 32 },
  { name: 'Cedars-Sinai', src: '/assets/hospitals/cedars.svg', h: 44 },
  { name: 'Kaiser Permanente', src: '/assets/hospitals/kaiser.svg', h: 40 },
  { name: 'NHS', src: '/assets/hospitals/nhs.svg', h: 38 },
]

export default function Hospitals() {
  return (
    <section id="partners" className="flex flex-col items-center gap-8 bg-surface px-5 py-14 md:px-10 md:py-[60px] lg:px-[60px]">
      <Reveal
        as="h2"
        className="text-center text-[30px] font-medium leading-[1.1] tracking-[-1.2px] text-primary-pressed md:text-[40px] lg:text-[48px] lg:tracking-[-1.92px]"
      >
        Collaborated With 20+ Hospitals In The World
      </Reveal>

      <div className="grid w-full grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4 lg:gap-x-[18.67px] lg:gap-y-6">
        {hospitals.map((h, i) => (
          <motion.div
            key={h.name}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group flex h-[80px] items-center justify-center overflow-clip rounded-2xl bg-white px-4 transition-shadow duration-300 hover:shadow-[0_12px_30px_-14px_rgba(6,50,37,0.25)] md:h-[98px] md:px-6"
          >
            <img
              src={h.src}
              alt={`${h.name} logo`}
              loading="lazy"
              style={{ '--logo-h': `${h.h}px` }}
              className="h-[calc(var(--logo-h)*0.78)] w-auto max-w-[80%] object-contain transition-transform duration-500 group-hover:scale-105 md:h-[var(--logo-h)] md:max-w-[190px]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
