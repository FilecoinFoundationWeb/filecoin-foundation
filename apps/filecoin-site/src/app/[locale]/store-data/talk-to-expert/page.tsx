import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'
import { getLocalePath } from '@/utils/getLocalePath'
import { getTranslatedMetadata } from '@/utils/getTranslatedMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { StoreDataForm } from './components/StoreDataForm'

export default async function TalkToExpertPage() {
  const t = await getTranslations(PATHS.STORE_DATA_TALK_TO_EXPERT.path)

  return (
    <>
      <Navigation backgroundVariant="light" />
      <PageSection backgroundVariant="light" paddingVariant="topCompact">
        <div className="max-w-4xl">
          <Heading tag="h1" variant="section-heading">
            {t('heading')}
          </Heading>

          <p className="pt-6 pb-25 text-xl/7 text-pretty text-(--color-paragraph-text)">
            {t('description')}
          </p>

          <StoreDataForm />
        </div>
      </PageSection>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getTranslatedMetadata(
    PATHS.STORE_DATA_TALK_TO_EXPERT.path,
  )

  return createMetadata({
    title: { absolute: title },
    description,
    path: await getLocalePath(PATHS.STORE_DATA_TALK_TO_EXPERT.path),
  })
}
