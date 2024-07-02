import {
  GlobeHemisphereWest,
  GraduationCap,
  Trophy,
  UsersThree,
} from '@phosphor-icons/react/dist/ssr'

import type { StatisticCardProps } from '@/components/StatisticCard'

export const statisticsData: StatisticCardProps[] = [
  {
    icon: UsersThree,
    value: 145,
    description: 'Orbit Ambassadors active worldwide',
  },
  {
    icon: GraduationCap,
    value: 10_000,
    description:
      'Early-career developers, students, and enthusiasts introduced to the Filecoin ecosystem',
  },
  {
    icon: Trophy,
    value: 190,
    description: 'Workshops and community hackathons hosted',
  },
  {
    icon: GlobeHemisphereWest,
    value: 40,
    description: 'Countries that have hosted Orbit events',
  },
]
