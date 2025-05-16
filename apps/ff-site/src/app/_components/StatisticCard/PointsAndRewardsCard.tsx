import { type IconProps } from '@filecoin-foundation/ui/Icon'

import { StatisticCardLayout } from './StatisticCardLayout'

export type PointsAndRewardsCardProps = {
  icon: IconProps['component']
  accomplishmentValue: number
  rewardValue: number
}

export function PointsAndRewardsCard({
  icon,
  accomplishmentValue,
  rewardValue,
}: PointsAndRewardsCardProps) {
  return (
    <StatisticCardLayout icon={icon}>
      <span className="text-brand-100 font-bold">
        {accomplishmentValue.toLocaleString()}+ points
      </span>
      <p className="text-brand-200">${rewardValue.toLocaleString()} swag</p>
    </StatisticCardLayout>
  )
}
