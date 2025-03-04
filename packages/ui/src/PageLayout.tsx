import { clsx } from 'clsx'

type PageLayoutProps = {
  children: React.ReactNode
  gap?: keyof typeof gapMap
}

const gapMap = {
  16: 'gap-16',
  32: 'sm:gap-32 gap-16',
} as const

export function PageLayout({ children, gap = 16 }: PageLayoutProps) {
  return <div className={clsx('flex flex-col', gapMap[gap])}>{children}</div>
}
