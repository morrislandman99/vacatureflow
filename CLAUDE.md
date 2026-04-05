# Jobmarketing — Website Project

## Design
Alle visuele beslissingen staan in [design.MD](./design.MD). Lees dit bestand altijd voordat je een component, pagina of stijl aanmaakt. Gebruik nooit kleuren, fonts of spacing die niet in design.MD staan.

## Project Overview
Marketing website voor Jobmarketing: job marketing diensten voor MKB-bedrijven in Nederland.
Doel: leadgeneratie, geloofwaardigheid en vindbaarheid via Google + AI-zoekmachines.
Doelgroep: HR-managers en directeuren bij Nederlandse MKB-bedrijven met openstaande vacatures.

## Stack
- Next.js 15 (App Router)
- TypeScript strict mode — geen `any` types
- Tailwind CSS — geen custom CSS files, geen inline styles
- Vercel deployment
- next/font voor lettertypen — nooit externe CDN font-links
- next/image voor alle afbeeldingen — nooit `<img>` tags

## Commands
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npx tsc --noEmit`

## Centrale config — /lib/siteConfig.ts
Gebruik dit overal, nooit hardcoded strings:
```ts
export const siteConfig = {
  name: 'Jobmarketing',
  url: 'https://jobmarketing.nl',
  description: 'Job marketing voor MKB-bedrijven. Meer sollicitanten, lagere kosten.',
  ogImage: '/og-image.jpg',
  locale: 'nl_NL',
}
```

## Pagina-structuur
Elke route is een aparte map in /app met een eigen page.tsx. Geen single-page scroll-site.
```
/app
  layout.tsx                     ← root layout: lang="nl", nav, footer, LocalBusiness JSON-LD
  not-found.tsx                  ← aangepaste 404 pagina
  page.tsx                       → /
  /diensten/page.tsx
  /hoe-het-werkt/page.tsx
  /tarieven/page.tsx
  /over-ons/page.tsx
  /contact/page.tsx
  /privacybeleid/page.tsx
  /algemene-voorwaarden/page.tsx
  /blog
    page.tsx                     → /blog (overzicht)
    /[slug]/page.tsx             → /blog/[slug]
  robots.ts
  sitemap.ts
/components
  Navbar.tsx
  Footer.tsx
  /ui
  ContactForm.tsx                ← 'use client'
  BookingEmbed.tsx               ← 'use client' — Calendly
/lib
  siteConfig.ts
  schema.ts                      ← JSON-LD objecten als functies
  fonts.ts                       ← Bricolage Grotesque + Inter via next/font
/public
  og-image.jpg                   ← 1200×630px
  favicon.ico
```

## SEO — verplicht op ELKE pagina

### Root layout
- `<html lang="nl">` — nooit vergeten
- Fallback `generateMetadata()` met globale title en description
- `LocalBusiness` JSON-LD

### Elke page.tsx
- `generateMetadata()` met unieke `title` (50–60 tekens) en `description` (150–160 tekens)
- `alternates.canonical` op de volledige URL van die pagina
- `openGraph` en `twitter` cards — gebruik siteConfig voor herhaalde waarden

### Blog — extra vereisten per artikel
- Open Graph type: `article` (niet `website`)
- `<time dateTime="YYYY-MM-DD">` in de HTML voor de publicatiedatum
- `BlogPosting` JSON-LD met `datePublished`, `dateModified` en `author`

### Semantic HTML
- Precies één `<h1>` per pagina
- Heading-hiërarchie nooit overslaan: h1 → h2 → h3
- Gebruik `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>` correct
- Alle afbeeldingen: beschrijvend `alt`-attribuut
- Interne links: altijd `<Link>` van next/link, nooit `<a href>`

### robots.ts en sitemap.ts
- Alleen via /app/robots.ts en /app/sitemap.ts — geen statisch bestand in /public
- Statische pagina's: `changeFrequency: 'monthly'`
- Blogartikelen: `changeFrequency: 'weekly'`, `priority: 0.7`

## Structured Data (JSON-LD)
Schrijf alle schema's als functies in /lib/schema.ts. Render als `<script type="application/ld+json">` in de relevante page.tsx of layout.tsx. Altijd `'@context': 'https://schema.org'` meegeven.

- Root layout: `LocalBusiness`
- /diensten: `Service` per dienst
- /tarieven of FAQ-secties: `FAQPage`
- /over-ons: `Person` of `ProfessionalService`
- /blog/[slug]: `BlogPosting` met `headline`, `author`, `datePublished`, `dateModified`, `image`

## Formulieren & Contact
- Contactformulier via Server Action — e-mail via Resend (`RESEND_API_KEY`, nooit `NEXT_PUBLIC_`)
- Ontvangst-adres: `morrislandman@outlook.com` (tijdelijk — later vervangen door zakelijk adres)
- Validatie via Zod op de server
- Booking-embed in BookingEmbed.tsx als Client Component — Calendly
- Calendly URL instellen als `NEXT_PUBLIC_CALENDLY_URL` in Vercel dashboard

## Veiligheid & Deployment
- NOOIT .env of .env.local committen
- Environment variables instellen in het Vercel dashboard

## Workflow — nieuwe pagina of blogartikel
1. Maak /app/[route]/page.tsx aan
2. Voeg `generateMetadata()` toe met canonical URL, OG tags, unieke title + description
3. Voeg toe aan sitemap.ts en Navbar
4. Voeg JSON-LD toe als relevant
5. Voor blogartikelen: OG type `article`, `<time>` tag, `BlogPosting` JSON-LD

## Code conventies
- Named exports voor components — default exports alleen waar Next.js het verplicht
- PascalCase voor component-bestanden, kebab-case voor routes

## Schrijfstijl
- Gebruik nooit em dashes (—) in zichtbare tekst of koppen
- In lopende tekst: vervang door een komma, punt of dubbele punt (:)
- In meta titles: gebruik | als scheiding (bijv. `Diensten | Recruitment marketing`)
- In juridische koppen: gebruik : (bijv. `Artikel 1: Definities`)

## Checklist vóór commit
- [ ] `npm run build` en `npx tsc --noEmit` slagen foutloos
- [ ] Elke pagina heeft unieke title, description en canonical URL
- [ ] sitemap.ts bijgewerkt
- [ ] Geen secrets in code of git history
- [ ] Blogartikelen: `datePublished`, `author` en `BlogPosting` JSON-LD aanwezig
- [ ] Kleuren, fonts en spacing komen uit design.MD — nooit hardcoded
