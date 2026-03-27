import {
  ArrowsSplitIcon,
  DatabaseIcon,
  UsersThreeIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { BasicStatisticCardProps } from '@/components/StatisticCard/BasicStatisticCard'

export const statisticsData: Array<BasicStatisticCardProps> = [
  {
    icon: DatabaseIcon,
    value: 12,
    description: 'Petabytes of useful data stored',
  },
  {
    icon: UsersThreeIcon,
    value: 500,
    description: 'Active Clients worldwide',
  },
  {
    icon: ArrowsSplitIcon,
    value: 40,
    description: 'Allocators reviewing and distributing DataCap',
  },
]
