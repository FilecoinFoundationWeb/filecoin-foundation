import type { Metadata } from 'next'

import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'

import { PATHS } from '@/constants/paths'

import { createMetadata } from '@/utils/createMetadata'
import { getLocalePath } from '@/utils/getLocalePath'
import { getTranslatedMetadata } from '@/utils/getTranslatedMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { TalkToExpertForm } from './components/TalkToExpertForm'

export default function TalkToExpertPage() {
  return (
    <>
      <Navigation backgroundVariant="light" />
      <PageSection backgroundVariant="light" paddingVariant="topCompact">
        <div className="max-w-4xl">
          <Heading tag="h1" variant="section-heading">
            Talk to a Filecoin storage expert.
          </Heading>

          <p className="pt-6 pb-25 text-xl/7 text-pretty text-(--color-paragraph-text)">
            Share a few details below, and our team will help you evaluate the
            best storage solution for your use case.
          </p>

          <TalkToExpertForm />
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
