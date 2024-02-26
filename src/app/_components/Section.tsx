import { Heading } from '@/components/Heading'
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
      <Heading tag="h2" variant="xl">
        {title}
      </Heading>
      <Content content={content} />
      {link && <TextLink href={link.href}>{link.text}</TextLink>}
      {children}
    </section>
  )
}
