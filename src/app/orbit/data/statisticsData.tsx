import {
  GlobeHemisphereWest,
  GraduationCap,
  Trophy,
  UsersThree,
} from '@phosphor-icons/react/dist/ssr'

import type { StatisticCardProps } from '@/components/StatisticCard'

export const statisticsData: Array<StatisticCardProps> = [
  {
    icon: UsersThree,
    stat: 145,
    description: 'Orbit Ambassadors active worldwide',
  },
  {
    icon: GraduationCap,
    stat: 10_000,
    description:
      'Early-career developers, students, and enthusiasts introduced to the Filecoin ecosystem',
  },
  {
    icon: Trophy,
    stat: 190,
    description: 'Workshops and community hackathons hosted',
  },
  {
    icon: GlobeHemisphereWest,
    stat: 40,
    description: 'Countries that have hosted Orbit events',
  },
]
