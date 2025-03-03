import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import type { WithContext, WebPage } from 'schema-dts'

import { MarkdownContent } from '@/components/MarkdownContent'
import { PageHeader } from '@/components/PageHeader'

type MarkdownPageProps = {
  title: string
  children: string
  structuredData: WithContext<WebPage>
}

export function MarkdownPage({
  title,
  children,
  structuredData,
}: MarkdownPageProps) {
  return (
    <article className="prose">
      <StructuredDataScript structuredData={structuredData} />
      <header className="mb-6">
        <PageHeader.Title>{title}</PageHeader.Title>
      </header>
      <MarkdownContent>{children}</MarkdownContent>
    </article>
  )
}
