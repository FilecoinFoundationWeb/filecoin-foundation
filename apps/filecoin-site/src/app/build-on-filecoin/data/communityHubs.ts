import type { SimpleCardData } from '@/components/SimpleCard'

export const communityHubs: Array<SimpleCardData> = [
  {
    title: 'Filecoin Foundation',
    description: 'Network governance.',
    cta: {
      href: 'https://fil.org/',
      text: 'Visit Filecoin Foundation',
    },
  },
  {
    title: 'FIDL',
    description: 'Research and protocol design.',
    cta: {
      href: 'https://fidl.network/',
      text: 'Visit FIDL',
    },
  },
  {
    title: 'FilOz',
    description: 'Core software development.',
    cta: {
      href: 'https://filoz.dev/',
      text: 'Visit FilOz',
    },
  },
  {
    title: 'Fil-B',
    description: 'Builder community and education.',
    cta: {
      href: 'https://fil-b.dev/',
      text: 'Visit Fil-B',
    },
  },
  {
    title: 'ANSA',
    description: 'Applied research and investor relations.',
    cta: {
      href: 'https://ansa.network/',
      text: 'Visit ANSA',
    },
  },
] as const
