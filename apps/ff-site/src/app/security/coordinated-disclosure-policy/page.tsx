import { PATHS } from '@/constants/paths'

import coordinatedDisclosurePolicyMarkdown from '@/content/pages/security/coordinated-disclosure-policy.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownPageSchema } from '@/schemas/PageFrontmatterSchema'

import { MarkdownPage } from '@/components/MarkdownPage'

import { generateStructuredData } from './utils/generateStructuredData'

const { attributes, body } = MarkdownPageSchema.parse(
  coordinatedDisclosurePolicyMarkdown,
)

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

export const metadata = createMetadata({
  title: { absolute: attributes.seo.title },
  description: attributes.seo.description,
  image: graphicsData.securityCoordinatedDisclosurePolicy.data.src,
  path: PATHS.COORDINATED_DISCLOSURE_POLICY.path,
})
