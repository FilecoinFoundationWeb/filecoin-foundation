import { MarkdownPage } from '@filecoin-foundation/ui/MarkdownPage'

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
    <MarkdownPage
      PageHeaderTitle={<PageHeader.Title>{SEO.metaTitle}</PageHeader.Title>}
      MarkdownContent={<MarkdownContent>{body}</MarkdownContent>}
    />
  )
}

export const metadata = createMetadata({
  ...SEO,
})
