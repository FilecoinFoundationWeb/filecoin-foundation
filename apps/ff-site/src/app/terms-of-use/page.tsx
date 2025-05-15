import { PATHS } from '@/constants/paths'

import termsOfUseMarkdown from '@/content/pages/terms-of-use.md'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownPageSchema } from '@/schemas/PageFrontmatterSchema'

import { MarkdownPage } from '@/components/MarkdownPage'

import { generateStructuredData } from './utils/generateStructuredData'

const { attributes, body } = MarkdownPageSchema.parse(termsOfUseMarkdown)

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

export const metadata = createMetadata({
  title: attributes.seo.title,
  description: attributes.seo.description,
  image: attributes.seo.image,
  path: PATHS.TERMS_OF_USE.path,
})
