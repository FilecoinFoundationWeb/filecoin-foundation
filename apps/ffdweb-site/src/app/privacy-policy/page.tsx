import { MarkdownPage } from '@filecoin-foundation/ui/MarkdownPage'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'

import { PRIVACY_POLICY_SEO } from './constants/seo'
import privacyPolicyMarkdown from './privacy-policy.md'
import { generateStructuredData } from './utils/generateStructuredData'

const { body } = privacyPolicyMarkdown

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
  title: PRIVACY_POLICY_SEO.title,
  description: PRIVACY_POLICY_SEO.description,
  path: PATHS.PRIVACY_POLICY.path,
})
