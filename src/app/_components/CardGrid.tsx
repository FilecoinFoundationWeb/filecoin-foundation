import clsx from 'clsx'

type GridColumnConfig =
  | 'smTwoLgThree'
  | 'smTwo'
  | 'mdTwo'
  | 'lgTwo'
  | 'smThree'
  | 'mdThree'
  | 'lgThree'

type CardGridProps = {
  cols: GridColumnConfig
  as?: React.ElementType
  children: React.ReactNode
}

const baseGridStyles = 'grid grid-cols-1 gap-4 auto-rows-fr'
const extendedGridStyles: Record<GridColumnConfig, string> = {
  smTwoLgThree: 'sm:grid-cols-2 sm:gap-6 lg:grid-cols-3',
  smTwo: 'sm:grid-cols-2 sm:gap-6',
  mdTwo: 'md:grid-cols-2 md:gap-6',
  lgTwo: 'lg:grid-cols-2 lg:gap-6',
  smThree: 'sm:grid-cols-3 sm:gap-6',
  mdThree: 'md:grid-cols-3 md:gap-6',
  lgThree: 'lg:grid-cols-3 lg:gap-6',
}

export function CardGrid({ cols, as: Tag = 'ul', children }: CardGridProps) {
  return (
    <Tag className={clsx(baseGridStyles, extendedGridStyles[cols])}>
      {children}
    </Tag>
  )
}
