import { useState } from 'react'
import { motion } from 'framer-motion'
import Floral, { Sprig } from './Floral.jsx'

/**
 * Full-screen intro overlay: a closed wax-sealed envelope the guest taps to open.
 * Sequence on tap:
 *   1. the top flap rotates up & back (rotateX) and drops behind the envelope,
 *   2. the invitation card slides up out of the pocket,
 *   3. `onOpen()` fires so the parent can fade this overlay away.
 */
export default function Envelope({ onOpen }) {
  const [opened, setOpened] = useState(false)

  const handleOpen = () => {
    if (opened) return
    setOpened(true)
    // Sequence: flap opens -> card lifts out -> envelope sinks & fades ->
    // the lone card is held briefly -> onOpen() reveals the page beneath.
    setTimeout(() => onOpen?.(), 2600)
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-cream px-6"
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* framing florals */}
      <motion.div
        className="pointer-events-none absolute -left-5 -top-5 h-36 w-36 sm:h-48 sm:w-48"
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Floral variant="peony" className="h-full w-full" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -bottom-5 -right-5 h-36 w-36 sm:h-48 sm:w-48"
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.1 }}
      >
        <Floral variant="bouquet-right" className="h-full w-full" flip />
      </motion.div>

      <motion.p
        className="mb-8 font-arabic text-2xl text-brown-soft sm:text-3xl"
        dir="rtl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
      </motion.p>

      {/* The envelope */}
      <motion.button
        onClick={handleOpen}
        aria-label="Tap to open the invitation"
        className="relative cursor-pointer outline-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: opened ? 0 : [0, -8, 0],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.4 },
          scale: { duration: 0.8, delay: 0.4 },
          y: opened ? { duration: 0.3 } : { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
        }}
        style={{ perspective: 1400 }}
      >
        <div className="relative h-48 w-72 origin-center sm:scale-110 lg:scale-125">
          {/* back panel of the envelope — sinks & fades after the card is out */}
          <motion.div
            className="absolute inset-0 z-10 rounded-md border border-gold/50 bg-[#F3EBDD] shadow-xl shadow-brown/15"
            initial={false}
            animate={{ opacity: opened ? 0 : 1, y: opened ? 44 : 0 }}
            transition={{ duration: 0.7, delay: opened ? 1.45 : 0, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* the invitation card that slides out */}
          <motion.div
            className="absolute left-1/2 top-2 z-20 flex h-44 w-[15.5rem] flex-col items-center justify-center rounded-md border border-gold/40 bg-cream px-4 text-center shadow-md"
            initial={false}
            // x:'-50%' centers the card (Framer's transform would otherwise
            // override Tailwind's -translate-x-1/2); y lifts it out, scale grows
            // it into the focal point once it has cleared the envelope.
            animate={{ x: '-50%', y: opened ? '-86%' : 0, scale: opened ? 1.12 : 1 }}
            transition={{
              x: { duration: 0 },
              y: { duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 0.7, delay: 1.4, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <Sprig className="mb-2 h-8 w-8 opacity-80" />
            <p className="font-body text-[0.6rem] uppercase tracking-widest2 text-brown-soft">
              The wedding of
            </p>
            <p className="mt-1 font-script text-3xl leading-tight text-brown">
              Toriqul <span className="text-gold">&amp;</span> Lamyea
            </p>
            <span className="gold-divider mt-3 w-24" />
            <p className="mt-3 font-body text-[0.6rem] uppercase tracking-widest2 text-brown-soft">
              19 &middot; June &middot; 2026
            </p>
          </motion.div>

          {/* opaque envelope front — covers the card, then sinks & fades away */}
          <motion.div
            className="absolute inset-0 z-30 overflow-hidden rounded-md border border-gold/50 bg-[#EEE2CF] shadow-inner"
            initial={false}
            animate={{ opacity: opened ? 0 : 1, y: opened ? 44 : 0 }}
            transition={{ duration: 0.7, delay: opened ? 1.45 : 0, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg
              viewBox="0 0 288 192"
              preserveAspectRatio="none"
              className="h-full w-full"
              aria-hidden="true"
            >
              {/* lower pocket fold */}
              <path d="M2 190 L144 86 L286 190" fill="none" stroke="#D4AF37" strokeOpacity="0.35" strokeWidth="1.5" />
              {/* side folds */}
              <path d="M2 2 L144 86 M286 2 L144 86" stroke="#D4AF37" strokeOpacity="0.18" strokeWidth="1" />
            </svg>
          </motion.div>

          {/* top flap — rotates open about its top edge, then drops behind */}
          <motion.div
            className="absolute left-0 top-0 h-0 w-0 origin-top"
            style={{
              borderLeft: '144px solid transparent',
              borderRight: '144px solid transparent',
              borderTop: '112px solid #E7D9C0',
              transformOrigin: 'top center',
              transformStyle: 'preserve-3d',
            }}
            initial={false}
            animate={{ rotateX: opened ? -175 : 0, zIndex: opened ? 5 : 40, opacity: opened ? 0 : 1 }}
            transition={{
              rotateX: { duration: 0.6, ease: 'easeInOut' },
              zIndex: { delay: 0.5 },
              opacity: { duration: 0.7, delay: 1.45, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            {/* wax seal sitting on the flap */}
            <motion.div
              className="absolute left-[-26px] top-[-92px] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-soft shadow-md"
              animate={{ opacity: opened ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-script text-xl text-cream">T&amp;L</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.button>

      {/* tap hint */}
      <motion.p
        className="mt-12 font-body text-[0.7rem] uppercase tracking-widest2 text-brown-soft"
        animate={{ opacity: opened ? 0 : [0.4, 1, 0.4] }}
        transition={opened ? { duration: 0.3 } : { duration: 2.4, repeat: Infinity, delay: 1.4 }}
      >
        Tap to open
      </motion.p>
    </motion.div>
  )
}
