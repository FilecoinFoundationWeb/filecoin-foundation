import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { ProvideStorageForm } from './components/ProvideStorageForm'
import { PROVIDE_STORAGE_ONBOARDING_SEO } from './constants/seo'

export default function ProvideStorageFormPage() {
  return (
    <>
      <Navigation backgroundVariant="light" />
      <PageSection backgroundVariant="light" paddingVariant="topCompact">
        <div className="max-w-4xl">
          <Heading tag="h1" variant="section-heading">
            Thanks for your interest in becoming a Filecoin storage provider.
          </Heading>

          <p className="pt-6 pb-25 text-xl/7 text-pretty text-(--color-paragraph-text)">
            Please fill out this form below, and a member of the onboarding team
            will reach out to guide you through next steps.
          </p>

          <ProvideStorageForm />
        </div>
      </PageSection>
    </>
  )
}

export const metadata = createMetadata({
  title: { absolute: PROVIDE_STORAGE_ONBOARDING_SEO.title },
  description: PROVIDE_STORAGE_ONBOARDING_SEO.description,
  path: PATHS.PROVIDE_STORAGE_ONBOARDING.path,
})
