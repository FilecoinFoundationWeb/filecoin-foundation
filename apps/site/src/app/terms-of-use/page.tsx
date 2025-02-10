import { PATHS } from '@/constants/paths'

import markdownPage from '@/content/pages/terms-of-use.md'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownPageSchema } from '@/schemas/FrontmatterSchema'

import { MarkdownPage } from '@/components/MarkdownPage'

import { generateStructuredData } from './utils/generateStructuredData'

const { attributes, body } = MarkdownPageSchema.parse(markdownPage)

export const metadata = createMetadata({
  seo: attributes.seo,
  path: PATHS.TERMS_OF_USE.path,
})

export default function TermsOfUse() {
  return (
    <MarkdownPage
      title={attributes.header.title}
      structuredData={generateStructuredData(attributes.seo)}
    >
      {body}
    </MarkdownPage>
  )
}
