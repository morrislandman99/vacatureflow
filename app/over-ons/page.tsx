import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Over ons — Het team achter Jobmarketing',
  description:
    'Jobmarketing is opgericht om MKB-bedrijven te helpen de juiste kandidaten te bereiken. Leer ons kennen en ontdek waarom wij anders werken.',
  alternates: { canonical: `${siteConfig.url}/over-ons` },
  openGraph: { url: `${siteConfig.url}/over-ons` },
}

export default function OverOnsPage() {
  return (
    <>
      <section className="bg-dark px-6 pb-24 pt-20">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-lime/10 px-3 py-1 text-sm text-lime">
            Over ons
          </span>
          <h1 className="mt-6 font-display text-5xl text-white md:text-6xl">
            Wij geloven dat elke vacature vindbaar moet zijn
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/65 leading-relaxed">
            Jobmarketing is opgericht omdat te veel goede bedrijven hun vacatures niet gevuld
            krijgen — niet door gebrek aan kandidaten, maar door gebrek aan zichtbaarheid.
          </p>
        </div>
      </section>

      <section className="bg-light px-6 py-24">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="rounded-2xl bg-white border border-border p-10">
            <h2 className="font-display text-3xl text-ink">Onze missie</h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              MKB-bedrijven verdienen dezelfde kwaliteit job marketing als grote corporates — maar
              dan tegen een prijs die past bij hun schaal. Wij combineren data, creativiteit en
              kanaalkennis om vacatures bij de juiste mensen te krijgen.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-border p-10">
            <h2 className="font-display text-3xl text-ink">Waarom Jobmarketing?</h2>
            <ul className="mt-6 space-y-4">
              {[
                'We specialiseren ons uitsluitend in job marketing — geen breed bureau, maar diepe expertise.',
                'We werken transparant: je ziet precies wat we doen en wat het kost.',
                'We meten op resultaat: sollicitaties, kosten per hire, kwaliteit van kandidaten.',
                'We denken vanuit de kandidaat, niet vanuit de werkgever.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-muted">
                  <span className="mt-1 text-ink shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-dark px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl text-white">Kennismaken?</h2>
          <p className="mt-4 text-white/65">
            Plan een vrijblijvend gesprek en ontdek of we bij elkaar passen.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-lime px-8 py-4 text-base font-medium text-dark hover:bg-lime/90 transition-colors"
          >
            Plan een gesprek
          </Link>
        </div>
      </section>
    </>
  )
}
