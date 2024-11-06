import { PATHS } from '@/constants/paths'

import {
  attributes,
  body,
} from '@/content/pages/security/coordinated-disclosure-policy.md'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownPage } from '@/components/MarkdownPage'

import { generateStructuredData } from './utils/generateStructuredData'

export const metadata = createMetadata({
  seo: attributes.seo,
  path: PATHS.COORDINATED_DISCLOSURE_POLICY.path,
  overrideDefaultTitle: true,
})

export default function CoordinatedDisclosurePolicy() {
  return (
    <MarkdownPage
      attributes={attributes}
      body={body}
      generateStructuredData={generateStructuredData}
    />
  )
}
