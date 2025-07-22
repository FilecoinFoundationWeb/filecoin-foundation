import type { SimpleCardWithLogoProps } from '@/components/SimpleCardWithLogo'

const CTA_TEXT = 'Visit website'

export const communityHubs: Array<SimpleCardWithLogoProps> = [
  {
    title: 'Filecoin Foundation',
    description: 'Network governance.',
    logoBackgroundColor: '#08072E',
    cta: {
      href: 'https://fil.org/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'FilOz',
    description: 'Core software development.',
    logoBackgroundColor: '#0090FF',
    cta: {
      href: 'https://filoz.dev/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Polaris',
    description: 'Protocol Labs dev guild and hackathons.',
    logoBackgroundColor: '#ffffff',
    cta: {
      href: 'https://www.pldg.xyz/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Fil-B',
    description: 'Builder community and education.',
    logoBackgroundColor: '#FAFAFA',
    cta: {
      href: 'https://fil-b.dev/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'FIDL',
    description: 'Research and protocol design.',
    logoBackgroundColor: '#000000',
    cta: {
      href: 'https://fidl.network/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'ANSA',
    description: 'Applied research and investor relations.',
    logoBackgroundColor: '#F5F4F2',
    cta: {
      href: 'https://ansa.network/',
      text: CTA_TEXT,
    },
  },
]
