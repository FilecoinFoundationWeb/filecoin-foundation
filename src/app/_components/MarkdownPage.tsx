import type { WithContext, Thing } from 'schema-dts'

import type { PageAttributes } from '@/types/attributesTypes'

import type { SeoMetadata } from '@/schemas/SeoMetadataSchema'

import { MarkdownContent } from '@/components/MarkdownContent'
import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'

type MarkdownPageProps = {
  attributes: PageAttributes
  body: string
  generateStructuredData: (seo: SeoMetadata) => WithContext<Thing>
}

export function MarkdownPage({
  attributes,
  body,
  generateStructuredData,
}: MarkdownPageProps) {
  const { header, seo } = attributes

  return (
    <article className="prose">
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <header className="mb-6">
        <PageHeader.Title>{header.title}</PageHeader.Title>
      </header>
      <MarkdownContent>{body}</MarkdownContent>
    </article>
  )
}
