import {
  GlobeHemisphereWestIcon,
  GraduationCapIcon,
  TrophyIcon,
  UsersThreeIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { BasicStatisticCardProps } from '@/components/StatisticCard/BasicStatisticCard'

export const statisticsData: Array<BasicStatisticCardProps> = [
  {
    icon: UsersThreeIcon,
    value: 145,
    description: 'Orbit Ambassadors active worldwide',
  },
  {
    icon: GraduationCapIcon,
    value: 10_000,
    description:
      'Early-career developers, students, and enthusiasts introduced to the Filecoin ecosystem',
  },
  {
    icon: TrophyIcon,
    value: 190,
    description: 'Workshops and community hackathons hosted',
  },
  {
    icon: GlobeHemisphereWestIcon,
    value: 40,
    description: 'Countries that have hosted Orbit events',
  },
]
