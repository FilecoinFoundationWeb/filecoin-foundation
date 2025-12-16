import { FILECOIN_FOUNDATION_URL } from '@/constants/siteMetadata'

import ANSALogo from '@/assets/logos/ansa-logo.svg'
import FIDLLogo from '@/assets/logos/fidl-logo.png'
import FilBLogo from '@/assets/logos/fil-b-logo.png'
import FilecoinFoundationIconLogo from '@/assets/logos/filecoin-foundation-icon-logo.svg'
import FilOzLogo from '@/assets/logos/filoz-logo.svg'
import PolarisLogo from '@/assets/logos/polaris-logo.png'

import type { SimpleCardWithLogoProps } from '@/components/SimpleCardWithLogo'

const CTA_TEXT = 'Visit website'

export const ecosystemGroups = [
  {
    title: 'Filecoin Foundation',
    description: 'Network governance, Filecoin Plus, and grants.',
    logo: {
      type: 'svg',
      src: FilecoinFoundationIconLogo,
      bgColor: '#08072E',
    },
    cta: {
      href: FILECOIN_FOUNDATION_URL,
      text: CTA_TEXT,
    },
  },
  {
    title: 'FilOz',
    description: 'Core software development.',
    logo: {
      type: 'svg',
      src: FilOzLogo,
      bgColor: '#0090FF',
    },
    cta: {
      href: 'https://www.filoz.org/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Polaris',
    description: 'Protocol Labs dev guild and hackathons.',
    logo: {
      type: 'image',
      src: PolarisLogo,
      bgColor: '#fff',
    },
    cta: {
      href: 'https://directory.plnetwork.io/teams/clz1ls1gr0003xl02n5lpvbhn',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Fil-B',
    description: 'Builder community and education.',
    logo: {
      type: 'image',
      src: FilBLogo,
      bgColor: '#FAFAFA',
    },
    cta: {
      href: 'https://fil.builders',
      text: CTA_TEXT,
    },
  },
  {
    title: 'FIDL',
    description: 'Research and protocol design.',
    logo: {
      type: 'image',
      src: FIDLLogo,
      bgColor: '#000',
    },
    cta: {
      href: 'https://www.fidl.tech/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'ANSA',
    description: 'Applied research and ecosystem growth.',
    logo: {
      type: 'svg',
      src: ANSALogo,
      bgColor: '#F5F4F2',
    },
    cta: {
      href: 'https://ansaresearch.ai/',
      text: CTA_TEXT,
    },
  },
] as const satisfies Array<SimpleCardWithLogoProps>
