import { motion } from 'framer-motion'
import { useState } from 'react'
import Icon from './Icon'
import { useCanHover } from '../hooks/useCanHover'

// Card shell from Figma: 445px tall, 8px padding, #e7f1ee, white info panel.
// `media` is the image area content (positioned absolutely inside a 259px-tall box).
export default function ProductCard({ category, name, media, price = '$70', oldPrice = '$78' }) {
  const [added, setAdded] = useState(false)
  const canHover = useCanHover()

  const onAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <motion.article
      whileHover={canHover ? { y: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group flex h-[445px] w-full flex-col justify-end gap-2 rounded-2xl bg-primary-soft p-2 transition-shadow duration-300 hover:shadow-[0_18px_40px_-18px_rgba(14,119,87,0.45)]"
    >
      <div className="relative min-h-px flex-1 overflow-clip rounded-3xl bg-primary-soft">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]">{media}</div>
      </div>

      <div className="flex w-full flex-col gap-[18px] rounded-2xl bg-white p-4">
        <div className="flex w-full flex-col gap-3">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-start gap-[3px]">
              <span className="relative size-4 shrink-0">
                <span className="absolute" style={{ inset: '4.74% 6.71% 12.42% 6.71%' }}>
                  <img src="/assets/star.svg" alt="" className="block size-full max-w-none" />
                </span>
              </span>
              <span className="text-[16px] leading-none tracking-[-0.32px] text-title">4.5</span>
            </div>
            <p className="flex gap-[3px] text-[12px] leading-none tracking-[-0.24px] whitespace-nowrap text-body">
              <span>6k</span>
              <span>Purchased</span>
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 leading-none">
            <div className="flex w-full items-center justify-between gap-2 whitespace-nowrap">
              <p className="truncate text-[14px] tracking-[-0.28px] text-muted">{category}</p>
              <div className="flex items-center gap-2">
                <p className="text-[14px] tracking-[-0.28px] text-strike line-through">{oldPrice}</p>
                <p className="text-[18px] font-semibold tracking-[-0.54px] text-title">{price}</p>
              </div>
            </div>
            <h3 className="text-[18px] font-medium tracking-[-0.54px] text-title">{name}</h3>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onAdd}
          className="relative flex w-full items-center justify-center gap-1 overflow-hidden rounded-lg bg-primary px-[18px] py-3 text-white transition-colors duration-300 hover:bg-primary-hover"
        >
          <Icon name="cart-plus" size={16} />
          <span className="text-[12px] leading-none">{added ? 'Added!' : 'Add to cart'}</span>
        </motion.button>
      </div>
    </motion.article>
  )
}
