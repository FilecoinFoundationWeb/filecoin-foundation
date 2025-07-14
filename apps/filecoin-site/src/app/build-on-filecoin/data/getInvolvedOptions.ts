import {
  CurrencyDollarIcon,
  ClockCounterClockwiseIcon,
  MegaphoneIcon,
  MapPinLineIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { LinkCardData } from '@/components/LinkCard'

export const getInvolvedOptions: LinkCardData[] = [
  {
    title: 'Apply for a grant',
    description:
      'Secure funding to support your Filecoin-based project or research through ecosystem grant programs.',
    href: '#',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Explore Retroactive Public Good Funding',
    description:
      'Get rewarded for impactful, open-source contributions that advance the Filecoin ecosystem.',
    href: '#',
    icon: ClockCounterClockwiseIcon,
  },
  {
    title: 'Become an Orbit ambassador',
    description:
      'Join the Orbit community to advocate for decentralized tech, support new builders, and grow the Filecoin movement globally.',
    href: '#',
    icon: MegaphoneIcon,
  },
  {
    title: 'Attend Community events',
    description:
      'Connect with builders, researchers, and advocates at hackathons, meetups, and summits around the world.',
    href: '#',
    icon: MapPinLineIcon,
  },
] as const
