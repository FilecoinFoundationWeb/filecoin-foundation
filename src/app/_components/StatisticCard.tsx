import { Icon, type IconProps } from '@/components/Icon'

export type StatisticCardProps = {
  stat: number | `+${number}`
  icon: IconProps['component']
  description: JSX.Element
}

export function StatisticCard({ icon, stat, description }: StatisticCardProps) {
  return (
    <li className="relative flex rounded-lg border border-brand-300 p-1">
      <div className="flex h-40 w-28 shrink-0 items-center justify-center rounded-md bg-brand-500 sm:h-36 lg:h-28">
        <Icon component={icon} color="brand-200" size={40} />
      </div>

      <div className="flex grow flex-col justify-center p-4">
        <div>
          <h3 className="pb-2 text-4xl font-light text-brand-100">
            {formatNumber(stat)}
          </h3>
          <span className="text-xs leading-4 text-brand-200">
            {description}
          </span>
        </div>
      </div>
    </li>
  )
}

export function formatNumber(stat: StatisticCardProps['stat']) {
  if (typeof stat === 'number') {
    return stat.toLocaleString('en-US')
  }

  const stringWithoutPlus = stat.slice(1)
  const formattedNumber = Number(stringWithoutPlus).toLocaleString('en-US')

  return `+${formattedNumber}`
}
