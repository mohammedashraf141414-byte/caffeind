import { motion } from 'framer-motion'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
}

export default function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-[0.3em] text-caramel/80"
        >
          {eyebrow}
        </motion.p>
      ) : null}

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mt-3 text-3xl font-semibold tracking-tight text-crema md:text-4xl"
      >
        {title}
      </motion.h2>

      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-base leading-relaxed text-crema/70"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  )
}
