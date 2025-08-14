import type { SVGProps } from 'react'

import { CheckIcon, XIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

type ColumnProps = {
  perspective: 'advantage' | 'disadvantage'
  title: string
  features: Array<string>
  logo?: React.ComponentType<SVGProps<SVGSVGElement>>
}

export type ColumnPropsData = Omit<ColumnProps, 'perspective'>

const ICON_CONFIG = {
  advantage: {
    Icon: CheckIcon,
    color: 'text-brand-700',
  },
  disadvantage: {
    Icon: XIcon,
    color: 'text-zinc-600',
  },
}

export function Column({
  perspective,
  title,
  features,
  logo: Logo,
}: ColumnProps) {
  const { Icon, color } = ICON_CONFIG[perspective]

  return (
    <div className="text-center">
      <div className="py-6 text-2xl font-medium md:py-18">
        <div className="flex min-h-10 items-center gap-3 md:justify-center">
          {Logo && <Logo className="h-10 w-10" />}
          {title}
        </div>
      </div>

      <ul
        className={clsx(
          'divide-[var(--color-border)] md:space-y-3 md:divide-y',
          perspective === 'disadvantage' &&
            'text-[var(--color-text-paragraph)]',
        )}
      >
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
