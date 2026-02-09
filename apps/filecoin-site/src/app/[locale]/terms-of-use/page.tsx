import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { generateStructuredData } from './utils/generateStructuredData'

const TRANSLATION_NAMESPACE = 'terms-of-use'

export default async function TermsOfUse() {
  const t = await getTranslations(TRANSLATION_NAMESPACE)

  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData({
          title: t('metadata.title'),
          description: t('metadata.description'),
        })}
      />
      <Navigation backgroundVariant="light" />
      <PageSection backgroundVariant="light" paddingVariant="topCompact">
        <PageHeader title="Terms of Use" />
      </PageSection>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations(TRANSLATION_NAMESPACE)

  return createMetadata({
    title: { absolute: t('metadata.title') },
    description: t('metadata.description'),
    path: PATHS.TERMS_OF_USE.path,
  })
}
