// import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
// import type { WithContext, WebPage } from 'schema-dts'

type MarkdownPageProps = {
  PageHeaderTitle: React.ReactNode
  MarkdownContent: React.ReactNode
  // structuredData: WithContext<WebPage>
}

export function MarkdownPage({
  PageHeaderTitle,
  MarkdownContent,
  // structuredData,
}: MarkdownPageProps) {
  return (
    <article className="prose">
      {/* <StructuredDataScript structuredData={structuredData} /> */}
      <header className="mb-6">{PageHeaderTitle}</header>
      {MarkdownContent}
    </article>
  )
}
