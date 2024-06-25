import clsx from 'clsx'

type PageLayoutProps = {
  children: React.ReactNode
  withTopMargin?: boolean
}

export function PageLayout({ children, withTopMargin }: PageLayoutProps) {
  return (
    <div className={clsx('flex flex-col gap-16', withTopMargin && 'mt-8')}>
      {children}
    </div>
  )
}
