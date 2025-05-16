import { Crown, Medal, Trophy } from '@phosphor-icons/react/dist/ssr'

import type { PointsAndRewardsCardProps } from '@/components/StatisticCard/PointsAndRewardsCard'

export const pointsAndRewardsData: Array<PointsAndRewardsCardProps> = [
  {
    icon: Medal,
    accomplishmentValue: 100,
    rewardValue: 25,
  },
  {
    icon: Trophy,
    accomplishmentValue: 400,
    rewardValue: 50,
  },
  {
    icon: Crown,
    accomplishmentValue: 600,
    rewardValue: 100,
  },
]
