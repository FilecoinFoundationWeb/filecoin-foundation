import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'

import { MarkdownContent } from './MarkdownContent'

type TextCardProps = {
  title: string
  description?: string
}

export function TextCard({ title, description }: TextCardProps) {
  return (
    <li className="space-y-5 border-t border-[var(--color-border-muted)] pt-8">
      <span className="block">
        <Heading tag="h2" variant="card-heading">
          {title}
        </Heading>
      </span>
      {description && <MarkdownContent>{description}</MarkdownContent>}
    </li>
  )
}
