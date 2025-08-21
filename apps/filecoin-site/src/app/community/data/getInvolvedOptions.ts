import {
  CurrencyDollarIcon,
  ClockCounterClockwiseIcon,
  MegaphoneIcon,
  MapPinLineIcon,
} from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import type { LinkCardData } from '@/components/LinkCard'

export const getInvolvedOptions: Array<LinkCardData> = [
  {
    title: 'Apply for a grant',
    description:
      'Secure funding to support your Filecoin-based project or research.',
    href: FILECOIN_FOUNDATION_URLS.grants,
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Explore Retroactive Public Goods Funding',
    description:
      'Get rewarded for impactful, open-source contributions that advance the Filecoin ecosystem.',
    href: 'https://fil-propgf.questbook.app',
    icon: ClockCounterClockwiseIcon,
  },
  {
    title: 'Become an Orbit ambassador',
    description:
      'Join the Orbit community to advocate for decentralized tech, support new builders, and grow the Filecoin movement globally.',
    href: FILECOIN_FOUNDATION_URLS.orbit,
    icon: MegaphoneIcon,
  },
  {
    title: 'Attend community events',
    description:
      'Connect with builders, researchers, and advocates at hackathons, meetups, and summits around the world.',
    href: FILECOIN_FOUNDATION_URLS.events,
    icon: MapPinLineIcon,
  },
]
