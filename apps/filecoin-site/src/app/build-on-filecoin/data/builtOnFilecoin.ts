import type { SimpleCardWithLogoProps } from '@/components/SimpleCardWithLogo'

import GLIFLogo from '@/assets/logos/glif-logo.svg'
import LighthouseLogo from '@/assets/logos/lighthouse-logo.svg'

const CTA_TEXT = 'Visit website'

export const builtOnFilecoin: Array<SimpleCardWithLogoProps> = [
  {
    title: 'Lighthouse',
    description:
      'Perpetual storage on the Filecoin network, allowing users to store their files long-term at a fixed price.',
    logo: {
      type: 'svg',
      src: LighthouseLogo,
      bgColor: '#643FBB',
      color: '#fff',
    },
    cta: {
      href: 'https://www.lighthouse.storage/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'GLIF',
    description:
      'Developer tools and DeFi infrastructure for building, managing, and transacting on Filecoin.',
    logo: {
      type: 'svg',
      src: GLIFLogo,
      bgColor: '#141B35',
      color: '#fff',
    },
    cta: {
      href: 'https://www.glif.io/',
      text: CTA_TEXT,
    },
  },
]
