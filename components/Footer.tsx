import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

const nav = [
  { href: '/diensten', label: 'Diensten' },
  { href: '/hoe-het-werkt', label: 'Hoe het werkt' },
  { href: '/tarieven', label: 'Tarieven' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const legal = [
  { href: '/privacybeleid', label: 'Privacybeleid' },
  { href: '/algemene-voorwaarden', label: 'Algemene voorwaarden' },
]

export function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <Link href="/" className="font-display text-lg font-semibold text-lime">
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm text-white/55 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <nav aria-label="Footernavigatie">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. Alle rechten voorbehouden.
          </p>
          <ul className="flex gap-6">
            {legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-white/40 hover:text-white/70 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
