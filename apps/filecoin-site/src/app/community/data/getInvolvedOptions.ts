import {
  CurrencyDollarIcon,
  ClockCounterClockwiseIcon,
  MegaphoneIcon,
  MapPinLineIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { LinkCardData } from '@/components/LinkCard'

export const getInvolvedOptions: Array<LinkCardData> = [
  {
    title: 'Apply for a grant',
    description:
      'Secure funding to support your Filecoin-based project or research through ecosystem grant programs.',
    href: 'https://fil.org/grants',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Explore retroactive public good funding', // #todo: review copy
    description:
      'Get rewarded for impactful, open-source contributions that advance the Filecoin ecosystem.',
    href: 'https://fil-propgf.questbook.app',
    icon: ClockCounterClockwiseIcon,
  },
  {
    title: 'Become an Orbit ambassador',
    description:
      'Join the Orbit community to advocate for decentralized tech, support new builders, and grow the Filecoin movement globally.',
    href: 'https://fil.org/orbit',
    icon: MegaphoneIcon,
  },
  {
    title: 'Attend community events',
    description:
      'Connect with builders, researchers, and advocates at hackathons, meetups, and summits around the world.',
    href: 'https://fil.org/events',
    icon: MapPinLineIcon,
  },
]
