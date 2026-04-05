import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-dark flex flex-1 items-center px-6 py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-display text-8xl font-semibold text-lime">404</span>
        <h1 className="mt-6 font-display text-4xl text-white">Pagina niet gevonden</h1>
        <p className="mt-4 text-white/65">
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-lime px-8 py-3 text-base font-medium text-dark hover:bg-lime/90 transition-colors"
        >
          Terug naar home
        </Link>
      </div>
    </section>
  )
}
