import { Icon } from '@/components/Icon'

import type { StatisticData } from '@/orbit/data/statisticsData'

export function StatisticCard({ icon, value, description }: StatisticData) {
  return (
    <li className="flex min-h-32 rounded-lg border border-brand-300 p-1">
      <figure className="grid w-1/3 place-items-center rounded bg-brand-500">
        <Icon component={icon} color="brand-200" size={40} />
      </figure>

      <div className="flex w-2/3 place-items-center p-4">
        <div className="space-y-2">
          <span className="text-4xl font-light text-brand-100">
            {value.toLocaleString()}+
          </span>
          <p className="text-sm leading-4 text-brand-200">{description}</p>
        </div>
      </div>
    </li>
  )
}
