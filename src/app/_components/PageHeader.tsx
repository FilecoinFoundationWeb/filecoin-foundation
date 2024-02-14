import { TextLink } from '@/components/TextLink'

type Props = {
  title: string
  description: string
  link?: { url: string; text: string }
}

export default function PageHeader({ title, description, link }: Props) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
      {link && <TextLink href={link.url}>{link.text}</TextLink>}
    </header>
  )
}
