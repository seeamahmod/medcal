import Icon from '../components/Icon'
import ProductCard from '../components/ProductCard'
import { Reveal, Stagger, StaggerItem } from '../components/motion'

// Image-area compositions copied from Figma (positions relative to the
// 296px-wide image box, expressed as offsets from its horizontal centre so
// they stay centred at any card width).
const Crop = ({ src, className, style }) => (
  <div className="absolute inset-0 overflow-hidden">
    <img src={src} alt="" className={`absolute max-w-none ${className}`} style={style} />
  </div>
)

const products = [
  {
    category: 'Heart Health',
    name: 'Cardioplus Remedy',
    media: (
      <>
        <div className="absolute top-[209px] h-[7px] w-[139px]" style={{ left: 'calc(50% + 3.5px)', translate: '-50% 0' }}>
          <div className="absolute" style={{ inset: '-628.57% -31.65%' }}>
            <img src="/assets/trend-shadow.svg" alt="" className="block size-full max-w-none" />
          </div>
        </div>
        <div className="absolute top-[60px] h-[143px] w-[86px]" style={{ left: 'calc(50% + 30px)', translate: '-50% 0' }}>
          <Crop src="/assets/trend-1.webp" className="top-[-31.65%] left-[-81.89%] h-[157.73%] w-[263.79%]" />
        </div>
        <div className="absolute top-[37px] h-[189px] w-[113px]" style={{ left: 'calc(50% - 15.5px)', translate: '-50% 0' }}>
          <Crop src="/assets/trend-1.webp" className="top-[-31.65%] left-[-81.89%] h-[157.73%] w-[263.79%]" />
        </div>
      </>
    ),
  },
  {
    category: 'Circulatory System',
    name: 'HeartEase Solution',
    media: (
      <div
        className="absolute top-[15.1px] flex h-[234.249px] w-[160.81px] items-center justify-center"
        style={{ left: 'calc(50% + 4.085px)', translate: '-50% 0' }}
      >
        <div className="flex-none rotate-[20.77deg]">
          <div className="relative h-[216.432px] w-[89.907px]">
            <Crop src="/assets/trend-2.webp" className="top-[-22.51%] left-[-124.55%] h-[145.02%] w-[349.09%]" />
          </div>
        </div>
      </div>
    ),
  },
  {
    category: 'Cardiac Care',
    name: 'Vasodilate Plus',
    media: (
      <div className="absolute top-1/2 h-[195px] w-[107px] -translate-x-1/2 -translate-y-1/2" style={{ left: 'calc(50% - 0.5px)' }}>
        <Crop src="/assets/trend-3.webp" className="top-0 left-[-82.34%] h-full w-[267.66%]" />
      </div>
    ),
  },
  {
    category: 'Vascular Health',
    name: 'BloodFlow Booster',
    media: (
      <div className="absolute top-1/2 size-[195px] -translate-x-1/2 -translate-y-1/2" style={{ left: 'calc(50% - 0.5px)' }}>
        <img src="/assets/trend-4.webp" alt="" className="absolute inset-0 size-full max-w-none object-cover" />
      </div>
    ),
  },
]

export default function Trending() {
  return (
    <section id="trending" className="flex flex-col gap-8 bg-white px-5 py-14 md:px-10 md:py-[60px] lg:px-[60px]">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Reveal as="h2" className="text-[34px] font-medium leading-[1.1] tracking-[-1.36px] text-primary-pressed md:text-[48px] md:tracking-[-1.92px]">
          Trending products for you!
        </Reveal>
        <Reveal delay={0.1}>
          <a href="#products" className="group flex items-center gap-1 rounded-xl text-[16px] leading-none text-title">
            <span className="link-underline">See All Product</span>
            <Icon
              name="arrow-up-right"
              size={18}
              strokeWidth={1}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>

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
