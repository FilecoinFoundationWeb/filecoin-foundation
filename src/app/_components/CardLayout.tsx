import clsx from 'clsx'

type CardLayoutProps = {
  children: React.ReactNode
  as?: React.ElementType
  type?: 'default' | 'blogPost' | 'governance' | 'grants' | 'reports'
}

export function CardLayout({
  as: Tag = 'ul',
  type = 'default',
  children,
}: CardLayoutProps) {
  const baseLayoutStyles = 'grid gap-4'
  const extendedLayoutStyles = {
    default: 'sm:grid-cols-2 lg:grid-cols-3',
    blogPost: 'lg:grid-cols-2 lg:grid-rows-2',
    governance: 'grid-cols-1 sm:grid-cols-2 sm:gap-6',
    grants: 'gap-7 sm:grid-cols-3 sm:gap-6',
    reports: 'lg:grid-cols-2 lg:grid-rows-2',
  }

  return (
    <Tag className={clsx(baseLayoutStyles, extendedLayoutStyles[type])}>
      {children}
    </Tag>
  )
}
