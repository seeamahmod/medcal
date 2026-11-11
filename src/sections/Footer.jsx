import { motion } from 'framer-motion'

const columns = [
  { title: 'Quick Links', links: ['Home', 'About', 'Services', 'Careers', 'Contact'] },
  { title: 'Services', links: ['Medical', 'Operation', 'Laboratory', 'ICU', 'Patient Ward'] },
  { title: 'Social Link', links: ['Facebook', 'Instagram', 'Twitter', 'YouTube', 'Pinterest'] },
]

const payments = [
  { src: 'pay-visa.webp', alt: 'Visa', box: 'h-[18px] w-[44px]' },
  { src: 'pay-mastercard.png', alt: 'Mastercard', box: 'h-[18px] w-[30px]' },
  { src: 'pay-amex.png', alt: 'American Express', box: 'h-[21px] w-[34px] rounded-[2px]', style: { top: 'calc(50% + 0.5px)' } },
  { src: 'pay-discover.webp', alt: 'Discover', box: 'h-[23px] w-[41px]', style: { left: 'calc(50% - 0.5px)', top: 'calc(50% + 0.5px)' } },
  { src: 'pay-visa.webp', alt: 'Visa', box: 'h-[18px] w-[44px]' },
  { src: 'pay-paypal.png', alt: 'PayPal', box: 'h-[22px] w-[44px]' },
]

export default function Footer() {
  return (
    <footer id="contact" className="p-3 md:p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-full flex-col rounded-[24px] bg-primary px-6 pt-10 pb-8 text-white md:rounded-[32px] md:px-10 md:pt-[60px] md:pb-10 lg:px-[80px]"
      >
        <div className="flex flex-col gap-12 lg:gap-[66px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-10 lg:h-[166px] lg:gap-[55px]">
              <a href="#top" className="flex items-center gap-[6.146px]" aria-label="MedCal home">
                <img src="/assets/logo-mark.svg" alt="" className="size-[32.113px]" />
                <span className="text-[25.902px] leading-[1.1] font-medium tracking-[-1.04px]">MedCal</span>
              </a>
              <address className="flex flex-col gap-4 text-[16px] leading-none tracking-[-0.54px] not-italic md:text-[18px]">
                <span>199 Oakway Lane, Woodland Hills, CA 91303</span>
                <a href="tel:+19072488330" className="link-underline w-fit">(907) 248-8330</a>
                <a href="mailto:contact@medcal.com" className="link-underline w-fit">contact@medcal.com</a>
              </address>
            </div>

            <div className="grid grid-cols-2 gap-10 leading-none sm:grid-cols-3 lg:flex lg:items-center lg:gap-[157px]">
              {columns.map((c) => (
                <div key={c.title} className="flex flex-col gap-[22px] lg:w-[96px]">
                  <p className="text-[18px] font-semibold tracking-[-0.54px]">{c.title}</p>
                  <ul className="flex flex-col gap-4 text-[16px] tracking-[-0.32px]">
                    {c.links.map((l) => (
                      <li key={l}>
                        <a href="#top" className="inline-block whitespace-nowrap opacity-100 transition-[opacity,transform] duration-300 hover:translate-x-1 hover:opacity-80">
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[10px] lg:h-[114px]">
            <div className="h-0 w-full" />
            <div className="flex flex-col gap-3 py-[6px] sm:h-[44px] sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[16px] leading-[1.5]">We Accept</p>
              <div className="flex flex-wrap items-center gap-3">
                {payments.map((p, i) => (
                  <div key={i} className="relative h-[26px] w-[48px] shrink-0 overflow-clip rounded-[2px] bg-white transition-transform duration-300 hover:-translate-y-0.5">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden ${p.box}`} style={p.style}>
                      <img src={`/assets/${p.src}`} alt={p.alt} className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 py-4 text-[14px] leading-none tracking-[-0.32px] sm:flex-row sm:items-center sm:justify-between md:text-[16px]">
              <p>Copyright © 2026 - MedCal. All rights reserved.</p>
              <p>Designed By Seeam Ahmod</p>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
