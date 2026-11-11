import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import Icon from '../components/Icon'

const ease = [0.22, 1, 0.36, 1]

function Logo({ className = '' }) {
  return (
    <a href="#top" className={`flex items-center gap-[6px] ${className}`} aria-label="MedCal home">
      <img src="/assets/logo-mark.svg" alt="" width="31.3" height="31.3" className="size-[31.3px]" />
      <span className="text-[25.244px] font-medium leading-[1.1] tracking-[-1.01px] text-white">MedCal</span>
    </a>
  )
}

const services = ['Prescriptions', 'Lab Tests', 'Health Checkups', 'Home Delivery']

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 80))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,height,box-shadow] duration-500 ${
        scrolled ? 'bg-primary-pressed/85 shadow-lg shadow-black/10 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className={`mx-auto flex items-center justify-between px-5 transition-[height] duration-500 md:px-10 lg:px-[60px] ${
          scrolled ? 'h-[72px]' : 'h-[72px] lg:h-[90px]'
        }`}
      >
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-8 text-[18px] leading-none tracking-[-0.27px] text-white capitalize">
            <a href="#top" className="link-underline">Home</a>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-[6px] capitalize"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((s) => !s)}
              >
                Services
                <Icon
                  name="chevron-down"
                  size={18}
                  className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 mt-3 w-52 -translate-x-1/2 rounded-xl bg-white p-2 text-[15px] tracking-normal text-title normal-case shadow-xl"
                  >
                    {services.map((s) => (
                      <li key={s}>
                        <a href="#products" className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-primary-soft hover:text-primary">
                          {s}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            <a href="#contact" className="link-underline">Contact us</a>
          </div>
          <a
            href="#products"
            className="flex h-12 items-center justify-center rounded-xl border border-white px-7 text-[16px] font-medium leading-none tracking-[-0.24px] text-white capitalize transition-colors duration-300 hover:bg-white hover:text-title"
          >
            Get started now
          </a>
        </div>

        <button
          className="text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'xmark' : 'menu'} size={26} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden bg-primary-pressed/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pt-2 pb-6 text-[18px] text-white md:px-10">
              {[
                ['Home', '#top'],
                ['Services', '#products'],
                ['Contact us', '#contact'],
              ].map(([label, href]) => (
                <a key={label} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-3">
                  {label}
                </a>
              ))}
              <a
                href="#products"
                onClick={() => setOpen(false)}
                className="mt-4 flex h-12 items-center justify-center rounded-xl bg-white text-[16px] font-medium text-title"
              >
                Get started now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// Figma image fill is cropped and mirrored horizontally (imageTransform
// [[-0.927, 0, 0.964], [0, 0.785, 0.030]]). Between 1024px and 1919px the
// exact crop is reproduced; other widths fall back to object-cover.
const exactCrop =
  'lg:max-[1919px]:inset-auto lg:max-[1919px]:left-[-3.89%] lg:max-[1919px]:top-[-3.77%] lg:max-[1919px]:h-[127.35%] lg:max-[1919px]:w-[107.85%] lg:max-[1919px]:object-fill'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[640px] items-end overflow-hidden p-5 pb-12 md:h-[720px] md:p-10 lg:h-[783px] lg:p-[60px] min-[1920px]:h-[844px]"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease }}
      >
        <img
          src="/assets/hero.webp"
          alt="Pharmacist helping a customer review her prescription on a tablet"
          width="1536"
          height="1024"
          fetchPriority="high"
          className={`absolute inset-0 size-full max-w-none -scale-x-100 object-cover object-[45%_center] ${exactCrop}`}
        />
      </motion.div>
      {/* Figma: radial gradient (transparent → black) at 35% */}
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,0) 0%, #000 100%)' }}
      />
      {/* Extra bottom scrim on small screens for text legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/55 to-transparent lg:hidden" />

      <Navbar />

      <div className="relative flex w-full max-w-[616px] flex-col items-start gap-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="flex items-center gap-1 rounded-full bg-white/12 px-6 py-2 backdrop-blur-sm"
        >
          <Icon name="podium" size={20} className="text-white" />
          <span className="text-[14px] leading-[1.3] text-white">Rank 1 pharmacy in the city</span>
        </motion.div>

        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col gap-3 text-white">
            <h1 className="text-[38px] font-medium leading-[1.1] tracking-[-1.5px] md:text-[48px] lg:text-[56px] lg:tracking-[-2.24px]">
              {['Professional Pharmacy', 'Services You Can Trust'].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    className="block"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease, delay: 0.45 + i * 0.12 }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.8 }}
              className="max-w-[452px] text-[16px] leading-[1.5] md:text-[18px]"
            >
              Providing expert pharmacal care and personalized service to out community
            </motion.p>
          </div>
          <motion.a
            href="#products"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.95 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center rounded-xl bg-white px-6 py-[14px] text-[14px] leading-none text-title"
          >
            Get started now
          </motion.a>
        </div>
      </div>
    </section>
  )
}
