import { PATHS } from '@/constants/paths'

import { attributes, body } from '@/content/pages/terms-of-use.md'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownPage } from '@/components/MarkdownPage'

import { generateStructuredData } from './utils/generateStructuredData'

export const metadata = createMetadata({
  seo: attributes.seo,
  path: PATHS.TERMS_OF_USE.path,
})

export default function Terms() {
  return (
    <MarkdownPage
      attributes={attributes}
      body={body}
      generateStructuredData={generateStructuredData}
    />
  )
}
