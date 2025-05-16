import { type IconProps } from '@filecoin-foundation/ui/Icon'

import { StatisticCardLayout } from './StatisticCardLayout'

export type BasicStatisticCardProps = {
  icon: IconProps['component']
  value: number
  description: string
}

export function BasicStatisticCard({
  icon,
  value,
  description,
}: BasicStatisticCardProps) {
  return (
    <StatisticCardLayout icon={icon}>
      <span className="text-brand-100 text-4xl font-light">
        {value.toLocaleString()}+
      </span>
      <p className="text-brand-200 text-sm leading-4">{description}</p>
    </StatisticCardLayout>
  )
}
