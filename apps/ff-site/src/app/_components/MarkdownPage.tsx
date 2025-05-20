import type { WithContext, WebPage } from 'schema-dts'

import { PageHeaderTitle } from '@filecoin-foundation/ui/PageHeader'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { MarkdownContent } from '@/components/MarkdownContent'

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
        <PageHeaderTitle>{title}</PageHeaderTitle>
      </header>
      <MarkdownContent>{children}</MarkdownContent>
    </article>
  )
}
