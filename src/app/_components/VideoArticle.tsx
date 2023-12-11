import CustomLink from '@/components/CustomLink'

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
      <CustomLink href={link}>Watch Video</CustomLink>
    </article>
  )
}
