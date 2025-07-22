import type { SimpleCardData } from '@/components/SimpleCard'

const CTA_TEXT = 'Visit website'

export const communityHubs: Array<SimpleCardData> = [
  {
    title: 'Filecoin Foundation',
    description: 'Network governance.',
    cta: {
      href: 'https://fil.org/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'FIDL',
    description: 'Research and protocol design.',
    cta: {
      href: 'https://fidl.network/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'FilOz',
    description: 'Core software development.',
    cta: {
      href: 'https://filoz.dev/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Fil-B',
    description: 'Builder community and education.',
    cta: {
      href: 'https://fil-b.dev/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'ANSA',
    description: 'Applied research and investor relations.',
    cta: {
      href: 'https://ansa.network/',
      text: CTA_TEXT,
    },
  },
]
