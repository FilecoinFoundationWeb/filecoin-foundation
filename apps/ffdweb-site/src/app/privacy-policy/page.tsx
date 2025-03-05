import { MarkdownPage } from '@filecoin-foundation/ui/MarkdownPage'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'

import privacyPolicyMarkdown from './privacy-policy.md'
import { generateStructuredData } from './utils/generateStructuredData'

const { body } = privacyPolicyMarkdown

const SEO = {
  metaTitle: 'Privacy Policy',
  metaDescription:
    'Discover how Filecoin Foundation safeguards your data. Read our comprehensive Privacy Policy for detailed information.',
} as const

export default function PrivacyPolicy() {
  return (
    <MarkdownPage>
      <StructuredDataScript structuredData={generateStructuredData(SEO)} />
      <MarkdownContent>{body}</MarkdownContent>
    </MarkdownPage>
  )
}

export const metadata = createMetadata({
  ...SEO,
})
