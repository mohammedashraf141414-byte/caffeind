import { Instagram, Mail, Phone, Youtube } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-crema/10 bg-espresso-950">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-xl tracking-wide">
              <span className="text-caramel">CAFFE</span>
              <span className="text-crema">IND</span>
            </p>
            <p className="mt-3 max-w-sm text-sm text-crema/65">
              Where every sip tells a story—crafted for a global pace.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="mailto:mohammed.ashraf141414@gmail.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-crema/10 bg-espresso-950/30 text-crema/75 transition hover:bg-espresso-900/60 hover:text-crema"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-crema/10 bg-espresso-950/30 text-crema/75 transition hover:bg-espresso-900/60 hover:text-crema"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-crema/10 bg-espresso-950/30 text-crema/75 transition hover:bg-espresso-900/60 hover:text-crema"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="tel:+201123694316"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-crema/10 bg-espresso-950/30 text-crema/75 transition hover:bg-espresso-900/60 hover:text-crema"
                aria-label="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-crema">Visit us</p>
            <div className="mt-4 space-y-2 text-sm text-crema/70">
              <p>15 Coffee Street, Cairo</p>
              <p>Mon–Fri 8am–10pm</p>
              <p>Sat–Sun 9am–11pm</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-crema">Quick links</p>
            <div className="mt-4 grid gap-2 text-sm">
              <a className="text-crema/70 transition hover:text-crema" href="#about">
                About
              </a>
              <a className="text-crema/70 transition hover:text-crema" href="#menu">
                Menu
              </a>
              <a
                className="text-crema/70 transition hover:text-crema"
                href="#locations"
              >
                Locations
              </a>
              <a
                className="text-crema/70 transition hover:text-crema"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-crema/10 pt-6 text-xs text-crema/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} CAFFEIND. All rights reserved.</p>
          <p>Built with React + TypeScript + Tailwind.</p>
        </div>
      </div>
    </footer>
  )
}
