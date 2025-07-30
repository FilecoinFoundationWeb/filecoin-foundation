import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'

import { Navigation } from '@/components/Navigation/Navigation'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { PRIVACY_POLICY_SEO } from './constants/seo'

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation backgroundVariant="light" />
      <PageSection backgroundVariant="light">
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
