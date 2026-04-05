export const siteConfig = {
  name: 'Vacatureflow',
  url: 'https://vacatureflow.nl',
  description: 'Recruitment marketing voor Nederlandse werkgevers. Meer sollicitanten, lagere kosten per hire.',
  ogImage: '/og-image.jpg',
  locale: 'nl_NL',
  email: 'morrislandman@outlook.com', // TODO: vervangen door zakelijk adres
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/vacatureflow',
}
