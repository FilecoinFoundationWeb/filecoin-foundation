import { MarkdownPage } from '@filecoin-foundation/ui/MarkdownPage'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'

import { TERMS_OF_USE_SEO } from './constants/seo'
import termsOfUseMarkdown from './terms-of-use.md'
import { generateStructuredData } from './utils/generateStructuredData'

const { body } = termsOfUseMarkdown

export default function TermsOfUse() {
  return (
    <MarkdownPage>
      <StructuredDataScript
        structuredData={generateStructuredData(TERMS_OF_USE_SEO)}
      />
      <MarkdownContent>{body}</MarkdownContent>
    </MarkdownPage>
  )
}

export const metadata = createMetadata({
  title: TERMS_OF_USE_SEO.title,
  description: TERMS_OF_USE_SEO.description,
  path: PATHS.TERMS_OF_USE.path,
})
