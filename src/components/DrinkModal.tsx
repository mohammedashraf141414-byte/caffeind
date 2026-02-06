import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useCart } from '../context/CartContext'
import { formatUsd } from '../lib/format'
import type { Drink } from '../types/menu'

type Props = {
  drink: Drink | null
  onClose: () => void
}

export default function DrinkModal({ drink, onClose }: Props) {
  const { addItem, items } = useCart()

  useEffect(() => {
    if (!drink) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [drink, onClose])

  const inCart = drink ? items.some((item) => item.drink.id === drink.id) : false

  return (
    <AnimatePresence>
      {drink ? (
        <motion.div
          className="fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-espresso-950/80"
            aria-label="Close"
            onClick={onClose}
          />

          <div className="relative mx-auto flex min-h-full max-w-3xl items-center px-4 py-10">
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="flex max-h-[calc(100vh-5rem)] w-full flex-col overflow-hidden rounded-[30px] border border-crema/10 bg-espresso-950/70 shadow-glow backdrop-blur"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-40 w-full border-b border-crema/10 bg-espresso-950/30 sm:h-56">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className=" h-40 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-espresso-950/30 to-transparent" />
              </div>

              <div className="flex shrink-0 items-start justify-between gap-4 border-b border-crema/10 px-6 py-3">
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] text-crema/55">
                    {drink.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-crema">
                    {drink.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-crema/75">
                    {drink.description}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="rounded-2xl bg-caramel px-4 py-2 text-sm font-semibold text-espresso-950">
                    {formatUsd(drink.priceUsd)}
                  </div>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-crema/10 bg-espresso-950/40 text-crema/80 transition hover:bg-espresso-900/60 hover:text-crema"
                    aria-label="Close"
                    onClick={onClose}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid min-h-0 flex-1 gap-6 overflow-y-auto px-6 py-6 scrollbar-caramel md:grid-cols-2">
                <div className="rounded-2xl border border-crema/10 bg-espresso-950/30 p-5">
                  <p className="text-sm font-semibold text-crema">Tasting notes</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {drink.tastingNotes.map((note) => (
                      <span
                        key={note}
                        className="rounded-full border border-crema/10 bg-espresso-950/30 px-3 py-1 text-xs font-semibold text-crema/75"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-crema/10 bg-espresso-950/30 p-5">
                  <p className="text-sm font-semibold text-crema">Ingredients</p>
                  <ul className="mt-3 space-y-2 text-sm text-crema/75">
                    {drink.ingredients.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-caramel" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-crema/10 bg-espresso-950/30 p-5">
                  <p className="text-sm font-semibold text-crema">Intensity</p>
                  <div className="mt-3 flex items-center gap-2">
                    {Array.from({ length: 5 }).map((_, idx) => {
                      const active = idx + 1 <= drink.intensity
                      return (
                        <span
                          key={idx}
                          className={
                            'h-2 w-8 rounded-full ' +
                            (active ? 'bg-caramel' : 'bg-crema/10')
                          }
                          aria-hidden="true"
                        />
                      )
                    })}
                  </div>
                </div>

                <div className="rounded-2xl border border-crema/10 bg-espresso-950/30 p-5">
                  <p className="text-sm font-semibold text-crema">Details</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 py-3">
                      <p className="text-xs font-medium text-crema/60">Caffeine</p>
                      <p className="mt-1 text-sm font-semibold text-crema">
                        {drink.caffeineMg ? `${drink.caffeineMg}mg` : '—'}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 py-3">
                      <p className="text-xs font-medium text-crema/60">Tags</p>
                      <p className="mt-1 text-sm font-semibold text-crema">
                        {drink.tags.length ? drink.tags.join(', ') : '—'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-3 border-t border-crema/10 px-6 py-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-crema">
                  Tap outside or press <span className="font-semibold text-espresso-600">Esc </span>
                  to close.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() => addItem(drink, 1)}
                    className="inline-flex h-11 items-center justify-center rounded-2xl border border-crema/10 bg-espresso-950/30 px-5 text-sm font-semibold text-crema/85 transition hover:bg-espresso-900/60"
                  >
                    {inCart ? 'Add another' : 'Add to cart'}
                  </button>
                  <Link
                    to="/checkout"
                    onClick={() => {
                      if (!inCart) addItem(drink, 1)
                      onClose()
                    }}
                    className="inline-flex h-11 items-center justify-center rounded-2xl bg-caramel px-5 text-sm font-semibold text-espresso-950 transition hover:bg-[#d29a70]"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
