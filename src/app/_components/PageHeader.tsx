import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

type PageHeaderProps = {
  title: string
  description: string
  link?: { href: string; text: string }
}

export function PageHeader({ title, description, link }: PageHeaderProps) {
  return (
    <header>
      <Heading className="mb-4" tag="h1" variant="4xl">
        {title}
      </Heading>
      <p>{description}</p>
      {link && <TextLink href={link.href}>{link.text}</TextLink>}
    </header>
  )
}
