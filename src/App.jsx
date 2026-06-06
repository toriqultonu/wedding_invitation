import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Envelope from './components/Envelope.jsx'
import Hero from './components/Hero.jsx'
import Family from './components/Family.jsx'
import EventDetails from './components/EventDetails.jsx'
import Venue from './components/Venue.jsx'
import Section, { Reveal } from './components/Section.jsx'
import { Vine, Sprig } from './components/Floral.jsx'

export default function App() {
  const [opened, setOpened] = useState(false)

  // Lock background scroll while the envelope intro is showing.
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [opened])

  return (
    <>
      <AnimatePresence>
        {!opened && <Envelope key="envelope" onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      <main className="relative w-full overflow-x-hidden">
        <Hero />

        <Separator />
        <Family />
        <Separator />
        <EventDetails />
        <Separator />
        <Venue />

        {/* Closing */}
        <Section className="overflow-hidden pt-10 text-center">
          <Sprig className="pointer-events-none absolute -left-2 top-6 h-24 w-20 opacity-70 sm:h-32 sm:w-24" />
          <Sprig className="pointer-events-none absolute -right-2 top-6 h-24 w-20 opacity-70 sm:h-32 sm:w-24" flip />
          <Reveal>
            <p className="font-serif text-xl italic leading-relaxed text-brown-soft sm:text-2xl">
              “And among His signs is this, that He created for you mates from among
              yourselves, that you may dwell in tranquility with them, and He has put
              love and mercy between your hearts.”
            </p>
            <p className="mt-4 font-body text-xs uppercase tracking-widest2 text-brown-soft">
              Surah Ar-Rum 30:21
            </p>
            <div className="mt-10 flex justify-center">
              <Vine className="h-10 w-56 opacity-80 sm:w-72" />
            </div>
            <p className="mt-8 font-script text-5xl text-brown sm:text-6xl">
              Toriqul <span className="text-gold">&amp;</span> Lamyea
            </p>
            <p className="mt-4 font-body text-[0.7rem] uppercase tracking-widest2 text-brown-soft">
              We can’t wait to celebrate with you
            </p>
          </Reveal>
        </Section>
      </main>
    </>
  )
}

function Separator() {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <span className="gold-divider w-48" />
    </div>
  )
}
