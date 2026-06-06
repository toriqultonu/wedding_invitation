import { motion } from 'framer-motion'

/**
 * Shared scroll-reveal primitive.
 * Children fade + rise (y: 20 -> 0) the first time they enter the viewport.
 */
export function Reveal({ children, delay = 0, className = '', y = 20 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/**
 * A full-width page section with consistent vertical rhythm and a centred,
 * width-constrained content column.
 */
export default function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`relative w-full px-6 py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-3xl">{children}</div>
    </section>
  )
}
