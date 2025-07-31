import { clsx } from 'clsx'

type CardGridProps = {
  as: 'ul'
  children: React.ReactNode
  variant: keyof typeof variants
}

const variants = {
  mdTwo: 'gap-x-8 gap-y-15 md:grid-cols-2',
  mdTwoWide: 'gap-x-15 gap-y-8 md:grid-cols-2',
  lgTwo: 'gap-10 lg:grid-cols-2',
  lgTwoXlThree: 'gap-6 sm:gap-10 lg:grid-cols-2 xl:grid-cols-3',
  lgTwoWide: 'gap-15 lg:grid-cols-2',
  lgThree: 'gap-8 lg:gap-15 lg:grid-cols-3',
  smThree: 'gap-10 md:grid-cols-3',
  smTwoLgThreeTight: 'gap-x-8 gap-y-15 md:grid-cols-2 lg:grid-cols-3',
  smTwoLgThree: 'gap-10 md:grid-cols-2 lg:grid-cols-3',
  smTwoLgThreeWider: 'gap-12 md:grid-cols-2 md:gap-15 lg:grid-cols-3',
  smTwoXlThreeWidest: 'gap-x-15 gap-y-20 md:grid-cols-2 xl:grid-cols-3',
  smTwoXlFourWide: 'gap-15 md:grid-cols-2 xl:grid-cols-4',
}

export function CardGrid({ as: Tag, children, variant }: CardGridProps) {
  return <Tag className={clsx('grid', variants[variant])}>{children}</Tag>
}
