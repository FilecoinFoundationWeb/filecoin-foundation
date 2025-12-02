import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'
import { MarkdownContent } from '@filecoin-foundation/ui-filecoin/Markdown/MarkdownContent'

type TextCardProps = {
  title: string
  description?: string
}

export function TextCard({ title, description }: TextCardProps) {
  return (
    <li className="space-y-5 border-t border-(--color-border-muted) pt-8">
      <span className="block">
        <Heading tag="h2" variant="card-heading">
          {title}
        </Heading>
      </span>
      {description && (
        <div className="[&_.prose]:text-base [&_.prose_p]:text-(--color-paragraph-text)">
          <MarkdownContent>{description}</MarkdownContent>
        </div>
      )}
    </li>
  )
}
