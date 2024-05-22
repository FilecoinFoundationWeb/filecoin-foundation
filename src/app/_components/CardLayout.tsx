import clsx from 'clsx'

type LayoutOption =
  | 'smTwoLgThree'
  | 'smTwo'
  | 'mdTwo'
  | 'lgTwo'
  | 'smThree'
  | 'mdThree'
  | 'lgThree'

type CardLayoutProps = {
  children: React.ReactNode
  as?: React.ElementType
  cols: LayoutOption
}

const layoutStyles: Record<LayoutOption, string> = {
  smTwoLgThree: 'sm:grid-cols-2 sm:gap-6 lg:grid-cols-3',
  smTwo: 'sm:grid-cols-2 sm:gap-6',
  mdTwo: 'md:grid-cols-2 md:gap-6',
  lgTwo: 'lg:grid-cols-2 lg:gap-6',
  smThree: 'sm:grid-cols-3 sm:gap-6',
  mdThree: 'md:grid-cols-3 md:gap-6',
  lgThree: 'lg:grid-cols-3 lg:gap-6',
}

export function CardLayout({
  as: Tag = 'ul',
  cols,
  children,
}: CardLayoutProps) {
  return (
    <Tag className={clsx('grid grid-cols-1 gap-4', layoutStyles[cols])}>
      {children}
    </Tag>
  )
}
