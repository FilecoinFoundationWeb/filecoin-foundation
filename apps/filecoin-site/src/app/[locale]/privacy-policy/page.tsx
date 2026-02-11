import type { Metadata } from 'next'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'
import { getTranslatedMetadata } from '@/utils/getTranslatedMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { generateStructuredData } from './utils/generateStructuredData'

export default async function PrivacyPolicy() {
  const metadata = await getTranslatedMetadata(PATHS.PRIVACY_POLICY.path)

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(metadata)} />
      <Navigation backgroundVariant="light" />
      <PageSection backgroundVariant="light" paddingVariant="topCompact">
        <PageHeader title="Privacy Policy" />
      </PageSection>
    </>
  )
}
export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getTranslatedMetadata(
    PATHS.PRIVACY_POLICY.path,
  )

  return createMetadata({
    title: { absolute: title },
    description,
    path: PATHS.PRIVACY_POLICY.path,
  })
}
