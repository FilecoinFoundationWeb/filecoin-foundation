import { MarkdownPage } from '@filecoin-foundation/ui/MarkdownPage'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'
import { PageHeader } from '@/components/PageHeader'

import privacyPolicyMarkdown from './privacy-policy.md'

const { body } = privacyPolicyMarkdown

const SEO = {
  metaTitle: 'Privacy Policy',
  metaDescription:
    'Discover how Filecoin Foundation safeguards your data. Read our comprehensive Privacy Policy for detailed information.',
} as const

export default function PrivacyPolicy() {
  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(SEO)} />
      <MarkdownPage
        PageHeaderTitle={<PageHeader.Title>{SEO.metaTitle}</PageHeader.Title>}
        MarkdownContent={<MarkdownContent>{body}</MarkdownContent>}
      />
    </>
  )
}

export const metadata = createMetadata({
  ...SEO,
})
