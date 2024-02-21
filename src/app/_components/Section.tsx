import { TextLink } from '@/components/TextLink'

type SectionProps = {
  title: string
  content: string | string[] | React.ReactNode
  kicker?: string
  link?: { href: string; text: string }
  children?: React.ReactNode
}

function Content({ content }: { content: SectionProps['content'] }) {
  if (Array.isArray(content)) {
    return (
      <>
        {content.map((paragraph, index) => (
          <p key={`paragraph-${index}`}>{paragraph}</p>
        ))}
      </>
    )
  }

  if (content === typeof 'string') {
    return <p>{content}</p>
  }

  return <>{content}</>
}

export default Content

export function Section({
  title,
  content,
  kicker,
  link,
  children,
}: SectionProps) {
  return (
    <section>
      {kicker && <span className="uppercase text-sm">{kicker}</span>}
      <h2>{title}</h2>
      <Content content={content} />
      {link && <TextLink href={link.href}>{link.text}</TextLink>}
      {children}
    </section>
  )
}
