import Image from 'next/image'

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import { LogoSection } from '@filecoin-foundation/ui-filecoin/LogoSection/LogoSection'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'
import { trustedByLogos } from '@/data/trustedByLogos'

import { createMetadata } from '@/utils/createMetadata'
import { getLocalePath } from '@/utils/getLocalePath'
import { getTranslatedMetadata } from '@/utils/getTranslatedMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { StorageProviderCard } from './components/StorageProviderCard/StorageProviderCard'
import { StorageProviderSection } from './components/StorageProviderSection'
import {
  getFilecoinStorageProviders,
  getFeaturedFilecoinStorageProvider,
} from './data/storageProviders'
import { generateStructuredData } from './utils/generateStructuredData'

export default async function StoreData() {
  const metadata = await getTranslatedMetadata(PATHS.STORE_DATA.path)
  const t = await getTranslations(PATHS.STORE_DATA.path)

  const storageProviders = getFilecoinStorageProviders(t)
  const featuredStorageProviders = getFeaturedFilecoinStorageProvider(t)

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(metadata)} />

      <div className="relative isolate overflow-clip">
        <Navigation backgroundVariant="transparentDark" />
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title={t('hero.title')}
            description={t('hero.description')}
          />
        </PageSection>

        <Image
          priority
          src={graphicsData.starsSpinning.data}
          alt={graphicsData.starsSpinning.alt}
          className="absolute right-0 bottom-0 -z-10 h-full object-cover object-bottom-right"
        />
      </div>

      <PageSection backgroundVariant="dark" paddingVariant="topNone">
        <LogoSection
          headingTag="h2"
          title={t('trustedBy.title')}
          logos={trustedByLogos}
        />
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          headingTag="h2"
          title={t('storeOnFilecoin.title')}
          description={t('storeOnFilecoin.description')}
        />
        <div className="mt-20 flex flex-col gap-20">
          <CardGrid as="ul" variant="mdTwo">
            {featuredStorageProviders.map((provider) => (
              <StorageProviderCard key={provider.name} as="li" {...provider} />
            ))}
          </CardGrid>

          <StorageProviderSection
            title={t('selectedSolutions.title')}
            providers={storageProviders}
          />

          <Button
            href={`${FILECOIN_FOUNDATION_URLS.ecosystemExplorer.href}?category=data-storage-management`}
            variant="primary"
            className="self-center"
          >
            {t('seeMore')}
          </Button>
        </div>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          headingTag="h2"
          title={t('notSure.title')}
          description={t('notSure.description')}
          cta={
            <Button href="#todo" variant="primary">
              {t('notSure.cta')}
            </Button>
          }
        />
      </PageSection>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getTranslatedMetadata(
    PATHS.STORE_DATA.path,
  )

  return createMetadata({
    title: { absolute: title },
    description,
    path: await getLocalePath(PATHS.STORE_DATA.path),
    image: graphicsData.digitalMediaConversionSetup.data.src,
  })
}
