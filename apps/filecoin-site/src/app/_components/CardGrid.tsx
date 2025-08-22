import { clsx } from 'clsx'

type CardGridProps = {
  as: 'ul'
  children: React.ReactNode
  variant: keyof typeof variants
}

const variants = {
  mdTwo: 'gap-x-8 gap-y-15 md:grid-cols-2', // y
  mdTwoWide: 'gap-x-15 gap-y-8 md:grid-cols-2', // y
  lgTwo: 'gap-10 lg:grid-cols-2', // y
  lgTwoXlThree: 'gap-6 sm:gap-10 lg:grid-cols-2 xl:grid-cols-3', // y
  lgTwoWide: 'gap-15 lg:grid-cols-2', // y
  lgThree: 'gap-8 lg:gap-15 lg:grid-cols-3', // y
  smThree: 'gap-10 md:grid-cols-3', // y
  // smTwoLgThreeTight: 'gap-x-8 gap-y-15 md:grid-cols-2 lg:grid-cols-3',
  smTwoLgThree: 'gap-10 md:grid-cols-2 lg:grid-cols-3', // y
  smTwoLgThreeWider: 'gap-12 md:grid-cols-2 md:gap-15 lg:grid-cols-3', // y
  smTwoXlThreeWidest: 'gap-x-15 gap-y-20 md:grid-cols-2 xl:grid-cols-3', //y
  smTwoXlFourWide: 'gap-15 md:grid-cols-2 xl:grid-cols-4', // y
}

export function CardGrid({ as: Tag, children, variant }: CardGridProps) {
  return <Tag className={clsx('grid', variants[variant])}>{children}</Tag>
}
