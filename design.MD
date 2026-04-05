# Jobmarketing — Design System

Gebaseerd op de bestaande website. Dit bestand is de enige bron van waarheid voor alle visuele beslissingen.

---

## Kleurpalet

```ts
// /lib/tokens.ts — gebruik dit overal, nooit hardcoded kleuren
export const colors = {
  // Achtergronden
  dark:       '#042123',  // hero, footer, donkere secties
  darkAlt:    '#072A2C',  // alternatieve donkere achtergrond (iets lichter)
  light:      '#F4F6F4',  // body achtergrond, lichte secties (off-white met groentint)
  white:      '#FFFFFF',  // kaarten, modals

  // Accent
  lime:       '#C0FF36',  // primaire accentkleur — CTA buttons, highlights, logo, iconen
  limeTint:   'rgba(168, 230, 61, 0.1)',  // subtiele lime achtergrond (tags, badges)

  // Tekst
  ink:        '#0F1F17',  // body tekst op lichte achtergrond
  inkMuted:   '#4A5E54',  // secundaire tekst
  inkSubtle:  '#8A9E92',  // placeholder, labels
  border:     '#E3E8E4',  // lijnen, dividers

  // Tekst op donkere achtergrond
  onDark:           '#FFFFFF',
  onDarkMuted:      'rgba(255, 255, 255, 0.65)',
  onDarkSubtle:     'rgba(255, 255, 255, 0.45)',
  onDarkGlass:      'rgba(255, 255, 255, 0.08)',  // glass card achtergrond
}
```

### Gebruik per context
| Situatie                  | Kleur              |
|---------------------------|--------------------|
| Grote secties (donker)    | `dark` (#042123)   |
| Grote secties (licht)     | `light` (#F4F6F4)  |
| Kaarten op donker         | `onDarkGlass`      |
| Kaarten op licht          | `white`            |
| Primaire CTA button       | `lime` achtergrond, `dark` tekst |
| Secundaire CTA button     | `transparent`, `lime` border + tekst |
| Accent / highlight tekst  | `lime`             |

---

## Typografie

### Fonts
- **Display (headings):** `"Bricolage Grotesque"` — laden via `next/font/google`
- **Body:** `Inter` — laden via `next/font/google`

```ts
// /lib/fonts.ts
import { Inter, Bricolage_Grotesque } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
})
```

### Type scale (Tailwind klassen)
| Element     | Grootte  | Weight | Line-height | Font         |
|-------------|----------|--------|-------------|--------------|
| H1          | 82px     | 400    | 1.08        | Bricolage    |
| H2          | 54px     | 400    | 1.12        | Bricolage    |
| H3          | ~32px    | 400    | 1.2         | Bricolage    |
| Body        | 18px     | 400    | 1.7         | Inter        |
| Small/label | 14px     | 400    | 1.5         | Inter        |

> Bricolage Grotesque wordt gebruikt op gewicht 400 (niet bold) — de grootte doet het werk, niet het gewicht.

---

## Pagina-structuur & secties

De site wisselt af tussen donkere en lichte secties:

```
Hero          → donker (#042123)
Diensten      → licht (#F4F6F4)
Hoe het werkt → donker (#042123)
Resultaten    → licht (#F4F6F4) of wit (#FFFFFF)
Tarieven      → licht (#F4F6F4)
Footer        → donker (#042123)
```

### Sectie-padding
- Desktop: `py-20` tot `py-32` (80px–128px)
- Hero: `pt-[68px] pb-[120px]`

---

## Buttons

### Primaire CTA
```tsx
<button className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-base font-medium text-dark hover:bg-lime/90 transition-colors">
  Plan een gratis gesprek
</button>
```
- Achtergrond: `lime` (#C0FF36)
- Tekst: `dark` (#042123)
- Radius: `rounded-full` (pill)
- Geen box-shadow

### Secundaire / outline
```tsx
<button className="inline-flex items-center gap-2 rounded-full border border-lime/40 px-6 py-3 text-base font-medium text-lime hover:bg-lime/10 transition-colors">
  Hoe werkt het?
</button>
```

---

## Kaarten

### Op donkere achtergrond (glass card)
```tsx
<div className="rounded-2xl bg-white/[0.08] p-6 backdrop-blur-sm border border-white/10">
  ...
</div>
```

### Op lichte achtergrond (white card)
```tsx
<div className="rounded-2xl bg-white p-6 border border-border shadow-sm">
  ...
</div>
```

---

## Navigatie

- Sticky header
- Transparant boven hero, achtergrond bij scrollen
- Logo: `lime` (#C0FF36) tekst "JobMarketing"
- Nav-links: `onDarkMuted` — wit op 65% opacity
- Geen dropdown menu's

---

## Tags / badges

```tsx
<span className="inline-flex items-center rounded-full bg-lime/10 px-3 py-1 text-sm text-lime">
  Job marketing voor MKB-bedrijven
</span>
```

---

## Iconen
- Eenvoudige lijnicons in `lime` (#C0FF36) op donker
- Eenvoudige lijnicons in `lime` (#C0FF36) of `inkMuted` op licht
- Gebruik Lucide React of Heroicons

---

## Tailwind config uitbreiding

Voeg toe aan `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      dark:    '#042123',
      darkAlt: '#072A2C',
      light:   '#F4F6F4',
      lime:    '#C0FF36',
      ink:     '#0F1F17',
      border:  '#E3E8E4',
    },
    fontFamily: {
      sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      display: ['var(--font-bricolage)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
    },
  },
}
```

---

## Checklist vóór elke nieuwe component

- [ ] Kleuren alleen via tokens — nooit hardcoded hex in className
- [ ] Headings gebruiken `font-display` (Bricolage Grotesque)
- [ ] Body tekst gebruikt `font-sans` (Inter)
- [ ] CTA-buttons zijn altijd `rounded-full` met `lime` achtergrond
- [ ] Sectie-achtergronden wisselen af: donker → licht → donker
- [ ] Geen box-shadows op buttons
- [ ] Icons in `lime` op donker, of `inkMuted` op licht
