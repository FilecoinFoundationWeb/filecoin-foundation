import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'

import { Navigation } from '@/components/Navigation/Navigation'
import { PageHeader } from '@/components/PageHeader'

import { TERMS_OF_USE_SEO } from './constants/seo'
import { generateStructuredData } from './utils/generateStructuredData'

export default function TermsOfUse() {
  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(TERMS_OF_USE_SEO)}
      />
      <Navigation backgroundVariant="light" />
      <PageSection backgroundVariant="light">
        <PageHeader title="Terms of Use" />
      </PageSection>
    </>
  )
}

export const metadata = createMetadata({
  title: { absolute: TERMS_OF_USE_SEO.title },
  description: TERMS_OF_USE_SEO.description,
  path: PATHS.TERMS_OF_USE.path,
})
