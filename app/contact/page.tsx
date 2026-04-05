import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { ContactForm } from '@/components/ContactForm'
import { BookingEmbed } from '@/components/BookingEmbed'

export const metadata: Metadata = {
  title: 'Contact — Plan een gratis gesprek',
  description:
    'Neem contact op met Jobmarketing of plan direct een gratis gesprek van 30 minuten. We kijken samen naar jouw vacature en wervingsuitdaging.',
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: { url: `${siteConfig.url}/contact` },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-dark px-6 pb-20 pt-20">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-lime/10 px-3 py-1 text-sm text-lime">
            Contact
          </span>
          <h1 className="mt-6 font-display text-5xl text-white md:text-6xl">
            Laten we kennismaken
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/65 leading-relaxed">
            Plan een gratis gesprek van 30 minuten, of stuur ons een bericht. We reageren binnen
            één werkdag.
          </p>
        </div>
      </section>

      <section className="bg-light px-6 py-24">
        <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-ink">Stuur een bericht</h2>
            <p className="mt-3 text-ink-muted leading-relaxed">
              Vertel ons over je vacature en wervingsuitdaging. We nemen binnen één werkdag contact op.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl text-ink">Of plan direct een gesprek</h2>
            <p className="mt-3 mb-6 text-ink-muted leading-relaxed">
              Kies een moment dat jou uitkomt. Het gesprek duurt 30 minuten en is volledig vrijblijvend.
            </p>
            <BookingEmbed />
          </div>
        </div>
      </section>
    </>
  )
}
