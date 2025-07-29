import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'

import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { TERMS_OF_USE_SEO } from './constants/seo'

export default function TermsOfUse() {
  return (
    <PageSection backgroundVariant="light">
      <PageHeader title="Terms of Use" />
    </PageSection>
  )
}

export const metadata = createMetadata({
  title: { absolute: TERMS_OF_USE_SEO.title },
  description: TERMS_OF_USE_SEO.description,
  path: PATHS.TERMS_OF_USE.path,
})
