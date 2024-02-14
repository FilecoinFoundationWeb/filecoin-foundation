import { TextLink } from '@/components/TextLink'

type Props = {
  title: string
  content: string
  link: string
}

export default function VideoArticle({ title, content, link }: Props) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{content}</p>
      <TextLink href={link}>Watch Video</TextLink>
    </article>
  )
}
