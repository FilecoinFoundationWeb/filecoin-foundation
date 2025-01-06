import { clsx } from 'clsx'

type GridColumnConfig = 'smThree' | 'smTwoLgFour'

type BadgeCardGridProps = {
  children: React.ReactNode,
  cols: GridColumnConfig
}

const baseGridStyles = 'grid grid-cols-1 gap-6 sm:auto-rows-fr'
const extendedGridStyles: Record<GridColumnConfig, string> = {
  smThree: 'sm:grid-cols-3',
  smTwoLgFour: 'sm:grid-cols-2 lg:grid-cols-4',
}

export function BadgeCardGrid({ cols, children }: BadgeCardGridProps) {
  return (
    <ul className={clsx(baseGridStyles, extendedGridStyles[cols])}>
      {children}
    </ul>
  )
}
