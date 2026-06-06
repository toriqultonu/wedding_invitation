import Section, { Reveal } from './Section.jsx'
import { Vine, FloralAccent } from './Floral.jsx'

function Person({ eyebrow, name, parentsLabel, parents, delay }) {
  return (
    <Reveal delay={delay} className="flex flex-1 flex-col items-center text-center">
      <p className="section-eyebrow">{eyebrow}</p>
      <h3 className="mt-4 font-script text-5xl text-brown sm:text-6xl">{name}</h3>
      <p className="mt-5 font-body text-xs uppercase tracking-widest text-brown-soft">
        {parentsLabel}
      </p>
      <p className="mt-2 max-w-xs font-serif text-lg leading-relaxed text-brown sm:text-xl">
        {parents}
      </p>
    </Reveal>
  )
}

export default function Family() {
  return (
    <Section id="family" className="overflow-hidden">
      <FloralAccent
        from="left"
        className="pointer-events-none absolute -left-6 top-10 h-24 w-24 opacity-60 sm:h-32 sm:w-32"
      />
      <FloralAccent
        from="right"
        flip
        delay={0.1}
        className="pointer-events-none absolute -right-6 bottom-10 h-24 w-24 opacity-60 sm:h-32 sm:w-32"
      />

      <Reveal className="mb-14 text-center">
        <p className="section-eyebrow">With joyful hearts</p>
        <div className="mt-5 flex justify-center">
          <Vine className="h-9 w-52 opacity-80 sm:w-64" />
        </div>
      </Reveal>

      <div className="flex flex-col items-stretch gap-14 sm:flex-row sm:gap-8">
        <Person
          eyebrow="The Groom"
          name="Toriqul Islam"
          parentsLabel="Only son of"
          parents="Abu Taher & Taslima Begum"
          delay={0}
        />

        {/* Vertical / horizontal ampersand divider */}
        <div className="flex items-center justify-center">
          <span className="font-script text-5xl text-gold sm:text-6xl">&amp;</span>
        </div>

        <Person
          eyebrow="The Bride"
          name="Lamyea Islam"
          parentsLabel="Only daughter of"
          parents="Late Hafizul Islam & Nargis Akter"
          delay={0.15}
        />
      </div>
    </Section>
  )
}
