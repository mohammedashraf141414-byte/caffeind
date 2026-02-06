import { motion } from 'framer-motion'
import { ArrowLeft, Eye, EyeOff, Lock, Mail, User } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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
                Secure sign up
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-[30px] border border-crema/10 bg-espresso-950/45 p-6 shadow-glow backdrop-blur"
            >
              <div className="mx-auto max-w-md">
                <div className="text-center">
                  <p className="text-xs font-medium tracking-[0.22em] text-crema/55">
                    SIGN UP
                  </p>
                  <h1 className="mt-3 text-3xl font-semibold text-crema md:text-4xl">
                    Create your account.
                  </h1>
                  <p className="mt-3 text-sm leading-relaxed text-crema/70">
                    Join CAFFEIND to save favorites and track orders.
                  </p>
                </div>

                <form className="mt-8 grid gap-5">
                  <label className="grid gap-2">
                    <span className="text-xs font-medium text-crema/60">Full name</span>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-crema/50" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="h-11 w-full rounded-2xl border border-crema/10 bg-espresso-950/30 pl-11 pr-4 text-sm text-crema placeholder:text-crema/45 outline-none transition focus:border-crema/25"
                      />
                    </div>
                  </label>

                  <label className="grid gap-2">
                    <span className="text-xs font-medium text-crema/60">Email</span>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-crema/50" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="h-11 w-full rounded-2xl border border-crema/10 bg-espresso-950/30 pl-11 pr-4 text-sm text-crema placeholder:text-crema/45 outline-none transition focus:border-crema/25"
                      />
                    </div>
                  </label>

                  <label className="grid gap-2">
                    <span className="text-xs font-medium text-crema/60">Password</span>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-crema/50" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                        className="h-11 w-full rounded-2xl border border-crema/10 bg-espresso-950/30 pl-11 pr-12 text-sm text-crema placeholder:text-crema/45 outline-none transition focus:border-crema/25"
                      />
                      <button
                        type="button"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-crema/50 transition hover:text-crema"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </label>

                  <label className="grid gap-2">
                    <span className="text-xs font-medium text-crema/60">Confirm password</span>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-crema/50" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        className="h-11 w-full rounded-2xl border border-crema/10 bg-espresso-950/30 pl-11 pr-12 text-sm text-crema placeholder:text-crema/45 outline-none transition focus:border-crema/25"
                      />
                      <button
                        type="button"
                        aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-crema/50 transition hover:text-crema"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </label>

                  <div className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-crema/10 bg-espresso-950/30 text-caramel focus:ring-crema/25"
                    />
                    <span className="text-crema/70">
                      I agree to the{' '}
                      <a href="#" className="text-caramel transition hover:text-caramel/80">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-caramel transition hover:text-caramel/80">
                        Privacy Policy
                      </a>
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-caramel px-6 text-sm font-semibold text-espresso-950 transition hover:bg-[#d29a70]"
                  >
                    Create account
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-sm text-crema/70">
                    Already have an account?{' '}
                    <Link to="/signin" className="text-caramel transition hover:text-caramel/80">
                      Sign in
                    </Link>
                  </p>
                </div>

                <div className="mt-8 rounded-2xl border border-crema/10 bg-espresso-950/30 p-5">
                  <p className="text-xs font-medium tracking-[0.25em] text-crema/55">
                    NOTE
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-crema/70">
                    This is a UI demo—no real authentication. Account creation is simulated.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
