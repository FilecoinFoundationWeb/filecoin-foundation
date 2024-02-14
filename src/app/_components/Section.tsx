import { TextLink } from '@/components/TextLink'

type Props = {
  content: string | string[]
  kicker?: string
  link?: { url: string; text: string }
  title: string
  children?: React.ReactNode
}

function Content({ content }: { content: string | string[] }) {
  if (Array.isArray(content)) {
    return (
      <>
        {content.map((paragraph, index) => (
          <p key={`paragraph-${index}`}>{paragraph}</p>
        ))}
      </>
    )
  }

  return <p>{content}</p>
}

export function Section({ content, kicker, link, title, children }: Props) {
  return (
    <section>
      {kicker && <span className="uppercase text-sm">{kicker}</span>}
      <h2>{title}</h2>
      <Content content={content} />
      {link && <TextLink href={link.url}>{link.text}</TextLink>}
      {children}
    </section>
  )
}
