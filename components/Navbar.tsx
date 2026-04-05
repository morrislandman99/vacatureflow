import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

const links = [
  { href: '/diensten', label: 'Diensten' },
  { href: '/hoe-het-werkt', label: 'Hoe het werkt' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/blog', label: 'Blog' },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-sm border-b border-white/5">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Hoofdnavigatie"
      >
        <Link href="/" className="font-display text-lg font-semibold text-lime">
          {siteConfig.name}
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-white/65 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="rounded-full bg-lime px-5 py-2 text-sm font-medium text-dark hover:bg-lime/90 transition-colors"
        >
          Plan een gesprek
        </Link>
      </nav>
    </header>
  )
}
