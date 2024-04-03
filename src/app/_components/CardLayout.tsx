import clsx from 'clsx'

type CardLayoutProps = {
  children: React.ReactNode
  as?: React.ElementType
  type?: 'blogPost' | 'caseStudy'
}

export function CardLayout({
  as: Tag = 'ul',
  type = 'blogPost',
  children,
}: CardLayoutProps) {
  const baseLayoutStyles = 'grid gap-4'
  const extendedLayoutStyles = {
    blogPost: 'lg:grid-cols-2 md:grid-rows-2',
    caseStudy: 'md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2',
  }

  return (
    <Tag className={clsx(baseLayoutStyles, extendedLayoutStyles[type])}>
      {children}
    </Tag>
  )
}
