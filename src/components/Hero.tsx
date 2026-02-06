import { motion } from 'framer-motion'
import { ArrowRight, Globe2, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import beansImage from '../../img/beans.jpg'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 bg-offwhite">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${beansImage})` }}
        />
         <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/40 via-espresso-900/80 to-espresso-800" />
      </div> 

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-caramel/25 blur-3xl animate-blob" />
        <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-espresso-700/35 blur-3xl animate-blob" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-espresso-800/35 blur-3xl animate-blob" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-crema/10 bg-espresso-950/40 px-4 py-2 text-sm text-crema/75"
            >
              <Sparkles className="h-4 w-4 text-caramel" />
              Global coffee. Crafted daily.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.05 }}
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-crema md:text-6xl"
            >
              Brewed for a world that
              <span className="block bg-gradient-to-r from-caramel via-crema to-caramel bg-clip-text text-transparent">
                moves fast.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-crema/75 md:text-lg"
            >
              CAFFEIND brings specialty-grade beans, bold signature drinks, and
              cafe-level hospitality to every city we touch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#menu"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-caramel px-6 text-sm font-semibold text-espresso-950 transition hover:bg-[#d29a70]"
              >
                Explore the menu
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#locations"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-crema/15 bg-espresso-950/30 px-6 text-sm font-semibold text-crema/85 transition hover:bg-espresso-900/60"
              >
                <Globe2 className="h-4 w-4 text-caramel" />
                Find a store
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="mt-10 grid max-w-xl grid-cols-3 gap-3"
            >
              <div className="rounded-2xl border border-crema/10 bg-espresso-950/35 px-4 py-4">
                <p className="text-xs font-medium text-crema/60">Roast style</p>
                <p className="mt-1 text-sm font-semibold text-crema">Modern medium</p>
              </div>
              <div className="rounded-2xl border border-crema/10 bg-espresso-950/35 px-4 py-4">
                <p className="text-xs font-medium text-crema/60">Brew promise</p>
                <p className="mt-1 text-sm font-semibold text-crema">Under 4 min</p>
              </div>
              <div className="rounded-2xl border border-crema/10 bg-espresso-950/35 px-4 py-4">
                <p className="text-xs font-medium text-crema/60">Quality</p>
                <p className="mt-1 text-sm font-semibold text-crema">Single origin</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-caramel/20 via-espresso-700/10 to-espresso-950/5 blur-2xl" />
            <div className="rounded-[28px] border border-crema/10 bg-espresso-950/50 p-6 shadow-glow backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium tracking-[0.22em] text-crema/55">
                    TODAY'S SIGNATURE
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-crema">
                    Caramel Cloud Latte
                  </h3>
                  <p className="mt-2 text-sm text-crema/70">
                    Silky espresso, oat milk foam, toasted sugar.
                  </p>
                </div>
                <div className="inline-flex h-11 items-center justify-center rounded-2xl bg-caramel px-4 text-sm font-semibold text-espresso-950">
                  $5.75
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-crema/10 bg-espresso-950/30 p-4">
                  <p className="text-xs font-medium text-crema/60">Tasting notes</p>
                  <p className="mt-1 text-sm text-crema/80">Caramel, cocoa, toasted</p>
                </div>
                <div className="rounded-2xl border border-crema/10 bg-espresso-950/30 p-4">
                  <p className="text-xs font-medium text-crema/60">Caffeine</p>
                  <p className="mt-1 text-sm text-crema/80">150mg</p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#menu"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-crema/10 bg-espresso-950/30 py-3 text-sm font-semibold text-crema/85 transition hover:bg-espresso-900/60"
                >
                  Build your order
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-8 h-20 w-20 rounded-3xl bg-caramel/20 blur-xl animate-floaty" />
            <div className="pointer-events-none absolute -left-8 bottom-12 h-14 w-14 rounded-3xl bg-espresso-700/30 blur-xl animate-floaty" />
          </motion.div>
        </div>
      </div>

      <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-crema/10 to-transparent" />
    </section>
  )
}
