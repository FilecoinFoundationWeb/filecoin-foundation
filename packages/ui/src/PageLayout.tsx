import { clsx } from 'clsx'

type PageLayoutProps = {
  children: React.ReactNode
  gap?: keyof typeof gapMap
}

const gapMap = {
  16: 'gap-16',
  32: 'gap-32',
} as const

export function PageLayout({ children, gap = 16 }: PageLayoutProps) {
  return <div className={clsx('flex flex-col', gapMap[gap])}>{children}</div>
}
