import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Privacybeleid',
  description: 'Lees het privacybeleid van Vacatureflow. Hoe we omgaan met jouw persoonsgegevens.',
  alternates: { canonical: `${siteConfig.url}/privacybeleid` },
  robots: { index: false, follow: false },
}

export default function PrivacybeleidPage() {
  return (
    <section className="bg-light px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl text-ink">Privacybeleid</h1>
        <p className="mt-4 text-ink-muted text-sm">Laatste update: april 2026</p>
        <div className="mt-10 prose prose-sm max-w-none text-ink-muted leading-relaxed space-y-6">
          <p>
            Vacatureflow (hierna: &ldquo;wij&rdquo;) verwerkt persoonsgegevens in overeenstemming
            met de Algemene Verordening Gegevensbescherming (AVG). Dit privacybeleid legt uit welke
            gegevens we verzamelen, waarom, en hoe we daarmee omgaan.
          </p>
          <h2 className="font-display text-2xl text-ink">Welke gegevens verzamelen we?</h2>
          <p>
            Via het contactformulier verzamelen we naam, e-mailadres, bedrijfsnaam en de inhoud van
            je bericht. Deze gegevens gebruiken we uitsluitend om je vraag te beantwoorden.
          </p>
          <h2 className="font-display text-2xl text-ink">Hoe lang bewaren we gegevens?</h2>
          <p>
            We bewaren contactgegevens niet langer dan noodzakelijk. Na afhandeling van je vraag
            verwijderen we je gegevens binnen 12 maanden.
          </p>
          <h2 className="font-display text-2xl text-ink">Contact</h2>
          <p>
            Vragen over dit privacybeleid? Stuur een e-mail naar{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-ink underline hover:text-ink-muted">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
