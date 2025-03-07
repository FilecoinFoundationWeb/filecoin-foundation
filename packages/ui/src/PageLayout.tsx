import { clsx } from 'clsx'

type PageLayoutProps = {
  children: React.ReactNode
  gap?: keyof typeof gapMap
}

const gapMap = {
  default: 'gap-16',
  large: 'gap-32',
} as const

export function PageLayout({ children, gap = 'default' }: PageLayoutProps) {
  return <div className={clsx('flex flex-col', gapMap[gap])}>{children}</div>
}
