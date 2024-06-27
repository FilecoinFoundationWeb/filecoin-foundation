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
    stat: 147,
    description: (
      <p>
        <span className="font-bold">Orbit Ambassadors</span>
        <br />
        around the world
      </p>
    ),
  },
  {
    icon: GraduationCap,
    stat: 10_000,
    description: (
      <p>
        <span className="font-bold">
          Early-career developers, students, and enthusiasts
        </span>{' '}
        have been introduced to the Filecoin ecosystem through Orbit
      </p>
    ),
  },
  {
    icon: Trophy,
    stat: 190,
    description: (
      <p>
        <span className="font-bold">Workshops and community hackathons</span>
      </p>
    ),
  },
  {
    icon: GlobeHemisphereWest,
    stat: '+40',
    description: (
      <p>
        <span className="font-bold">Countries</span>
        <br />
        have hosted Orbit events
      </p>
    ),
  },
]
