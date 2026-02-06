import { motion } from 'framer-motion'
import { Clock, MapPin, Phone } from 'lucide-react'

import SectionHeader from './SectionHeader'

type Location = {
  city: string
  address: string
  hours: string
  phone: string
  status: 'Flagship' | 'Now Open' | 'Coming Soon'
}

const locations: Location[] = [
  {
    city: 'Cairo',
    address: '15 Coffee Street, Downtown',
    hours: 'Mon–Fri 8am–10pm · Sat–Sun 9am–11pm',
    phone: '+20 112 369 4316',
    status: 'Flagship',
  },
  {
    city: 'Dubai',
    address: 'Marina Walk, Tower 3',
    hours: 'Daily 8am–12am',
    phone: '+971 50 000 0000',
    status: 'Now Open',
  },
  {
    city: 'London',
    address: 'Soho, 22 Brew Lane',
    hours: 'Mon–Sun 7am–9pm',
    phone: '+44 20 0000 0000',
    status: 'Coming Soon',
  },
  {
    city: 'New York',
    address: '5th Avenue, Midtown',
    hours: 'Mon–Sun 7am–10pm',
    phone: '+1 (212) 000-0000',
    status: 'Coming Soon',
  },
]

function StatusPill({ status }: { status: Location['status'] }) {
  const styles: Record<Location['status'], string> = {
    Flagship: 'bg-caramel text-espresso-950',
    'Now Open': 'bg-emerald-400/90 text-espresso-950',
    'Coming Soon': 'bg-crema/10 text-crema/80',
  }

  return (
    <span
      className={
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ' +
        styles[status]
      }
    >
      {status}
    </span>
  )
}

export default function Locations() {
  return (
    <section id="locations" className="relative py-20 bg-espresso-600">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="LOCATIONS"
          title="A coffee house with global standards"
          subtitle="Flagship moments, consistent training, and the same flavor profile—wherever you are."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="rounded-[28px] border border-crema/10 bg-espresso-950/35 p-6 shadow-glow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium tracking-[0.25em] text-crema/55">
                    {loc.city.toUpperCase()}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-crema">
                    {loc.city} Store
                  </h3>
                </div>
                <StatusPill status={loc.status} />
              </div>

              <div className="mt-5 grid gap-3">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-caramel" />
                  <p className="text-sm text-crema/75">{loc.address}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 text-caramel" />
                  <p className="text-sm text-crema/75">{loc.hours}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-caramel" />
                  <p className="text-sm text-crema/75">{loc.phone}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['Wi‑Fi', 'Workspace', 'Takeaway', 'Delivery'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-crema/10 bg-espresso-950/30 px-3 py-1 text-xs font-semibold text-crema/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
