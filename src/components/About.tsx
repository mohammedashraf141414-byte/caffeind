import { motion } from 'framer-motion'
import { Flame, Leaf, ShieldCheck, Timer } from 'lucide-react'

import whyImage from '../../img/why.jpg'
import SectionHeader from './SectionHeader'

const features = [
  {
    title: 'Farm-to-cup sourcing',
    description: 'Direct partnerships, transparent lots, and consistently clean profiles.',
    icon: Leaf,
  },
  {
    title: 'Precision roasting',
    description: 'Modern roast curves that keep sweetness high and bitterness low.',
    icon: Flame,
  },
  {
    title: 'Fast, never rushed',
    description: 'Cafe-level speed without sacrificing extraction or texture.',
    icon: Timer,
  },
  {
    title: 'Global consistency',
    description: 'Every store, every cup, the same standard—audited and trained.',
    icon: ShieldCheck,
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-espresso-600">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="OUR STANDARD"
          title="Big brand energy. Specialty coffee discipline."
          subtitle="We built CAFFEIND for people who love the craft, but live on a schedule. From origin selection to barista workflow—everything is designed to taste elite and feel effortless."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[28px] border border-crema/10 bg-espresso-950/40 shadow-glow"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{ backgroundImage: `url(${whyImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-espresso-950/95 via-espresso-950/70 to-espresso-950/30" />
            <div className="relative p-8">
              <p className="text-xs font-medium tracking-[0.25em] text-crema/55">
                WHY CAFFEIND
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-crema">
                A cafe experience that scales.
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-crema/75">
                We blend premium beans, workflow-first design, and hospitality
                training to deliver the perfect coffee moment—every time.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {['Single-origin rotations', 'Barista training', 'Fast delivery'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-crema/10 bg-espresso-950/30 px-3 py-1 text-xs font-semibold text-crema/75"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f, idx) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="rounded-[26px] border border-crema/10 bg-espresso-950/35 p-6 shadow-glow"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-caramel/15 text-caramel">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-crema">
                    {f.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-crema/70">
                    {f.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
