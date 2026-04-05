import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Hoe het werkt — Onze aanpak stap voor stap',
  description:
    'Lees hoe Jobmarketing in vier stappen van intake tot resultaat werkt. Een heldere aanpak zonder verrassingen voor MKB-bedrijven.',
  alternates: { canonical: `${siteConfig.url}/hoe-het-werkt` },
  openGraph: { url: `${siteConfig.url}/hoe-het-werkt` },
}

const steps = [
  {
    num: '01',
    title: 'Intake & analyse',
    description:
      'We leren je bedrijf, vacature en doelgroep kennen. We kijken naar wat je nu doet, wat werkt en wat beter kan. Dit gesprek duurt 30–45 minuten en is volledig vrijblijvend.',
  },
  {
    num: '02',
    title: 'Strategie op maat',
    description:
      'Op basis van de intake stellen we een aanpak samen. Welke kanalen, welke doelgroep, welke boodschap. We lichten dit toe en stemmen af voordat we iets lanceren.',
  },
  {
    num: '03',
    title: 'Uitvoering & optimalisatie',
    description:
      'We lanceren de campagne en monitoren dagelijks. We optimaliseren continu op basis van data — klikken, sollicitaties, kosten per hire. Je ontvangt wekelijks een update.',
  },
  {
    num: '04',
    title: 'Resultaat & rapportage',
    description:
      'Je ontvangt gekwalificeerde sollicitanten. We rapporteren maandelijks op de belangrijkste metrics en bespreken samen wat de volgende stap is.',
  },
]

export default function HoeHetWerktPage() {
  return (
    <>
      <section className="bg-dark px-6 pb-24 pt-20">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-lime/10 px-3 py-1 text-sm text-lime">
            Onze aanpak
          </span>
          <h1 className="mt-6 font-display text-5xl text-white md:text-6xl">
            Transparant, resultaatgericht en zonder verrassingen
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/65 leading-relaxed">
            We werken in vier duidelijke stappen. Je weet altijd wat we doen, waarom, en wat het
            oplevert.
          </p>
        </div>
      </section>

      <section className="bg-light px-6 py-24">
        <div className="mx-auto max-w-4xl space-y-6">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-8 rounded-2xl bg-white border border-border p-8">
              <span className="font-display text-5xl font-semibold text-lime shrink-0">{step.num}</span>
              <div>
                <h2 className="font-display text-2xl text-ink">{step.title}</h2>
                <p className="mt-3 text-ink-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-dark px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl text-white">Begin met stap één</h2>
          <p className="mt-4 text-white/65">
            Plan een gratis gesprek en ontdek wat job marketing voor jouw vacature kan betekenen.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-lime px-8 py-4 text-base font-medium text-dark hover:bg-lime/90 transition-colors"
          >
            Plan een gratis gesprek
          </Link>
        </div>
      </section>
    </>
  )
}
