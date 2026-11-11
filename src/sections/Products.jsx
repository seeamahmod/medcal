import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { Stagger, StaggerItem } from '../components/motion'
import { useCanHover } from '../hooks/useCanHover'

const categories = [
  { label: ['All Products'], bg: '#e4d2cb', src: 'cat-all.webp', box: 'left-[6px] top-[23px] h-[51px] w-[86px]' },
  { label: ['Herbal Care'], bg: '#fae287', src: 'cat-herbal.png', box: 'left-[13.75px] top-[14px] size-[70px]' },
  { label: ['Medicine'], bg: '#cbf7f8', src: 'cat-medicine.png', box: 'left-[12px] top-[12px] size-[74px]' },
  { label: ['Lab Tests'], bg: '#f0d8e4', src: 'cat-lab.png', box: 'left-[8.5px] top-[9px] size-[80px]' },
  { label: ['Healthcare'], bg: '#d1f7d2', src: 'cat-healthcare.png', box: 'left-[23px] top-[18px] h-[62px] w-[53px]' },
  { label: ['Ayurvedic care'], bg: '#e9e9e9', src: 'cat-ayurvedic.webp', box: 'left-[7px] top-[7px] size-[79px]' },
  { label: ['Mother and', 'baby care'], bg: '#d4d5fe', src: 'cat-mother.png', box: 'left-[18px] top-[17px] h-[64px] w-[63px]' },
  { label: ['Healthcare', 'devices'], bg: '#fde5d0', src: 'cat-devices.webp', box: 'left-[17.25px] top-[17px] size-[64px] -rotate-90' },
  { label: ['Fitness', 'Supplements'], bg: '#f0fdb8', src: 'cat-fitness.webp', box: 'left-[8.5px] top-[8px] size-[82px]' },
]

const img = (src, cls, style) => (
  <div className={`absolute ${cls}`} style={style}>
    <img src={`/assets/${src}`} alt="" loading="lazy" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" />
  </div>
)

// Image boxes from Figma; all are horizontally centred in the 296px image area.
const products = [
  { category: 'Blood Flow Management', name: 'PressureRelief Formula', media: img('prod-1.webp', 'left-1/2 size-[208px] -translate-x-1/2 -translate-y-1/2', { top: 'calc(50% + 0.5px)' }) },
  { category: 'Heart Function', name: 'CardioCare Supplement', media: img('prod-2.webp', 'left-1/2 size-[260px] -translate-x-1/2 -translate-y-1/2', { top: 'calc(50% + 0.5px)' }) },
  { category: 'Cardiovascular Wellness', name: 'Hypertension Helper', media: img('prod-3.webp', 'top-[13px] h-[238px] w-[298px] -translate-x-1/2', { left: 'calc(50% + 5px)' }) },
  { category: 'Heart Disease Prevention', name: 'VitalFlow Medicine', media: img('prod-4.webp', 'left-1/2 top-[22px] size-[218px] -translate-x-1/2') },
  { category: 'Circulatory Wellness', name: 'CardioCare Meds', media: img('prod-5.webp', 'left-1/2 top-[20px] size-[224px] -translate-x-1/2') },
  { category: 'Heart and Vessel Health', name: 'HeartEase Formula', media: img('prod-6.webp', 'left-1/2 top-[2px] size-[260px] -translate-x-1/2') },
  { category: 'Cardiac Support', name: 'VitalHeart Solution', media: img('prod-7.webp', 'left-1/2 top-[-10px] size-[280px] -translate-x-1/2') },
  { category: 'Vascular Care', name: 'BloodFlow Plus', media: img('prod-8.png', 'left-1/2 top-0 size-[270px] -translate-x-1/2') },
]

export default function Products() {
  const canHover = useCanHover()

  return (
    <section id="products" className="flex flex-col gap-8 bg-surface px-5 py-14 md:px-10 md:py-[60px] lg:px-[60px]">
      <Stagger
        stagger={0.05}
        className="-mx-5 flex snap-x items-start gap-6 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:-mx-10 md:px-10 lg:mx-0 lg:justify-between lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {categories.map((c) => (
          <StaggerItem key={c.src} className="shrink-0 snap-start">
            <a href="#products" className="group flex flex-col items-center gap-3">
              <motion.span
                whileHover={canHover ? { scale: 1.08, rotate: -4 } : undefined}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="relative block size-[98px] overflow-clip rounded-full"
                style={{ backgroundColor: c.bg }}
              >
                {img(c.src, c.box)}
              </motion.span>
              <span className="text-center text-[16px] leading-[1.5] font-medium whitespace-nowrap text-title md:text-[18px]">
                {c.label.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </span>
            </a>
          </StaggerItem>
        ))}
      </Stagger>

      <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <StaggerItem key={p.name}>
            <ProductCard {...p} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
