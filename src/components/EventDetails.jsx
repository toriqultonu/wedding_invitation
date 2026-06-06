import Section, { Reveal } from './Section.jsx'
import { FloralAccent } from './Floral.jsx'

export default function EventDetails() {
  return (
    <Section id="event" className="overflow-hidden">
      <FloralAccent
        from="top"
        className="pointer-events-none absolute -right-4 -top-2 h-28 w-28 opacity-70 sm:h-36 sm:w-36"
        flip
      />
      <FloralAccent
        from="bottom"
        delay={0.15}
        className="pointer-events-none absolute -bottom-2 -left-4 h-28 w-28 opacity-70 sm:h-36 sm:w-36"
      />

      <Reveal className="text-center">
        <p className="mx-auto max-w-md font-serif text-xl italic leading-relaxed text-brown-soft sm:text-2xl">
          Request the honor of your presence at the reception ceremony on
        </p>
      </Reveal>

      {/* Structured date with vertical rules */}
      <Reveal delay={0.15} className="mt-12">
        <div className="flex items-stretch justify-center gap-5 text-brown sm:gap-8">
          <div className="flex flex-col items-center justify-center">
            <span className="font-body text-xs uppercase tracking-widest2 text-brown-soft">
              Friday
            </span>
          </div>

          <span className="w-px self-stretch bg-gold/60" aria-hidden="true" />

          <div className="flex flex-col items-center">
            <span className="font-serif text-6xl leading-none text-gold sm:text-7xl">19</span>
            <span className="mt-2 font-body text-xs uppercase tracking-widest2 text-brown-soft">
              June
            </span>
          </div>

          <span className="w-px self-stretch bg-gold/60" aria-hidden="true" />

          <div className="flex flex-col items-center justify-center">
            <span className="font-body text-xs uppercase tracking-widest2 text-brown-soft">
              2026
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3} className="mt-10 text-center">
        <div className="gold-divider" />
        <p className="mt-6 font-serif text-2xl text-brown sm:text-3xl">2:00 in the afternoon</p>
        <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-brown-soft">
          2:00 PM
        </p>
      </Reveal>
    </Section>
  )
}
