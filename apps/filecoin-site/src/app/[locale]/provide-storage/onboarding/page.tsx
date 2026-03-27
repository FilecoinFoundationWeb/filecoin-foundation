import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'
import { getLocalePath } from '@/utils/getLocalePath'
import { getTranslatedMetadata } from '@/utils/getTranslatedMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { ProvideStorageForm } from './components/ProvideStorageForm'

export default async function ProvideStorageFormPage() {
  const t = await getTranslations(PATHS.PROVIDE_STORAGE_ONBOARDING.path)

  return (
    <>
      <Navigation backgroundVariant="light" />
      <PageSection backgroundVariant="light">
        <div className="max-w-4xl">
          <Heading tag="h1" variant="section-heading">
            {t('heading')}
          </Heading>

          <p className="pt-6 pb-25 text-xl/7 text-pretty text-(--color-paragraph-text)">
            {t('description')}
          </p>

          <ProvideStorageForm />
        </div>
      </PageSection>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getTranslatedMetadata(
    PATHS.PROVIDE_STORAGE_ONBOARDING.path,
  )

  return createMetadata({
    title: { absolute: title },
    description,
    path: await getLocalePath(PATHS.PROVIDE_STORAGE_ONBOARDING.path),
  })
}
