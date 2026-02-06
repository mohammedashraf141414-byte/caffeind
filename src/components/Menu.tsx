import { AnimatePresence, motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'

import { drinks } from '../data/menu'
import { cn } from '../lib/cn'
import type { Drink, DrinkCategory } from '../types/menu'
import DrinkCard from './DrinkCard'
import DrinkModal from './DrinkModal'
import SectionHeader from './SectionHeader'

type CategoryFilter = DrinkCategory | 'All'

type CategoryPillProps = {
  label: CategoryFilter
  active: boolean
  onClick: () => void
}

function CategoryPill({ label, active, onClick }: CategoryPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'relative inline-flex h-10 items-center justify-center rounded-2xl border px-4 text-sm font-semibold transition',
        active
          ? 'border-crema/25 text-crema'
          : 'border-crema/10 bg-espresso-950/20 text-crema/70 hover:border-crema/20 hover:text-crema',
      )}
    >
      {active ? (
        <motion.span
          layoutId="activeCategoryPill"
          className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-caramel/35 via-espresso-700/20 to-espresso-950/10"
          transition={{ type: 'spring', stiffness: 340, damping: 30 }}
        />
      ) : null}
      {label}
    </button>
  )
}

export default function Menu() {
  const categories = useMemo<DrinkCategory[]>(() => {
    const set = new Set<DrinkCategory>()
    for (const d of drinks) set.add(d.category)
    return Array.from(set)
  }, [])

  const [category, setCategory] = useState<CategoryFilter>('All')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Drink | null>(null)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()

    return drinks
      .filter((d) => (category === 'All' ? true : d.category === category))
      .filter((d) => {
        if (!q) return true
        const hay = [
          d.name,
          d.description,
          d.category,
          d.tags.join(' '),
          d.tastingNotes.join(' '),
        ]
          .join(' ')
          .toLowerCase()
        return hay.includes(q)
      })
  }, [category, query])

  return (
    <section id="menu" className="relative py-20 bg-espresso-950">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-hero opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-70" />

      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="MENU"
          title="Signature drinks, built for your pace"
          subtitle="Explore categories, open any drink for full details, tasting notes, and intensity."
        />

        <div className="mt-10 grid gap-6">
          <div className="flex flex-col gap-4 rounded-[28px] border border-crema/10 bg-espresso-950/40 p-5 shadow-glow md:flex-row md:items-center md:justify-between md:gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <CategoryPill
                label="All"
                active={category === 'All'}
                onClick={() => setCategory('All')}
              />
              {categories.map((c) => (
                <CategoryPill
                  key={c}
                  label={c}
                  active={category === c}
                  onClick={() => setCategory(c)}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-full md:w-[320px]">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-crema/50" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search drinks, notes, tags..."
                  className="h-11 w-full rounded-2xl border border-crema/10 bg-espresso-950/30 pl-11 pr-4 text-sm text-crema placeholder:text-crema/45 outline-none transition focus:border-crema/25"
                />
              </div>

              <div className="hidden rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 py-2 text-sm font-semibold text-crema/70 md:block">
                {results.length} items
              </div>
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            {results.length ? (
              <motion.div
                key="grid"
                layout
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {results.map((drink) => (
                  <DrinkCard key={drink.id} drink={drink} onSelect={setSelected} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="rounded-[28px] border border-crema/10 bg-espresso-950/35 p-10 text-center shadow-glow"
              >
                <p className="text-lg font-semibold text-crema">No results</p>
                <p className="mt-2 text-sm text-crema/65">
                  Try searching a different name, tag, or tasting note.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('')
                    setCategory('All')
                  }}
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-2xl bg-caramel px-5 text-sm font-semibold text-espresso-950 transition hover:bg-[#d29a70]"
                >
                  Reset filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <DrinkModal drink={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
