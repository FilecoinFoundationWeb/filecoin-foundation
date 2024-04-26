import clsx from 'clsx'

type CardLayoutProps = {
  children: React.ReactNode
  as?: React.ElementType
  type?: 'default' | 'blogPost' | 'caseStudy' | 'reports' | 'grants'
}

export function CardLayout({
  as: Tag = 'ul',
  type = 'default',
  children,
}: CardLayoutProps) {
  const baseLayoutStyles = 'grid gap-4'
  const extendedLayoutStyles = {
    default: 'lg:grid-cols-3',
    blogPost: 'lg:grid-cols-2 lg:grid-rows-2',
    caseStudy: 'md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2',
    reports: 'lg:grid-cols-2 lg:grid-rows-2',
    grants: 'sm:grid-cols-3 xs:gap-6 gap-7',
  }

  return (
    <Tag className={clsx(baseLayoutStyles, extendedLayoutStyles[type])}>
      {children}
    </Tag>
  )
}
