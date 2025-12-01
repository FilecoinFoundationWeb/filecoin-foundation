import { MarkdownContent as BaseMarkdownContent } from '@filecoin-foundation/ui-filecoin/Markdown/MarkdownContent'

type MarkdownContentProps = {
  children: Parameters<typeof BaseMarkdownContent>[0]['children']
}

export function MarkdownContent({ children }: MarkdownContentProps) {
  return (
    <div className="[&_.prose]:text-base [&_.prose_p]:text-[var(--color-paragraph-text)]">
      <BaseMarkdownContent>{children}</BaseMarkdownContent>
    </div>
  )
}
