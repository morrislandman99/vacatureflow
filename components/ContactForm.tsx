'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    setStatus(res.ok ? 'success' : 'error')
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-lime/10 border border-lime/20 p-8 text-center">
        <p className="font-display text-xl text-ink">Bedankt voor je bericht!</p>
        <p className="mt-2 text-sm text-ink-muted">We nemen binnen één werkdag contact met je op.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
            Naam
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder-ink-subtle focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime transition-colors"
            placeholder="Jan de Vries"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-ink mb-1.5">
            Bedrijf
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder-ink-subtle focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime transition-colors"
            placeholder="Bedrijf BV"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
          E-mailadres
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder-ink-subtle focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime transition-colors"
          placeholder="jan@bedrijf.nl"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
          Bericht
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder-ink-subtle focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime transition-colors resize-none"
          placeholder="Vertel ons over je vacature en wervingsuitdaging…"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">
          Er ging iets mis. Probeer het opnieuw of stuur een e-mail.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded-full bg-lime px-8 py-3 text-sm font-medium text-dark hover:bg-lime/90 transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Versturen…' : 'Verstuur bericht'}
      </button>
    </form>
  )
}
