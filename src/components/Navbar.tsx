import { AnimatePresence, motion } from 'framer-motion'
import { Coffee, Menu, Moon, ShoppingBag, Sun, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { useCart } from '../context/CartContext'
import { cn } from '../lib/cn'

type NavItem = {
  label: string
  href: string
}

function getInitialDarkMode() {
  if (typeof window === 'undefined') return true

  const stored = window.localStorage.getItem('theme')
  if (stored === 'dark') return true
  if (stored === 'light') return false

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true
}

export default function Navbar() {
  const { count } = useCart()

  const navItems = useMemo<NavItem[]>(
    () => [
      { label: 'About', href: '#about' },
      { label: 'Menu', href: '#menu' },
      { label: 'Locations', href: '#locations' },
      { label: 'Contact', href: '#contact' },
    ],
    [],
  )

  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(getInitialDarkMode)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const linkClassName =
    'text-sm font-medium text-crema/80 transition hover:text-crema'

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl border border-crema/10 bg-espresso-950/60 shadow-glow backdrop-blur">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#home" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-caramel to-espresso-700 text-espresso-950">
                <Coffee className="h-5 w-5" />
              </span>
              <span className="font-righteous font-bold text-lg tracking-wide">
                <span className="text-caramel">CAFFE</span>
                <span className="text-crema">IND</span>
              </span>
            </a>

            <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className={linkClassName}>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-crema/10 bg-espresso-950/40 text-crema/80 transition hover:bg-espresso-900/60 hover:text-crema"
                aria-label="Toggle theme"
                onClick={() => setDark((v) => !v)}
              >
                {dark ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>

              <Link
                to="/signin"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-crema/10 bg-espresso-950/30 px-4 text-sm font-semibold text-crema/80 transition hover:bg-espresso-900/60 hover:text-crema"
              >
                Sign in
              </Link>

              <Link
                to="/signup"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-caramel/30 bg-caramel/10 px-4 text-sm font-semibold text-caramel transition hover:bg-caramel/20"
              >
                Sign up
              </Link>

              <Link
                to="/checkout"
                className="inline-flex h-10 items-center justify-center rounded-xl bg-caramel px-4 text-sm font-semibold text-espresso-950 transition hover:bg-[#d29a70]"
              >
                <ShoppingBag className="h-4 w-4" />
                Checkout
                {count ? (
                  <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-espresso-950/35 px-1.5 text-xs font-bold text-crema">
                    {count}
                  </span>
                ) : null}
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-crema/10 bg-espresso-950/40 text-crema/80 transition hover:bg-espresso-900/60 hover:text-crema md:hidden"
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden md:hidden"
              >
                <div className="px-4 pb-4">
                  <nav className="grid gap-2" aria-label="Mobile">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className={cn(
                          linkClassName,
                          'rounded-xl border border-crema/10 bg-espresso-950/30 px-4 py-3 hover:bg-espresso-900/60',
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-3 grid gap-2">
                    <Link
                      to="/signin"
                      className="inline-flex h-11 items-center justify-center rounded-xl border border-crema/10 bg-espresso-950/30 px-4 text-sm font-semibold text-crema/80 transition hover:bg-espresso-900/60 hover:text-crema"
                      onClick={() => setOpen(false)}
                    >
                      Sign in
                    </Link>

                    <Link
                      to="/checkout"
                      className="inline-flex h-11 items-center justify-center rounded-xl bg-caramel px-4 text-sm font-semibold text-espresso-950 transition hover:bg-[#d29a70]"
                      onClick={() => setOpen(false)}
                    >
                      <span className="inline-flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4" />
                        Checkout
                        {count ? (
                          <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-espresso-950/35 px-1.5 text-xs font-bold text-crema">
                            {count}
                          </span>
                        ) : null}
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
