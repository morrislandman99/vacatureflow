export const siteConfig = {
  name: 'Jobmarketing',
  url: 'https://jobmarketing.nl',
  description: 'Job marketing voor MKB-bedrijven. Meer sollicitanten, lagere kosten per hire.',
  ogImage: '/og-image.jpg',
  locale: 'nl_NL',
  email: 'morrislandman@outlook.com', // TODO: vervangen door zakelijk adres
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/jobmarketing',
}
