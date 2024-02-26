import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

type VideoArticleProps = {
  title: string
  description: string
  href: string
}

export function VideoArticle({ title, description, href }: VideoArticleProps) {
  return (
    <article>
      <Heading tag="h3" variant="lg">
        {title}
      </Heading>
      <p>{description}</p>
      <TextLink href={href}>Watch Video</TextLink>
    </article>
  )
}
