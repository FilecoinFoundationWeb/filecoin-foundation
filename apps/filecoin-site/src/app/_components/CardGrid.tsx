import { clsx } from 'clsx'

type CardGridProps = {
  children: React.ReactNode
  variant: keyof typeof variants
  as?: React.ElementType
}

const variants = {
  'col2-one': 'gap-8 md:grid-cols-2',
  'col2-two': 'gap-x-15 gap-y-8 md:grid-cols-2',
  'col2-three': 'gap-10 lg:grid-cols-2',
  'col3-one': 'gap-x-8 gap-y-15 md:grid-cols-2 lg:grid-cols-3',
  'col3-two': 'gap-12 md:grid-cols-2 md:gap-15 lg:grid-cols-3',
  'col3-three': 'gap-x-15 gap-y-20 md:grid-cols-2 xl:grid-cols-3',
  'col3-four': 'gap-10 md:grid-cols-2 lg:grid-cols-3',
  'col4-one': 'gap-15 md:grid-cols-2 xl:grid-cols-4',
}

export function CardGrid({ as: Tag = 'ul', children, variant }: CardGridProps) {
  return <Tag className={clsx('grid', variants[variant])}>{children}</Tag>
}
