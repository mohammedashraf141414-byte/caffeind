import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useMemo, useState } from 'react'

import SectionHeader from './SectionHeader'

type FormState = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })

  const mailtoHref = useMemo(() => {
    const subject = `CAFFEIND inquiry from ${form.name || 'Guest'}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      '',
      form.message,
    ].join('\n')

    return `mailto:mohammed.ashraf141414@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }, [form.email, form.message, form.name])

  return (
    <section id="contact" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-espresso-950 via-espresso-950/90 to-espresso-950" />

      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="CONTACT"
          title="Say hello. We'll brew something great together."
          subtitle="Feedback, partnerships, catering, press—drop a message and our team will reply." 
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-[28px] border border-crema/10 bg-espresso-950/35 p-6 shadow-glow"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = mailtoHref
              }}
              className="grid gap-4"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-crema/60">
                    Your name
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) =>
                      setForm((v) => ({ ...v, name: e.target.value }))
                    }
                    className="mt-2 h-11 w-full rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 text-sm text-crema outline-none transition focus:border-crema/25"
                    placeholder="Mohamed"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-crema/60">
                    Email
                  </label>
                  <input
                    value={form.email}
                    onChange={(e) =>
                      setForm((v) => ({ ...v, email: e.target.value }))
                    }
                    className="mt-2 h-11 w-full rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 text-sm text-crema outline-none transition focus:border-crema/25"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-crema/60">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((v) => ({ ...v, message: e.target.value }))
                  }
                  className="mt-2 min-h-[140px] w-full resize-none rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 py-3 text-sm text-crema outline-none transition focus:border-crema/25"
                  placeholder="Tell us what you're building..."
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-crema/55">
                  Submitting will open your email client (no backend required).
                </p>

                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-caramel px-5 text-sm font-semibold text-espresso-950 transition hover:bg-[#d29a70]"
                >
                  Send message
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="lg:col-span-2 rounded-[28px] border border-crema/10 bg-espresso-950/35 p-6 shadow-glow"
          >
            <h3 className="text-lg font-semibold text-crema">Direct lines</h3>
            <p className="mt-2 text-sm text-crema/70">
              Prefer a quick link? Reach us instantly.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                className="flex items-center gap-3 rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 py-3 text-sm font-semibold text-crema/80 transition hover:bg-espresso-900/60 hover:text-crema"
                href="https://maps.app.goo.gl/cCAdLmdYwgjVVNiR8"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin className="h-4 w-4 text-caramel" />
                Our location
              </a>

              <a
                className="flex items-center gap-3 rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 py-3 text-sm font-semibold text-crema/80 transition hover:bg-espresso-900/60 hover:text-crema"
                href="mailto:mohammed.ashraf141414@gmail.com"
              >
                <Mail className="h-4 w-4 text-caramel" />
                Email
              </a>

              <a
                className="flex items-center gap-3 rounded-2xl border border-crema/10 bg-espresso-950/30 px-4 py-3 text-sm font-semibold text-crema/80 transition hover:bg-espresso-900/60 hover:text-crema"
                href="tel:+201123694316"
              >
                <Phone className="h-4 w-4 text-caramel" />
                Call us
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-crema/10 bg-espresso-950/30 p-5">
              <p className="text-xs font-medium tracking-[0.25em] text-crema/55">
                NOTE
              </p>
              <p className="mt-2 text-sm leading-relaxed text-crema/70">
                Want Arabic UI too? Tell me and I'll add language toggle + RTL.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
