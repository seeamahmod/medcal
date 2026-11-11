import { Reveal } from '../components/motion'

const reviews = [
  {
    text: 'Initially, I was unsure about choosing a pharmacy, but their team made the experience seamless. Now, I trust them completely for all my health needs.',
    name: 'Corina McCoy',
    email: 'k_pacheco@gmail.com',
    avatar: '/assets/avatar-1.png',
  },
  {
    text: 'The entire process was clear and straightforward. No unexpected fees, no misleading claims—just genuine care and effective solutions.',
    name: 'Kimberly Mastrangelo',
    email: 'autumn_philips@aol.com',
    avatar: '/assets/avatar-2.png',
  },
  {
    text: 'I never imagined that managing my prescriptions would be this effortless. Their inventory is precise, and the staff genuinely cares about my health.',
    name: 'Stephanie Nicol',
    email: 'r.m.smith@gmail.com',
    avatar: '/assets/avatar-3.png',
  },
  {
    text: 'They are professional, attentive, and trustworthy. They helped me find the right medications that fit my health plan perfectly.',
    name: 'Paula Mora',
    email: 'k.r.mastrangelo@outlook.com',
    avatar: '/assets/avatar-4.png',
  },
]

function Card({ r, hidden }) {
  return (
    <article
      aria-hidden={hidden || undefined}
      className="flex h-[280px] w-[300px] shrink-0 flex-col items-start justify-between rounded-xl border border-[#e6e6e6] bg-white p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-18px_rgba(0,0,0,0.2)] md:w-[365px]"
    >
      <div className="flex w-full flex-col gap-4">
        <img src="/assets/stars.svg" alt="5 out of 5 stars" width="128" height="24" className="h-6 w-32" />
        <p className="text-[16px] leading-[1.5] text-body">{r.text}</p>
      </div>
      <div className="flex items-center gap-[6px]">
        <img src={r.avatar} alt="" width="48" height="48" loading="lazy" className="size-12 rounded-full" />
        <div className="flex flex-col gap-2 leading-none whitespace-nowrap">
          <p className="text-[16px] tracking-[-0.32px] text-title">{r.name}</p>
          <p className="text-[14px] tracking-[-0.28px] text-body">{r.email}</p>
        </div>
      </div>
    </article>
  )
}

export default function Testimonials() {
  // Two copies of the list make the marquee loop seamlessly.
  const loop = [...reviews, ...reviews]
  return (
    <section id="testimonials" className="flex flex-col gap-8 overflow-hidden bg-surface py-14 md:py-[60px]">
      <div className="flex flex-wrap items-end justify-between gap-4 px-5 md:px-10 lg:px-[60px]">
        <Reveal as="h2" className="text-[34px] leading-[1.1] font-medium tracking-[-1.36px] whitespace-nowrap text-title md:text-[48px] md:tracking-[-1.92px]">
          Our happy customers
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href="#testimonials"
            className="flex items-center justify-center rounded-xl border border-[#e1e1e1] px-6 py-[17px] text-[16px] leading-none text-title transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-white"
          >
            See all testimonials
          </a>
        </Reveal>
      </div>

      <Reveal className="group flex pl-5 md:pl-10 lg:pl-[60px]">
        <div className="flex w-max animate-marquee gap-[14px] group-hover:[animation-play-state:paused]">
          {loop.map((r, i) => (
            <Card key={i} r={r} hidden={i >= reviews.length} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
