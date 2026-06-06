import Section, { Reveal } from './Section.jsx'
import { Sprig, FloralAccent } from './Floral.jsx'

const LAT = 24.8448989
const LNG = 89.3740522

// Keyless embed (no Google Cloud API key required) + a directions deep-link.
const MAP_EMBED = `https://maps.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`
const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`

export default function Venue() {
  return (
    <Section id="venue" className="overflow-hidden">
      <Sprig className="pointer-events-none absolute -left-3 top-8 h-24 w-20 opacity-60 sm:h-32 sm:w-24" />
      <Sprig className="pointer-events-none absolute -right-3 top-8 h-24 w-20 opacity-60 sm:h-32 sm:w-24" flip />
      <FloralAccent
        from="bottom"
        className="pointer-events-none absolute -bottom-2 -left-5 h-24 w-24 opacity-60 sm:h-32 sm:w-32"
      />
      <FloralAccent
        from="bottom"
        flip
        delay={0.1}
        className="pointer-events-none absolute -bottom-2 -right-5 h-24 w-24 opacity-60 sm:h-32 sm:w-32"
      />

      <Reveal className="text-center">
        <p className="section-eyebrow">The Celebration</p>
        <h2 className="mt-4 font-script text-5xl text-brown sm:text-6xl">City Convention Hall</h2>
        <div className="gold-divider mt-6" />
        <p className="mx-auto mt-6 max-w-md font-serif text-lg leading-relaxed text-brown sm:text-xl">
          3rd Floor, City Center, 113 Shahid Abdul Jabbar Road, Joleswaritola,
          Bogura Sadar 5800.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-10">
        <div className="overflow-hidden rounded-2xl border-2 border-gold/40 shadow-lg shadow-brown/10">
          <iframe
            title="City Convention Hall location map"
            src={MAP_EMBED}
            className="h-72 w-full sm:h-96"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Reveal>

      <Reveal delay={0.25} className="mt-8 flex justify-center">
        <a
          href={MAP_DIRECTIONS}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-gold bg-gold/10 px-8 py-3 font-body text-xs uppercase tracking-widest2 text-brown transition-colors duration-300 hover:bg-gold hover:text-cream"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Get Directions
        </a>
      </Reveal>
    </Section>
  )
}
