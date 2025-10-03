import type { SVGProps } from 'react'

import { clsx } from 'clsx'

type ColumnProps = {
  perspective: 'advantage' | 'disadvantage'
  title: string
  features: Array<string>
  logo?: React.ComponentType<SVGProps<SVGSVGElement>>
}

export type ColumnPropsData = Omit<ColumnProps, 'perspective'>

type ColumnStyleConfig = {
  borderColor: string
  dividerColor: string
  textColor: string
  backgroundColor: string
}

const COLUMN_STYLE_CONFIG: Record<
  ColumnProps['perspective'],
  ColumnStyleConfig
> = {
  advantage: {
    borderColor: 'border-[var(--color-border-muted)]',
    dividerColor: 'divide-[var(--color-border-muted)]',
    textColor: 'text-[var(--color-text-base)]',
    backgroundColor: 'bg-transparent',
  },
  disadvantage: {
    borderColor: 'border-zinc-950/5',
    dividerColor: 'divide-zinc-950/5',
    textColor: 'text-[var(--color-paragraph-text)]',
    backgroundColor: 'bg-zinc-50',
  },
}

export function Column({
  perspective,
  title,
  features,
  logo: Logo,
}: ColumnProps) {
  const styles = COLUMN_STYLE_CONFIG[perspective]

  return (
    <div
      aria-label={`${perspective} features: ${title}`}
      className={clsx(
        'flex flex-col items-center rounded-2xl border',
        styles.borderColor,
        styles.backgroundColor,
      )}
    >
      <div
        className={clsx(
          'w-full border-b py-6 text-2xl font-medium',
          styles.borderColor,
        )}
      >
        <div className="flex min-h-10 items-center justify-center gap-3">
          {Logo && <Logo className="size-8" />}
          {title}
        </div>
      </div>

      <ul
        className={clsx(
          'flex w-full flex-col items-center divide-y',
          styles.dividerColor,
          styles.textColor,
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="w-full py-6 text-center">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
