import { PATHS } from '@/constants/paths'

import coordinatedDisclosurePolicyMarkdown from '@/content/pages/security/coordinated-disclosure-policy.md'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownPageSchema } from '@/schemas/PageFrontmatterSchema'

import { MarkdownPage } from '@/components/MarkdownPage'

import { generateStructuredData } from './utils/generateStructuredData'

const { attributes, body } = MarkdownPageSchema.parse(
  coordinatedDisclosurePolicyMarkdown,
)

export const metadata = createMetadata({
  seo: attributes.seo,
  path: PATHS.COORDINATED_DISCLOSURE_POLICY.path,
  overrideDefaultTitle: true,
})

export default function CoordinatedDisclosurePolicy() {
  return (
    <MarkdownPage
      title={attributes.header.title}
      structuredData={generateStructuredData(attributes.seo)}
    >
      {body}
    </MarkdownPage>
  )
}
