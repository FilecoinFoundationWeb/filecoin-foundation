import { clsx } from 'clsx'

type ImageGridProps = {
  variant: keyof typeof variants
  children: React.ReactNode
}

const variants = {
  oneMdThree: 'gap-1 grid-cols-1 md:grid-cols-3',
}

export function ImageGrid({ variant, children }: ImageGridProps) {
  return <div className={clsx('grid', variants[variant])}>{children}</div>
}
