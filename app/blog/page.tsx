import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Blog | Inzichten over recruitment marketing en werving',
  description:
    'Lees praktische artikelen over job marketing, vacatureoptimalisatie en werkgeversbranding voor MKB-bedrijven in Nederland.',
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: { url: `${siteConfig.url}/blog` },
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-dark px-6 pb-20 pt-20">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-lime/10 px-3 py-1 text-sm text-lime">
            Blog
          </span>
          <h1 className="mt-6 font-display text-5xl text-white md:text-6xl">
            Inzichten over job marketing
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/65 leading-relaxed">
            Praktische artikelen over vacatureoptimalisatie, gerichte advertenties en
            werkgeversbranding voor MKB-bedrijven.
          </p>
        </div>
      </section>

      <section className="bg-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-ink-muted">Artikelen volgen binnenkort.</p>
        </div>
      </section>
    </>
  )
}
