import { MarkdownPage } from '@filecoin-foundation/ui/MarkdownPage'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'

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
    <MarkdownPage>
      <StructuredDataScript structuredData={generateStructuredData(SEO)} />
      <MarkdownContent>{body}</MarkdownContent>
    </MarkdownPage>
  )
}

export const metadata = createMetadata({
  path: PATHS.TERMS_OF_USE.path,
  ...SEO,
})
