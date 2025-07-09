import {
  CurrencyDollarIcon,
  ClockCounterClockwiseIcon,
  MegaphoneIcon,
  MapPinLineIcon,
} from '@phosphor-icons/react/dist/ssr'

type GetInvolvedOption = {
  title: string
  description: string
  icon: typeof CurrencyDollarIcon
}

export const getInvolvedOptions: GetInvolvedOption[] = [
  {
    title: 'Apply for a grant',
    description:
      'Secure funding to support your Filecoin-based project or research through ecosystem grant programs.',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Explore Retroactive Public Good Funding',
    description:
      'Get rewarded for impactful, open-source contributions that advance the Filecoin ecosystem.',
    icon: ClockCounterClockwiseIcon,
  },
  {
    title: 'Become an Orbit ambassador',
    description:
      'Join the Orbit community to advocate for decentralized tech, support new builders, and grow the Filecoin movement globally.',
    icon: MegaphoneIcon,
  },
  {
    title: 'Attend Community events',
    description:
      'Connect with builders, researchers, and advocates at hackathons, meetups, and summits around the world.',
    icon: MapPinLineIcon,
  },
] as const
