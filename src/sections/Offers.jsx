import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

function Badge() {
  return (
    <span className="flex items-center justify-center rounded-full bg-white px-4 py-1 text-[14px] leading-[1.5] tracking-[-0.98px] whitespace-nowrap text-title">
      25% off
    </span>
  )
}

function Price({ value }) {
  return (
    <div className="relative z-10 flex items-center gap-[6px] whitespace-nowrap">
      <p className="text-[28px] leading-none font-semibold tracking-[-2.24px] text-title md:text-[32px]">{value}</p>
      <p className="text-[14px] leading-none tracking-[-0.42px] text-[#808080]">including tax</p>
    </div>
  )
}

function Title({ children }) {
  return <h3 className="w-[200px] font-syne text-[26px] md:w-[250px] leading-none font-medium tracking-[-1.28px] text-title md:text-[32px]">{children}</h3>
}

const cardMotion = (delay) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.8, ease, delay },
})

// On phones the product imagery shrinks toward the right edge so it never
// overlaps the title or price.
const mobileScale = 'max-md:origin-right max-md:scale-[0.62]'

// Product images float gently on hover.
const floatHover = 'transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:rotate-[-2deg]'

export default function Offers() {
  return (
    <section id="offers" className="flex flex-col gap-6 bg-white px-5 py-14 md:px-10 md:py-[60px] lg:h-[637px] lg:flex-row lg:items-stretch lg:px-[60px]">
      {/* Black Garlic Oil */}
      <motion.a
        href="#products"
        {...cardMotion(0)}
        className="group relative flex h-[420px] shrink-0 flex-col items-start justify-between overflow-clip rounded-[32px] bg-[#d7f0f4] p-6 md:h-[517px] md:p-8 lg:h-full lg:w-[50%] lg:max-w-[720px]"
      >
        <div className="relative z-10 flex flex-col items-start gap-5">
          <Badge />
          <Title>Black Garlic Oil</Title>
        </div>
        <Price value="$37.00" />
        <div className={`absolute top-[60px] right-[-30px] h-[380px] w-[257px] rounded-[20px] md:top-[36px] md:right-[46px] md:h-[494px] md:w-[334px] ${floatHover}`}>
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]">
            <img
              src="/assets/offer-garlic.png"
              alt="Hand holding a bottle of black garlic oil"
              className="absolute top-[-15.33%] left-[-1.15%] h-[117.71%] w-[115.86%] max-w-none"
            />
          </div>
        </div>
      </motion.a>

      <div className="flex min-w-px flex-1 flex-col gap-6">
        {/* Hand Sanitizer */}
        <motion.a
          href="#products"
          {...cardMotion(0.12)}
          className="group relative flex h-[246px] w-full flex-1 flex-col items-start justify-between overflow-clip rounded-[32px] bg-[#eaedf9] p-6 md:p-8"
        >
          <div className={`pointer-events-none absolute inset-0 ${mobileScale}`}>
          <div className="absolute top-[204px] right-[51px] h-[10px] w-[130px]">
            <div className="absolute" style={{ inset: '-140% -10.77%' }}>
              <img src="/assets/offer-shadow-1.svg" alt="" className="block size-full max-w-none" />
            </div>
          </div>
          <div className={`absolute right-[106px] h-[172px] w-[68px] -translate-y-1/2 ${floatHover}`} style={{ top: 'calc(50% - 2.25px)' }}>
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img src="/assets/offer-sanitizer.png" alt="" className="absolute top-[-11.69%] left-[-117.79%] h-[132.1%] w-[335.57%] max-w-none" />
            </div>
          </div>
          </div>
          <div className="relative z-10 flex flex-col items-start gap-5">
            <Badge />
            <Title>Hand Sanitizer</Title>
          </div>
          <Price value="$22.90" />
          <div className={`pointer-events-none absolute inset-0 ${mobileScale}`}>
            <div className={`absolute right-[60px] h-[202px] w-[80px] -translate-y-1/2 ${floatHover}`} style={{ top: 'calc(50% - 2.25px)' }}>
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/assets/offer-sanitizer.png"
                  alt="Hand sanitizer bottles"
                  className="absolute top-[-11.69%] left-[-117.79%] h-[132.1%] w-[335.57%] max-w-none"
                />
              </div>
            </div>
          </div>
        </motion.a>

        {/* Body Lotion */}
        <motion.a
          href="#products"
          {...cardMotion(0.24)}
          className="group relative flex h-[246px] w-full flex-1 flex-col items-start justify-between overflow-clip rounded-[32px] bg-[#f7efe0] p-6 md:p-8"
        >
          <div className={`pointer-events-none absolute inset-0 ${mobileScale}`}>
            <div className="absolute top-[200px] right-[56px] h-[10px] w-[130px]">
              <div className="absolute" style={{ inset: '-140% -10.77%' }}>
                <img src="/assets/offer-shadow-2.svg" alt="" className="block size-full max-w-none" />
              </div>
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-start gap-5">
            <Badge />
            <Title>Body Lotion</Title>
          </div>
          <Price value="$29.00" />
          <div className={`pointer-events-none absolute inset-0 ${mobileScale}`}>
            <div className={`absolute top-[20px] right-[62px] h-[190px] w-[132px] ${floatHover}`}>
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/assets/offer-lotion.png"
                  alt="Sunscreen body lotion bottles"
                  className="absolute top-[-12.66%] left-[-38.83%] h-[122.97%] w-[177.65%] max-w-none"
                />
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  )
}
