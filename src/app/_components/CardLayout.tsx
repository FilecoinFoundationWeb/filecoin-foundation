import clsx from 'clsx'

type CardLayoutProps = {
  children: React.ReactNode
  as?: React.ElementType
  type?: 'default' | 'blogPost' | 'governance' | 'grants' | 'home'
}

export function CardLayout({
  as: Tag = 'ul',
  type = 'default',
  children,
}: CardLayoutProps) {
  const baseLayoutStyles = 'grid gap-4 sm:gap-6'
  const extendedLayoutStyles = {
    default: 'sm:grid-cols-2 lg:grid-cols-3',
    blogPost: 'lg:grid-cols-2 lg:grid-rows-2',
    governance: 'grid-cols-1 sm:grid-cols-2',
    grants: 'gap-8 sm:grid-cols-3',
    home: 'grid-cols-1 sm:grid-cols-2 sm:grid-rows-2',
  }

  return (
    <Tag className={clsx(baseLayoutStyles, extendedLayoutStyles[type])}>
      {children}
    </Tag>
  )
}
