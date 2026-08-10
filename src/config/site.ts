export const SITE = {
  name: 'Clayo',
  title: 'Clayo - Webflow Ecommerce website template',
  description: 'Clayo is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes.',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://clayo-syncflowai-schema.webflow.io/',
  twitterHandle: '@clayo',
  socials: {
    twitter: 'https://twitter.com/clayo',
    instagram: 'https://instagram.com/clayo',
    linkedin: 'https://www.linkedin.com/company/clayo',
    dribbble: 'https://dribbble.com/clayo',
  },
} as const;

export type SiteConfig = typeof SITE;
