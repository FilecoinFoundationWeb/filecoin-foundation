import type { Metadata } from 'next'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'
import { getTranslatedMetadata } from '@/utils/getTranslatedMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { generateStructuredData } from './utils/generateStructuredData'

const TRANSLATION_NAMESPACE = 'terms-of-use'

export default async function TermsOfUse() {
  const metadata = await getTranslatedMetadata(TRANSLATION_NAMESPACE)

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(metadata)} />
      <Navigation backgroundVariant="light" />
      <PageSection backgroundVariant="light" paddingVariant="topCompact">
        <PageHeader title="Terms of Use" />
      </PageSection>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getTranslatedMetadata(
    TRANSLATION_NAMESPACE,
  )

  return createMetadata({
    title: { absolute: title },
    description,
    path: PATHS.TERMS_OF_USE.path,
  })
}
