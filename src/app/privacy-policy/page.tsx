import { PATHS } from '@/constants/paths'

import { attributes, body } from '@/content/pages/privacy-policy.md'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownPage } from '@/components/MarkdownPage'

import { generateStructuredData } from './utils/generateStructuredData'

export const metadata = createMetadata({
  seo: attributes.seo,
  path: PATHS.PRIVACY_POLICY.path,
})

export default function PrivacyPolicy() {
  return (
    <MarkdownPage
      attributes={attributes}
      body={body}
      generateStructuredData={generateStructuredData}
    />
  )
}
