import { motion } from 'framer-motion'
import { Coffee, Sparkles } from 'lucide-react'

import { formatUsd } from '../lib/format'
import type { Drink } from '../types/menu'

type Props = {
  drink: Drink
  onSelect: (drink: Drink) => void
}

export default function DrinkCard({ drink, onSelect }: Props) {
  return (
    <motion.button
      layout
      type="button"
      onClick={() => onSelect(drink)}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group w-full rounded-[26px] border border-crema/10 bg-espresso-950/35 p-5 text-left shadow-glow transition hover:border-crema/20"
    >
      <div className="relative mb-4 h-36 overflow-hidden rounded-2xl border border-crema/10 bg-espresso-950/30">
        <img
          src={drink.image}
          alt={drink.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/65 via-transparent to-transparent" />
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium tracking-[0.2em] text-crema/55">
            {drink.category}
          </p>
          <h3 className="mt-2 truncate text-lg font-semibold text-crema">
            {drink.name}
          </h3>
        </div>

        <div className="inline-flex items-center gap-2">
          {drink.tags.includes('New') ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-caramel/15 px-2 py-1 text-[11px] font-semibold text-caramel">
              <Sparkles className="h-3.5 w-3.5" />
              New
            </span>
          ) : null}
          {drink.tags.includes('Popular') ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-crema/10 px-2 py-1 text-[11px] font-semibold text-crema/80">
              <Coffee className="h-3.5 w-3.5" />
              Popular
            </span>
          ) : null}
        </div>
      </div>

      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-crema/70">
        {drink.description}
      </p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, idx) => {
            const active = idx + 1 <= drink.intensity
            return (
              <span
                key={idx}
                className={
                  'h-1.5 w-6 rounded-full ' +
                  (active ? 'bg-caramel' : 'bg-crema/10')
                }
                aria-hidden="true"
              />
            )
          })}
          <span className="ml-2 text-xs font-medium text-crema/60">
            Intensity
          </span>
        </div>

        <div className="text-sm font-semibold text-crema">
          {formatUsd(drink.priceUsd)}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {drink.tags
          .filter((t) => t !== 'New' && t !== 'Popular')
          .slice(0, 3)
          .map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-crema/10 bg-espresso-950/30 px-3 py-1 text-[11px] font-semibold text-crema/70"
            >
              {tag}
            </span>
          ))}
      </div>

      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-caramel">
        View details
        <span className="transition group-hover:translate-x-0.5">→</span>
      </div>
    </motion.button>
  )
}
