import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { PRIVACY_POLICY_SEO } from './constants/seo'
import { generateStructuredData } from './utils/generateStructuredData'

export default function PrivacyPolicy() {
  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(PRIVACY_POLICY_SEO)}
      />
      <Navigation backgroundVariant="light" />
      <PageSection backgroundVariant="light" paddingVariant="topCompact">
        <PageHeader title="Privacy Policy" />
      </PageSection>
    </>
  )
}

export const metadata = createMetadata({
  title: { absolute: PRIVACY_POLICY_SEO.title },
  description: PRIVACY_POLICY_SEO.description,
  path: PATHS.PRIVACY_POLICY.path,
})
