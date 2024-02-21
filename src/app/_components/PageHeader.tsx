import { TextLink } from '@/components/TextLink'

type PageHeaderProps = {
  title: string
  description: string
  link?: { href: string; text: string }
}

export function PageHeader({ title, description, link }: PageHeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
      {link && <TextLink href={link.href}>{link.text}</TextLink>}
    </header>
  )
}
