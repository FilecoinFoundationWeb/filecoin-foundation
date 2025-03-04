import { MarkdownPage } from '@filecoin-foundation/ui/MarkdownPage'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'
import { PageHeader } from '@/components/PageHeader'

import termsOfUseMarkdown from './terms-of-use.md'
import { generateStructuredData } from './utils/generateStructuredData'
const { body } = termsOfUseMarkdown

const SEO = {
  metaTitle: 'Terms of Use',
  metaDescription:
    'Understand the terms and conditions of using Filecoin Foundation services. Read our detailed Terms of Use for more information.',
} as const

export default function TermsOfUse() {
  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(SEO)} />
      <MarkdownPage
        PageHeaderTitle={<PageHeader.Title>{SEO.metaTitle}</PageHeader.Title>}
        MarkdownContent={<MarkdownContent>{body}</MarkdownContent>}
      />
    </>
  )
}

export const metadata = createMetadata({
  ...SEO,
})
