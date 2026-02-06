import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  Lock,
  MapPin,
  Minus,
  Plus,
  Receipt,
  ShieldCheck,
  Trash2,
  Truck,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { useCart } from '../context/CartContext'
import { formatUsd } from '../lib/format'

type PaymentMethod = 'card' | 'cash' | 'apple_pay'

type OrderMode = 'pickup' | 'delivery'

export default function Checkout() {
  const { items, removeItem, setQuantity, subtotalUsd } = useCart()

  const [mode, setMode] = useState<OrderMode>('pickup')
  const [payment, setPayment] = useState<PaymentMethod>('card')
  const [done, setDone] = useState(false)

  const subtotal = subtotalUsd
  const deliveryFee = useMemo(() => (mode === 'delivery' ? 2.5 : 0), [mode])
  const tax = useMemo(() => (subtotal ? subtotal * 0.08 : 0), [subtotal])
  const total = useMemo(() => subtotal + deliveryFee + tax, [subtotal, deliveryFee, tax])

  return (
    <div className="min-h-screen bg-espresso-950 text-crema antialiased">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-hero opacity-70" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-70" />

        <div className="mx-auto max-w-6xl px-4 pb-16 pt-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/"
                className="inline-flex h-11 w-fit items-center gap-2 rounded-2xl border border-crema/10 bg-espresso-950/40 px-4 text-sm font-semibold text-crema/85 transition hover:bg-espresso-900/60"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>

              <div className="inline-flex items-center gap-2 rounded-2xl border border-crema/10 bg-espresso-950/40 px-4 py-3 text-sm text-crema/75">
                <Lock className="h-4 w-4 text-caramel" />
                Secure checkout
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-[30px] border border-crema/10 bg-espresso-950/45 p-6 shadow-glow backdrop-blur"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-xs font-medium tracking-[0.22em] text-crema/55">
                    CHECKOUT
                  </p>
                  <h1 className="mt-3 text-3xl font-semibold text-crema md:text-4xl">
                    Pay in a few taps.
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-crema/70">
                    No backend connected—this is a front-end checkout experience.
                    Your details stay on your device.
                  </p>
                </div>

                <div className="grid gap-2 sm:grid-cols-3">
                  <div className="rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 py-3">
                    <p className="text-xs font-medium text-crema/60">Protection</p>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-crema">
                      <ShieldCheck className="h-4 w-4 text-caramel" />
                      Encrypted
                    </p>
                  </div>
                  <div className="rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 py-3">
                    <p className="text-xs font-medium text-crema/60">Receipt</p>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-crema">
                      <Receipt className="h-4 w-4 text-caramel" />
                      Email
                    </p>
                  </div>
                  <div className="rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 py-3">
                    <p className="text-xs font-medium text-crema/60">Speed</p>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-crema">
                      <Truck className="h-4 w-4 text-caramel" />
                      Under 4 min
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="rounded-[30px] border border-crema/10 bg-espresso-950/45 p-6 shadow-glow backdrop-blur"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-crema">Customer details</p>
                    <p className="mt-1 text-sm text-crema/65">
                      Used for receipt and order updates.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-xs font-medium text-crema/60">Full name</span>
                    <input
                      className="h-11 rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 text-sm text-crema placeholder:text-crema/45 outline-none transition focus:border-crema/25"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs font-medium text-crema/60">Email</span>
                    <input
                      className="h-11 rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 text-sm text-crema placeholder:text-crema/45 outline-none transition focus:border-crema/25"
                      placeholder="name@email.com"
                      inputMode="email"
                    />
                  </label>
                  <label className="grid gap-2 sm:col-span-2">
                    <span className="text-xs font-medium text-crema/60">Phone</span>
                    <input
                      className="h-11 rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 text-sm text-crema placeholder:text-crema/45 outline-none transition focus:border-crema/25"
                      placeholder="+20 ..."
                      inputMode="tel"
                    />
                  </label>
                </div>

                <div className="mt-8">
                  <p className="text-sm font-semibold text-crema">Order mode</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setMode('pickup')}
                      className={
                        'flex items-start gap-3 rounded-2xl border px-4 py-4 text-left transition ' +
                        (mode === 'pickup'
                          ? 'border-crema/25 bg-espresso-950/30'
                          : 'border-crema/10 bg-espresso-950/20 hover:border-crema/20')
                      }
                    >
                      <MapPin className="mt-0.5 h-4 w-4 text-caramel" />
                      <div>
                        <p className="text-sm font-semibold text-crema">Pickup</p>
                        <p className="mt-1 text-sm text-crema/65">
                          Ready in minutes at your nearest store.
                        </p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode('delivery')}
                      className={
                        'flex items-start gap-3 rounded-2xl border px-4 py-4 text-left transition ' +
                        (mode === 'delivery'
                          ? 'border-crema/25 bg-espresso-950/30'
                          : 'border-crema/10 bg-espresso-950/20 hover:border-crema/20')
                      }
                    >
                      <Truck className="mt-0.5 h-4 w-4 text-caramel" />
                      <div>
                        <p className="text-sm font-semibold text-crema">Delivery</p>
                        <p className="mt-1 text-sm text-crema/65">
                          Delivered to your door (fee applies).
                        </p>
                      </div>
                    </button>
                  </div>
                </div>

                <AnimatePresence initial={false} mode="popLayout">
                  {mode === 'delivery' ? (
                    <motion.div
                      key="delivery"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="mt-6 rounded-2xl border border-crema/10 bg-espresso-950/30 p-5"
                    >
                      <p className="text-sm font-semibold text-crema">Delivery address</p>
                      <div className="mt-4 grid gap-4">
                        <label className="grid gap-2">
                          <span className="text-xs font-medium text-crema/60">Address</span>
                          <input
                            className="h-11 rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 text-sm text-crema placeholder:text-crema/45 outline-none transition focus:border-crema/25"
                            placeholder="Street, building, floor"
                          />
                        </label>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <label className="grid gap-2">
                            <span className="text-xs font-medium text-crema/60">City</span>
                            <input
                              className="h-11 rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 text-sm text-crema placeholder:text-crema/45 outline-none transition focus:border-crema/25"
                              placeholder="Cairo"
                            />
                          </label>
                          <label className="grid gap-2">
                            <span className="text-xs font-medium text-crema/60">Notes</span>
                            <input
                              className="h-11 rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 text-sm text-crema placeholder:text-crema/45 outline-none transition focus:border-crema/25"
                              placeholder="Call upon arrival"
                            />
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <div className="mt-8">
                  <p className="text-sm font-semibold text-crema">Payment</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <button
                      type="button"
                      onClick={() => setPayment('card')}
                      className={
                        'inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition ' +
                        (payment === 'card'
                          ? 'border-crema/25 bg-espresso-950/30 text-crema'
                          : 'border-crema/10 bg-espresso-950/20 text-crema/80 hover:border-crema/20')
                      }
                    >
                      <CreditCard className="h-4 w-4 text-caramel" />
                      Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setPayment('apple_pay')}
                      className={
                        'inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition ' +
                        (payment === 'apple_pay'
                          ? 'border-crema/25 bg-espresso-950/30 text-crema'
                          : 'border-crema/10 bg-espresso-950/20 text-crema/80 hover:border-crema/20')
                      }
                    >
                      <span className="text-caramel"></span>
                      Pay
                    </button>
                    <button
                      type="button"
                      onClick={() => setPayment('cash')}
                      className={
                        'inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition ' +
                        (payment === 'cash'
                          ? 'border-crema/25 bg-espresso-950/30 text-crema'
                          : 'border-crema/10 bg-espresso-950/20 text-crema/80 hover:border-crema/20')
                      }
                    >
                      <span className="text-caramel">$</span>
                      Cash
                    </button>
                  </div>

                  <AnimatePresence initial={false} mode="popLayout">
                    {payment === 'card' ? (
                      <motion.div
                        key="card"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="mt-6 rounded-2xl border border-crema/10 bg-espresso-950/30 p-5"
                      >
                        <p className="text-sm font-semibold text-crema">Card details</p>
                        <div className="mt-4 grid gap-4">
                          <label className="grid gap-2">
                            <span className="text-xs font-medium text-crema/60">Card number</span>
                            <input
                              className="h-11 rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 text-sm text-crema placeholder:text-crema/45 outline-none transition focus:border-crema/25"
                              placeholder="4242 4242 4242 4242"
                              inputMode="numeric"
                            />
                          </label>
                          <div className="grid gap-4 sm:grid-cols-3">
                            <label className="grid gap-2 sm:col-span-2">
                              <span className="text-xs font-medium text-crema/60">Name on card</span>
                              <input
                                className="h-11 rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 text-sm text-crema placeholder:text-crema/45 outline-none transition focus:border-crema/25"
                                placeholder="Full name"
                              />
                            </label>
                            <label className="grid gap-2">
                              <span className="text-xs font-medium text-crema/60">CVC</span>
                              <input
                                className="h-11 rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 text-sm text-crema placeholder:text-crema/45 outline-none transition focus:border-crema/25"
                                placeholder="123"
                                inputMode="numeric"
                              />
                            </label>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-crema/65">
                    By placing the order you agree to our store policy.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      if (!items.length) return
                      setDone(true)
                    }}
                    disabled={!items.length}
                    className={
                      'inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold transition ' +
                      (items.length
                        ? 'bg-caramel text-espresso-950 hover:bg-[#d29a70]'
                        : 'cursor-not-allowed border border-crema/10 bg-espresso-950/30 text-crema/50')
                    }
                  >
                    Place order
                  </button>
                </div>

                <AnimatePresence>
                  {done ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-6 rounded-2xl border border-crema/10 bg-espresso-950/30 p-5"
                    >
                      <p className="inline-flex items-center gap-2 text-sm font-semibold text-crema">
                        <CheckCircle2 className="h-5 w-5 text-caramel" />
                        Order placed
                      </p>
                      <p className="mt-2 text-sm text-crema/65">
                        Thanks! This is a UI demo—no real payment was processed.
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-[30px] border border-crema/10 bg-espresso-950/45 p-6 shadow-glow backdrop-blur"
              >
                <p className="text-sm font-semibold text-crema">Order summary</p>

                {items.length ? (
                  <div className="mt-4 overflow-hidden rounded-2xl border border-crema/10 bg-espresso-950/30">
                    <div className="max-h-[320px] overflow-y-auto scrollbar-caramel">
                      {items.map((item) => (
                        <div
                          key={item.drink.id}
                          className="grid grid-cols-[64px_1fr_auto] gap-3 border-b border-crema/10 p-4 last:border-b-0"
                        >
                          <img
                            src={item.drink.image}
                            alt={item.drink.name}
                            className="h-16 w-16 rounded-2xl object-cover"
                            loading="lazy"
                          />

                          <div className="min-w-0">
                            <p className="text-xs font-medium tracking-[0.18em] text-crema/55">
                              {item.drink.category}
                            </p>
                            <p className="mt-1 truncate text-sm font-semibold text-crema">
                              {item.drink.name}
                            </p>
                            <p className="mt-1 text-xs text-crema/65">
                              {formatUsd(item.drink.priceUsd)} each
                            </p>

                            <div className="mt-3 flex flex-wrap items-center gap-2">
                              <div className="inline-flex items-center gap-2 rounded-2xl border border-crema/10 bg-espresso-950/25 px-2 py-1">
                                <button
                                  type="button"
                                  aria-label="Decrease quantity"
                                  onClick={() => {
                                    if (item.quantity <= 1) removeItem(item.drink.id)
                                    else setQuantity(item.drink.id, item.quantity - 1)
                                  }}
                                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-crema/10 bg-espresso-950/30 text-crema/80 transition hover:bg-espresso-900/60 hover:text-crema"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>

                                <span className="min-w-6 text-center text-sm font-semibold text-crema">
                                  {item.quantity}
                                </span>

                                <button
                                  type="button"
                                  aria-label="Increase quantity"
                                  onClick={() => setQuantity(item.drink.id, item.quantity + 1)}
                                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-crema/10 bg-espresso-950/30 text-crema/80 transition hover:bg-espresso-900/60 hover:text-crema"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>

                              <button
                                type="button"
                                onClick={() => removeItem(item.drink.id)}
                                className="inline-flex h-10 items-center justify-center gap-2 rounded-2xl border border-crema/10 bg-espresso-950/25 px-4 text-xs font-semibold text-crema/80 transition hover:bg-espresso-900/60 hover:text-crema"
                              >
                                <Trash2 className="h-4 w-4 text-caramel" />
                                Remove
                              </button>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="text-sm font-semibold text-crema">
                              {formatUsd(item.drink.priceUsd * item.quantity)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 rounded-2xl border border-crema/10 bg-espresso-950/30 p-5">
                    <p className="text-sm font-semibold text-crema">Your cart is empty</p>
                    <p className="mt-2 text-sm text-crema/65">
                      Add drinks from the menu to see them here.
                    </p>
                    <Link
                      to="/#menu"
                      className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-2xl border border-crema/10 bg-espresso-950/30 text-sm font-semibold text-crema/85 transition hover:bg-espresso-900/60"
                    >
                      Browse menu
                    </Link>
                  </div>
                )}

                <div className="mt-6 grid gap-3 rounded-2xl border border-crema/10 bg-espresso-950/30 p-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-crema/70">Subtotal</span>
                    <span className="font-semibold text-crema">
                      {formatUsd(subtotal)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-crema/70">Delivery fee</span>
                    <span className="font-semibold text-crema">
                      {formatUsd(deliveryFee)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-crema/70">Tax</span>
                    <span className="font-semibold text-crema">{formatUsd(tax)}</span>
                  </div>
                  <div className="h-px w-full bg-crema/10" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-crema">Total</span>
                    <span className="text-lg font-semibold text-crema">
                      {formatUsd(total)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-crema/10 bg-espresso-950/30 p-5">
                  <p className="text-sm font-semibold text-crema">Tip</p>
                  <p className="mt-2 text-sm text-crema/65">
                    Add a tip in person—our baristas appreciate it.
                  </p>
                </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
