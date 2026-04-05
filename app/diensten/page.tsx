import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import { serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Diensten — Job marketing voor MKB',
  description:
    'Ontdek hoe Jobmarketing jouw vacatures zichtbaarder maakt: vacatureoptimalisatie, gerichte advertenties en werkgeverscontent op maat.',
  alternates: { canonical: `${siteConfig.url}/diensten` },
  openGraph: { url: `${siteConfig.url}/diensten` },
}

const services = [
  {
    title: 'Vacatureoptimalisatie',
    description:
      'De meeste vacatureteksten zijn geschreven voor de werkgever, niet voor de kandidaat. Wij herschrijven en structureren je vacatures zodat ze aansluiten op wat kandidaten zoeken — én op wat Google en AI-zoekmachines oppikken.',
    bullets: ['SEO-geoptimaliseerde vacaturetekst', 'Kandidaatgerichte structuur', 'A/B-testen op koppen en CTA'],
  },
  {
    title: 'Gerichte advertenties',
    description:
      'We plaatsen betaalde advertenties op de platformen waar jouw doelgroep actief is. Geen verspild budget op irrelevante kanalen, maar scherpe targeting op functie, locatie en gedrag.',
    bullets: ['LinkedIn, Meta en Google Jobs', 'Doelgroeptargeting op maat', 'Wekelijkse rapportage en optimalisatie'],
  },
  {
    title: 'Werkgeverscontent',
    description:
      'Kandidaten googelen je bedrijf voordat ze solliciteren. Een sterk werkgeversverhaal verkort de beslissing. Wij helpen je dat verhaal te formuleren en te verspreiden.',
    bullets: ['Employer branding strategie', 'Social content en vacaturepagina', 'Reviews en reputatiemanagement'],
  },
]

export default function DienstenPage() {
  return (
    <>
      <section className="bg-dark px-6 pb-24 pt-20">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-lime/10 px-3 py-1 text-sm text-lime">
            Wat we doen
          </span>
          <h1 className="mt-6 font-display text-5xl text-white md:text-6xl">
            Alles voor meer en betere sollicitanten
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/65 leading-relaxed">
            Drie diensten die samen één aanpak vormen: meer zichtbaarheid, de juiste kandidaten
            bereiken, en een werkgeversmerk dat overtuigt.
          </p>
        </div>
      </section>

      <section className="bg-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <div key={service.title} className="flex flex-col rounded-2xl bg-white border border-border p-8">
                <span className="font-display text-4xl font-semibold text-ink/25 leading-none">
                  0{i + 1}
                </span>
                <h2 className="mt-5 font-display text-2xl text-ink">{service.title}</h2>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">{service.description}</p>
                <ul className="mt-6 space-y-2 border-t border-border pt-6">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-ink-muted">
                      <span className="mt-0.5 text-ink shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl text-white">Welke dienst past bij jou?</h2>
          <p className="mt-4 text-white/65">
            In een gratis gesprek van 30 minuten kijken we samen wat er voor jou het meeste
            oplevert.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-lime px-8 py-4 text-base font-medium text-dark hover:bg-lime/90 transition-colors"
          >
            Plan een gratis gesprek
          </Link>
        </div>
      </section>

      {services.map((s) => (
        <script
          key={s.title}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(s.title, s.description)) }}
        />
      ))}
    </>
  )
}
