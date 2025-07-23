import type { SimpleCardWithLogoProps } from '@/components/SimpleCardWithLogo'

import ANSALogo from '@/assets/logos/ansa-logo.svg'
import FIDLLogo from '@/assets/logos/fidl-logo.png'
import FilBLogo from '@/assets/logos/fil-b-logo.png'
import FilecoinFoundationIconLogo from '@/assets/logos/filecoin-foundation-icon-logo.svg'
import FilOzLogo from '@/assets/logos/filoz-logo.svg'
import PolarisLogo from '@/assets/logos/polaris-logo.png'

const CTA_TEXT = 'Visit website'

export const communityHubs: Array<SimpleCardWithLogoProps> = [
  {
    title: 'Filecoin Foundation',
    description: 'Network governance.',
    logoBackgroundColor: '#08072E',
    logo: FilecoinFoundationIconLogo,
    cta: {
      href: 'https://fil.org/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'FilOz',
    description: 'Core software development.',
    logoBackgroundColor: '#0090FF',
    logo: FilOzLogo,
    cta: {
      href: 'https://filoz.dev/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Polaris',
    description: 'Protocol Labs dev guild and hackathons.',
    logoBackgroundColor: '#ffffff',
    logo: PolarisLogo,
    cta: {
      href: 'https://directory.plnetwork.io/teams/clz1ls1gr0003xl02n5lpvbhn',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Fil-B',
    description: 'Builder community and education.',
    logoBackgroundColor: '#FAFAFA',
    logo: FilBLogo,
    cta: {
      href: 'https://fil-b.dev/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'FIDL',
    description: 'Research and protocol design.',
    logoBackgroundColor: '#000000',
    logo: FIDLLogo,
    cta: {
      href: 'https://fidl.network/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'ANSA',
    description: 'Applied research and investor relations.',
    logoBackgroundColor: '#F5F4F2',
    logo: ANSALogo,
    cta: {
      href: 'https://ansa.network/',
      text: CTA_TEXT,
    },
  },
]
