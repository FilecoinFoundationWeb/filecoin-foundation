type CardLayoutProps = {
  children: React.ReactNode
  as?: React.ElementType
}

export function CardLayout({ as: Tag = 'ul', children }: CardLayoutProps) {
  return <Tag className="grid gap-4 lg:grid-cols-2">{children}</Tag>
}
