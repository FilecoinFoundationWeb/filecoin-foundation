import type { SVGProps } from 'react'

import { CheckIcon, XIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

export type ColumnProps = {
  title: string
  features: Array<string>
  columnIndex: 1 | 2
  logo?: React.ComponentType<SVGProps<SVGSVGElement>>
}

const DIVIDER_COLOR = 'divide-zinc-950/15'

const ICON_CONFIG = {
  1: {
    Icon: CheckIcon,
    color: 'text-brand-700',
  },
  2: {
    Icon: XIcon,
    color: 'text-zinc-600',
  },
}

export function Column({
  title,
  features,
  columnIndex,
  logo: Logo,
}: ColumnProps) {
  const { Icon, color } = ICON_CONFIG[columnIndex]

  return (
    <div
      className={clsx(
        DIVIDER_COLOR,
        'divide-y text-center first:text-zinc-950 last:border-l last:border-zinc-950/15 last:text-zinc-600',
      )}
    >
      <div className="py-10 text-2xl font-medium text-zinc-950 sm:py-18">
        <div className="flex min-h-10 items-center justify-center gap-3">
          {Logo && <Logo className="h-10 w-10" />}
          {title}
        </div>
      </div>

      <ul className={clsx(DIVIDER_COLOR, 'space-y-3 divide-y')}>
        {features.map((feature) => (
          <li
            key={feature}
            className="flex flex-col items-center gap-3 px-4 py-6 sm:py-10"
          >
            <span className={color}>
              <Icon size={20} />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
