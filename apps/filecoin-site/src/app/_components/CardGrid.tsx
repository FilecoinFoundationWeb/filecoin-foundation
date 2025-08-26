import { clsx } from 'clsx'

type CardGridProps = {
  as: 'ul'
  children: React.ReactNode
  variant: keyof typeof variants
}

const variants = {
  smTwoXlThreeWide: 'grid gap-10 sm:grid-cols-2 xl:grid-cols-3',
  smTwoXlFourWider: 'grid gap-15 sm:grid-cols-2 xl:grid-cols-4',
  smTwoLgThreeWider: 'grid gap-15 sm:grid-cols-2 lg:grid-cols-3',
  mdTwo: 'grid gap-8 md:grid-cols-2 md:gap-x-15',
  mdTwoWider: 'grid gap-15 md:grid-cols-2',
  mdTwoLgThree: 'grid gap-8 md:grid-cols-2 md:gap-x-15 lg:grid-cols-3',
  mdTwoLgThreeXlFour:
    'grid gap-8 md:grid-cols-2 md:gap-x-15 lg:grid-cols-3 xl:grid-cols-4',
  mdTwoLgThreeWide: 'grid gap-10 md:grid-cols-2 lg:grid-cols-3',
  mdThreeWider: 'grid gap-15 md:grid-cols-3',
  lgTwoWide: 'grid gap-10 lg:grid-cols-2',
  lgThree: 'grid gap-8 md:gap-x-15 lg:grid-cols-3',
}

export function CardGrid({ as: Tag, children, variant }: CardGridProps) {
  return <Tag className={clsx('grid', variants[variant])}>{children}</Tag>
}
