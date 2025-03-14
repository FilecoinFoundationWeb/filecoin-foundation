import { MarkdownPage } from '@filecoin-foundation/ui/MarkdownPage'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'

import privacyPolicyMarkdown from './privacy-policy.md'
import { generateStructuredData } from './utils/generateStructuredData'

const { body } = privacyPolicyMarkdown

const PRIVACY_POLICY_SEO = {
  title: 'Privacy Policy',
  description:
    'Discover how Filecoin Foundation safeguards your data. Read our comprehensive Privacy Policy for detailed information.',
} as const

export default function PrivacyPolicy() {
  return (
    <MarkdownPage>
      <StructuredDataScript
        structuredData={generateStructuredData(PRIVACY_POLICY_SEO)}
      />
      <MarkdownContent>{body}</MarkdownContent>
    </MarkdownPage>
  )
}

export const metadata = createMetadata({
  title: { absolute: PRIVACY_POLICY_SEO.title },
  description: PRIVACY_POLICY_SEO.description,
  path: PATHS.PRIVACY_POLICY.path,
})
