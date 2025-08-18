import { clsx } from 'clsx'

type CardGridProps = {
  as: 'ul'
  children: React.ReactNode
  variant: keyof typeof variants
}

const variants = {
  oneMdThree: 'gap-1 grid-cols-1 md:grid-cols-3',
}

export function ImageGrid({ as: Tag, children, variant }: CardGridProps) {
  return <Tag className={clsx('grid', variants[variant])}>{children}</Tag>
}
