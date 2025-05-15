import { PATHS } from '@/constants/paths'

import privacyPolicyMarkdown from '@/content/pages/privacy-policy.md'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownPageSchema } from '@/schemas/PageFrontmatterSchema'

import { MarkdownPage } from '@/components/MarkdownPage'

import { generateStructuredData } from './utils/generateStructuredData'

const { attributes, body } = MarkdownPageSchema.parse(privacyPolicyMarkdown)

export default function PrivacyPolicy() {
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
  path: PATHS.PRIVACY_POLICY.path,
})
