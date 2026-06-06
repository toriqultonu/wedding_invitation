import { motion } from 'framer-motion'
import Floral, { Sprig, FloralCluster } from './Floral.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.3 + i * 0.25, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      {/* Corner florals slide in from the edges */}
      <motion.div
        className="pointer-events-none absolute -left-6 -top-6 h-40 w-40 sm:h-56 sm:w-56"
        initial={{ opacity: 0, x: -60, y: -60 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Floral variant="peony" className="h-full w-full" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 sm:h-56 sm:w-56"
        initial={{ opacity: 0, x: 60, y: 60 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <Floral variant="mauve" className="h-full w-full" flip />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 sm:h-56 sm:w-56"
        initial={{ opacity: 0, x: 60, y: -60 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Floral variant="white" className="h-full w-full" flip />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -bottom-4 -left-8 hidden h-32 w-32 sm:block sm:h-44 sm:w-44"
        initial={{ opacity: 0, x: -60, y: 60 }}
        animate={{ opacity: 0.85, x: 0, y: 0 }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Floral variant="rose" className="h-full w-full" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-2 top-1/3 hidden h-28 w-20 opacity-60 sm:block"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Sprig className="h-full w-full" flip />
      </motion.div>

      {/* Bismillah — Arabic */}
      <motion.p
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate="show"
        dir="rtl"
        className="font-arabic text-2xl leading-relaxed text-brown sm:text-4xl"
      >
        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
      </motion.p>
      <motion.p
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate="show"
        className="mt-2 font-serif text-base italic text-brown-soft sm:text-lg"
      >
        Bismillahir Rahmanir Raheem
      </motion.p>

      <motion.p
        variants={fadeUp}
        custom={1}
        initial="hidden"
        animate="show"
        className="mt-6 font-body text-[0.7rem] uppercase tracking-widest2 text-brown-soft sm:text-xs"
      >
        Together with our families
      </motion.p>

      {/* Names inside a gold ring, flanked by lush floral clusters */}
      <div className="relative mt-16 flex h-72 w-72 items-center justify-center sm:mt-24 sm:h-[26rem] sm:w-[26rem]">
        <motion.div
          className="pointer-events-none absolute inset-3 rounded-full border border-gold/70"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-full border border-gold/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* upper-left cluster overlapping the ring */}
        <motion.div
          className="pointer-events-none absolute -left-10 -top-10 z-10 h-40 w-40 sm:-left-12 sm:-top-12 sm:h-56 sm:w-56"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <FloralCluster className="h-full w-full" />
        </motion.div>
        {/* lower-right cluster overlapping the ring */}
        <motion.div
          className="pointer-events-none absolute -bottom-10 -right-10 z-10 h-40 w-40 sm:-bottom-12 sm:-right-12 sm:h-56 sm:w-56"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <FloralCluster className="h-full w-full" flip />
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="z-20 flex flex-col items-center"
        >
          <h1 className="font-script text-6xl leading-none text-brown sm:text-8xl">Toriqul</h1>
          <span className="my-1 font-script text-4xl text-gold sm:my-2 sm:text-6xl">&amp;</span>
          <h1 className="font-script text-6xl leading-none text-brown sm:text-8xl">Lamyea</h1>
        </motion.div>
      </div>

      {/* Date teaser + scroll cue */}
      <motion.div
        variants={fadeUp}
        custom={3}
        initial="hidden"
        animate="show"
        className="mt-16 flex flex-col items-center gap-3 sm:mt-24"
      >
        <p className="font-body text-xs uppercase tracking-widest2 text-brown-soft sm:text-sm">
          19 &middot; June &middot; 2026
        </p>
        <span className="gold-divider w-40" />
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.span
          className="block text-gold"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </motion.div>
    </section>
  )
}
