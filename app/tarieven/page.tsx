import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Tarieven | Transparante prijzen voor recruitment marketing',
  description:
    'Bekijk de tarieven van Vacatureflow. Vaste maandprijzen zonder verborgen kosten. Starter vanaf €599, Groei vanaf €1.099, of een maatwerk offerte.',
  alternates: { canonical: `${siteConfig.url}/tarieven` },
  openGraph: { url: `${siteConfig.url}/tarieven` },
}

const plans = [
  {
    name: 'Starter',
    price: '€599',
    period: '/maand',
    description: 'Voor bedrijven met één of twee vacatures die professioneel zichtbaar willen zijn.',
    features: [
      '1 vacature',
      'Vacaturetekst optimalisatie',
      'Plaatsing op 3 kanalen',
      'Maandelijkse rapportage',
    ],
    cta: 'Start met Starter',
    highlighted: false,
  },
  {
    name: 'Groei',
    price: '€1.099',
    period: '/maand',
    description: 'Voor bedrijven die structureel meerdere posities willen invullen.',
    features: [
      'Tot 3 vacatures',
      'Vacatureteksten + A/B-testen',
      'Advertenties op alle relevante kanalen',
      'Employer branding content',
      'Wekelijkse rapportage + optimalisatie',
    ],
    cta: 'Start met Groei',
    highlighted: true,
  },
  {
    name: 'Maatwerk',
    price: 'Op maat',
    period: '',
    description: 'Voor bedrijven met specifieke wensen of een grotere wervingsbehoefte.',
    features: [
      'Onbeperkte vacatures',
      'Volledige werkgeversstrategie',
      'Dedicated contactpersoon',
      'Custom rapportage',
    ],
    cta: 'Vraag een offerte',
    highlighted: false,
  },
]

const faqs = [
  {
    question: 'Zit er een minimale looptijd aan?',
    answer: 'We werken met maandelijkse abonnementen zonder langetermijnverplichting. Je kunt maandelijks opzeggen.',
  },
  {
    question: 'Zijn advertentiebudgetten inbegrepen?',
    answer: 'Nee, advertentiebudgetten komen bovenop de maandprijs. We adviseren een realistisch budget en beheren dit volledig voor je.',
  },
  {
    question: 'Wanneer zie ik de eerste resultaten?',
    answer: 'De meeste klanten zien binnen 2–3 weken een stijging in het aantal sollicitaties. Optimale resultaten bereiken we na 4–6 weken.',
  },
  {
    question: 'Kan ik switchen van pakket?',
    answer: 'Ja, je kunt op elk moment upgraden of downgraden. We passen het pakket aan aan het begin van de volgende maand.',
  },
]

export default function TarievenPage() {
  return (
    <>
      <section className="bg-dark px-6 pb-24 pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full bg-lime/10 px-3 py-1 text-sm text-lime">
            Tarieven
          </span>
          <h1 className="mt-6 font-display text-5xl text-white md:text-6xl">
            Transparant en voorspelbaar
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg text-white/65 leading-relaxed">
            Vaste maandprijzen, geen verborgen kosten. Je weet precies wat je betaalt en wat je
            daarvoor terugkrijgt.
          </p>
        </div>
      </section>

      <section className="bg-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  plan.highlighted
                    ? 'bg-dark border border-lime/30 ring-1 ring-lime/20'
                    : 'bg-white border border-border'
                }`}
              >
                <div>
                  <p
                    className={`text-sm font-medium ${plan.highlighted ? 'text-lime' : 'text-ink-muted'}`}
                  >
                    {plan.name}
                  </p>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span
                      className={`font-display text-4xl font-semibold ${plan.highlighted ? 'text-white' : 'text-ink'}`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-sm ${plan.highlighted ? 'text-white/55' : 'text-ink-muted'}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className={`mt-3 text-sm leading-relaxed ${plan.highlighted ? 'text-white/65' : 'text-ink-muted'}`}>
                    {plan.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-3 text-sm ${plan.highlighted ? 'text-white/80' : 'text-ink-muted'}`}
                      >
                        <span className="mt-0.5 text-lime shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className={`mt-8 rounded-full px-6 py-3 text-sm font-medium text-center transition-colors ${
                    plan.highlighted
                      ? 'bg-lime text-dark hover:bg-lime/90'
                      : 'border border-border text-ink hover:bg-light'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-dark px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl text-white">Veelgestelde vragen</h2>
          <dl className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/[0.08] p-6">
                <dt className="font-display text-lg text-white">{faq.question}</dt>
                <dd className="mt-2 text-sm text-white/65 leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
    </>
  )
}
