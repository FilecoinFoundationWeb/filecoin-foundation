import { TextLink } from '@/components/TextLink'

type VideoArticleProps = {
  title: string
  content: string
  link: string
}

export function VideoArticle({ title, content, link }: VideoArticleProps) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{content}</p>
      <TextLink href={link}>Watch Video</TextLink>
    </article>
  )
}
