import {
  ArchiveBoxIcon,
  CheckSquareOffsetIcon,
  UsersFourIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { BasicStatisticCardProps } from '@/components/StatisticCard/BasicStatisticCard'

export const statisticsData: Array<BasicStatisticCardProps> = [
  {
    icon: ArchiveBoxIcon,
    value: 12,
    description: 'Petabytes of useful data stored',
  },
  {
    icon: UsersFourIcon,
    value: 500,
    description: 'Active Clients worldwide',
  },
  {
    icon: CheckSquareOffsetIcon,
    value: 40,
    description: 'Allocators reviewing and distributing DataCap',
  },
]
