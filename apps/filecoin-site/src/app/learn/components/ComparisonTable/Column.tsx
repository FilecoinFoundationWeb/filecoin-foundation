import type { SVGProps } from 'react'

import { CheckIcon, XIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { SectionDivider } from '@/components/SectionDivider'

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
        'text-center first:text-zinc-950 last:text-zinc-600 md:divide-y md:last:border-l md:last:border-zinc-950/15',
        columnIndex === 2 ? 'order-first md:order-none' : 'order-none',
      )}
    >
      <div className="py-6 text-2xl font-medium text-zinc-950 md:py-18">
        <div className="flex min-h-10 items-center gap-3 md:justify-center">
          {Logo && <Logo className="h-10 w-10" />}
          {title}
        </div>
      </div>

      <ul className={clsx(DIVIDER_COLOR, 'md:space-y-3 md:divide-y')}>
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 py-6 md:flex-col md:px-4 md:py-10"
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
