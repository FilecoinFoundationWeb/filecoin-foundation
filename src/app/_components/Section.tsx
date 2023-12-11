import CustomLink from '@/components/CustomLink'

type Props = {
  title: string
  content: string | string[]
  link?: { url: string; text: string }
  children?: React.ReactNode
}
export default function Section({ title, content, link, children }: Props) {
  return (
    <section>
      <h2>{title}</h2>
      {Array.isArray(content) ? (
        content.map((paragraph, index) => <p key={index}>{paragraph}</p>)
      ) : (
        <p>{content}</p>
      )}
      {link && <CustomLink href={link.url}>{link.text}</CustomLink>}
      {children}
    </section>
  )
}
