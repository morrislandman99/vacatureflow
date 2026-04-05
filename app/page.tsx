import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Job marketing voor MKB-bedrijven — Meer sollicitanten, lagere kosten',
  description:
    'Jobmarketing helpt MKB-bedrijven aan meer én betere sollicitanten via gerichte advertenties, vacatureoptimalisatie en werkgeversbranding. Transparante tarieven.',
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: 'Jobmarketing — Meer sollicitanten, lagere kosten per hire',
    description:
      'Gerichte job marketing voor MKB-bedrijven in Nederland. Meer reacties, sneller ingevuld, lagere kosten.',
    url: siteConfig.url,
  },
}

const stats = [
  { label: 'Meer sollicitanten', value: '+60%' },
  { label: 'Lagere kosten per hire', value: '−40%' },
  { label: 'Sneller ingevuld', value: '2×' },
]

const services = [
  {
    title: 'Vacatureoptimalisatie',
    description:
      'Een vacature die kandidaten aanspreekt. Wij schrijven en structureren je vacatureteksten zodat ze vindbaar én verleidelijk zijn.',
  },
  {
    title: 'Gerichte advertenties',
    description:
      'We plaatsen je vacature precies waar jouw doelgroep is — LinkedIn, Meta, Google Jobs — met budgetten die passen bij een MKB-bedrijf.',
  },
  {
    title: 'Werkgeverscontent',
    description:
      'Kandidaten oriënteren zich op jou als werkgever voordat ze solliciteren. Wij helpen je dat verhaal overtuigend te vertellen.',
  },
]

const steps = [
  { num: '1', title: 'Intake', description: 'We leren je bedrijf en vacature kennen.' },
  { num: '2', title: 'Strategie', description: 'We bepalen de juiste kanalen en doelgroep.' },
  { num: '3', title: 'Uitvoering', description: 'We lanceren campagnes en optimaliseren continu.' },
  { num: '4', title: 'Resultaat', description: 'Jij ontvangt gekwalificeerde sollicitanten.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark px-6 pb-32 pt-24">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-lime/10 px-3 py-1 text-sm text-lime">
            Job marketing voor MKB-bedrijven
          </span>
          <h1 className="mt-6 font-display text-5xl leading-tight text-white md:text-7xl">
            De kandidaten zijn er wel.{' '}
            <span className="text-lime">Je bereikt ze alleen nog niet.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/65 leading-relaxed">
            De meeste vacatures blijven openstaan omdat de kandidaten je vacature nooit te zien
            krijgen. Ze zoeken, ze scrollen, ze oriënteren zich. Alleen komen ze jou niet tegen.
            Dat is precies waar wij naar kijken.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-lime px-7 py-3 text-base font-medium text-dark hover:bg-lime/90 transition-colors"
            >
              Plan een gratis gesprek
            </Link>
            <Link
              href="/hoe-het-werkt"
              className="rounded-full border border-lime/40 px-7 py-3 text-base font-medium text-lime hover:bg-lime/10 transition-colors"
            >
              Hoe werkt het?
            </Link>
          </div>
          <div className="mt-16 flex flex-wrap gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-semibold text-lime">{stat.value}</p>
                <p className="mt-1 text-sm text-white/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="bg-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <span className="text-base font-medium text-ink">Onze diensten</span>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            Meer zichtbaarheid. Betere kandidaten.
          </h2>
          <p className="mt-4 max-w-xl text-ink-muted leading-relaxed">
            We combineren vacatureoptimalisatie, gerichte advertenties en werkgeversbranding
            tot één samenhangende aanpak.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl bg-white p-8 border border-border">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-ink/10">
                  <span className="text-ink">→</span>
                </div>
                <h3 className="font-display text-xl text-ink">{service.title}</h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/diensten" className="text-base font-medium text-ink hover:underline">
              Bekijk alle diensten →
            </Link>
          </div>
        </div>
      </section>

      {/* Hoe het werkt */}
      <section className="bg-dark px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <span className="text-sm font-medium text-lime">Werkwijze</span>
          <h2 className="mt-3 font-display text-4xl text-white md:text-5xl">
            We beginnen bij de kandidaatreis
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-white/10 bg-white/[0.08] p-6"
              >
                <span className="font-display text-4xl font-semibold text-lime">{step.num}</span>
                <h3 className="mt-4 font-display text-lg text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/hoe-het-werkt" className="text-sm font-medium text-lime hover:underline">
              Lees meer over onze aanpak →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl text-ink md:text-5xl">
            Klaar om meer sollicitanten te bereiken?
          </h2>
          <p className="mt-4 text-ink-muted leading-relaxed">
            Plan een gratis gesprek van 30 minuten. We kijken samen naar je huidige aanpak en wat
            er beter kan.
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
