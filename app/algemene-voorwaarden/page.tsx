import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Algemene voorwaarden',
  description: 'De algemene voorwaarden van Jobmarketing.',
  alternates: { canonical: `${siteConfig.url}/algemene-voorwaarden` },
  robots: { index: false, follow: false },
}

export default function AlgemeneVoorwaardenPage() {
  return (
    <section className="bg-light px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl text-ink">Algemene voorwaarden</h1>
        <p className="mt-4 text-ink-muted text-sm">Laatste update: april 2026</p>
        <div className="mt-10 space-y-6 text-sm text-ink-muted leading-relaxed">
          <p>
            Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen Jobmarketing
            en haar opdrachtgevers.
          </p>
          <h2 className="font-display text-2xl text-ink">Artikel 1 — Definities</h2>
          <p>
            Onder &ldquo;opdrachtgever&rdquo; wordt verstaan iedere natuurlijke of rechtspersoon die
            een overeenkomst aangaat met Jobmarketing.
          </p>
          <h2 className="font-display text-2xl text-ink">Artikel 2 — Toepasselijkheid</h2>
          <p>
            Deze voorwaarden zijn van toepassing op alle offertes, overeenkomsten en leveringen van
            Jobmarketing, tenzij schriftelijk anders overeengekomen.
          </p>
          <h2 className="font-display text-2xl text-ink">Artikel 3 — Contact</h2>
          <p>
            Vragen over deze voorwaarden? Stuur een e-mail naar{' '}
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
