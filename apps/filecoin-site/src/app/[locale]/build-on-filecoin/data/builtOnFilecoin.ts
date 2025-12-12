import GLIFLogo from '@/assets/logos/glif-logo.svg'
import Huddle01Logo from '@/assets/logos/huddle-01-logo.svg'
import LighthouseLogo from '@/assets/logos/lighthouse-logo.svg'
import RecallLogo from '@/assets/logos/recall-logo.svg'

import type { SimpleCardWithLogoProps } from '@/components/SimpleCardWithLogo'

const CTA_TEXT = 'Visit website'

export const builtOnFilecoin = [
  {
    title: 'Lighthouse',
    description:
      'Perpetual storage on the Filecoin network, allowing users to store their files long-term at a fixed price.',
    logo: {
      type: 'svg',
      src: LighthouseLogo,
      bgColor: '#643FBB',
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
    },
    cta: {
      href: 'https://www.glif.io/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Recall',
    description:
      'Recall lets AI agents prove their intelligence, compete for rewards and reputation, and surface top performers across specialized skills.',
    logo: {
      type: 'svg',
      src: RecallLogo,
      bgColor: '#020202',
    },
    cta: {
      href: 'https://recall.network/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Huddle01',
    description:
      'Built on Filecoin, Huddle01 is a decentralized, real-time communication network with live audio and video software development kit for the web and mobile.',
    logo: {
      type: 'svg',
      src: Huddle01Logo,
      bgColor: '#246BFD',
    },
    cta: {
      href: 'https://huddle01.com/',
      text: CTA_TEXT,
    },
  },
] as const satisfies Array<SimpleCardWithLogoProps>
