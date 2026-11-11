import Icon from '../components/Icon'
import { Reveal, Stagger, StaggerItem, CountUp } from '../components/motion'

const stats = [
  { icon: 'trophy', value: '26+', label: 'Years of excellence' },
  { icon: 'medication', value: '5k+', label: 'Type of medecine' },
  { icon: 'globe', value: '600+', label: 'Global brands' },
  { icon: 'users', value: '1M', label: 'Happy customers' },
]

export default function About() {
  return (
    <section id="about" className="flex flex-col gap-14 bg-surface px-5 py-14 md:px-10 md:py-[60px] lg:gap-[150px] lg:px-[60px]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <Reveal
          as="h2"
          className="text-[34px] font-medium leading-[1.1] tracking-[-1.36px] text-primary-pressed md:text-[48px] md:tracking-[-1.92px] lg:max-w-[540px] lg:flex-1"
        >
          Your Trusted Healthcare Service Since 2009
        </Reveal>
        <Reveal as="p" delay={0.1} className="text-[16px] leading-[1.5] text-subtle md:text-[18px] lg:w-[648px] lg:shrink-0">
          We believe in building lasting relationships with our patients, offering not just medications, but
          comprehensive health support that helps you live your best life. From prescription consultations to
          wellness screenings, we're here to be your trusted partner in health every step of the way
        </Reveal>
      </div>

      <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:items-center lg:justify-between">
        {stats.map((s) => (
          <StaggerItem key={s.label} className="group flex items-center gap-3">
            <div className="flex size-[70px] shrink-0 items-center rounded-2xl bg-primary p-[15px] text-white transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
              <Icon name={s.icon} size={40} />
            </div>
            <div className="flex flex-col gap-[7px] whitespace-nowrap">
              <p className="text-[32px] font-medium leading-none tracking-[-1.28px] text-primary-hover">
                <CountUp value={s.value} />
              </p>
              <p className="text-[18px] leading-[1.5] text-body">{s.label}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
