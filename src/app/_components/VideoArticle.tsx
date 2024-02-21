import { TextLink } from '@/components/TextLink'

type VideoArticleProps = {
  title: string
  description: string
  href: string
}

export function VideoArticle({ title, description, href }: VideoArticleProps) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <TextLink href={href}>Watch Video</TextLink>
    </article>
  )
}
