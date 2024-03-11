import { ElementType } from 'react'

type CardLayoutProps = {
  children: React.ReactNode
  as?: ElementType
}

export function CardLayout({ as: Tag = 'ul', children }: CardLayoutProps) {
  return <Tag className="grid gap-4 sm:grid-cols-2">{children}</Tag>
}
