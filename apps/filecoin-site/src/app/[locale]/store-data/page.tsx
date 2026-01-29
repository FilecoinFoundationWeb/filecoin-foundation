import Image from 'next/image'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { LogoSection } from '@filecoin-foundation/ui-filecoin/LogoSection/LogoSection'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'
import { trustedByLogos } from '@/data/trustedByLogos'

import { createMetadata } from '@/utils/createMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { StorageProviderCardWithImage } from './components/StorageProviderCard/StorageProviderCardWithImage'
import { StorageProviderSection } from './components/StorageProviderSection'
import { STORE_DATA_SEO } from './constants/seo'
import {
  filecoinStorageProviders,
  featuredFilecoinStorageProvider,
  otherFilecoinPoweredSolutions,
} from './data/storageProviders'
import { generateStructuredData } from './utils/generateStructuredData'

export default function StoreData() {
  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(STORE_DATA_SEO)}
      />

      <div className="relative isolate overflow-clip">
        <Navigation backgroundVariant="transparentDark" />
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title="Decentralized, secure storage for data that matters"
            description="Filecoin is a dynamic, decentralized storage network that keeps your data secure, verifiable, and always under your control — powering solutions from enterprise platforms to simple onramps."
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
          title="Trusted by industry leaders"
          logos={trustedByLogos}
        />
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          headingTag="h2"
          title="Store on Filecoin"
          description="Find the perfect storage solution for your data on Filecoin."
        />
        <div className="mt-20 flex flex-col gap-20">
          <StorageProviderCardWithImage {...featuredFilecoinStorageProvider} />

          <StorageProviderSection
            title="Selected storage solutions"
            providers={filecoinStorageProviders}
          />

          <StorageProviderSection
            title="Other Filecoin-powered solutions"
            providers={otherFilecoinPoweredSolutions}
          />

          <Button
            href={`${FILECOIN_FOUNDATION_URLS.ecosystemExplorer.href}?category=data-storage-management`}
            variant="primary"
            className="self-center"
          >
            See more Filecoin-powered solutions
          </Button>
        </div>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          headingTag="h2"
          title="Not sure what storage solution to choose?"
          description="Tell us about your needs, and we'll guide you to the Filecoin solution that fits best."
          cta={
            <Button href="#todo" variant="primary">
              Talk to an expert
            </Button>
          }
        />
      </PageSection>
    </>
  )
}

export const metadata = createMetadata({
  title: { absolute: STORE_DATA_SEO.title },
  description: STORE_DATA_SEO.description,
  path: PATHS.STORE_DATA.path,
  image: graphicsData.digitalMediaConversionSetup.data.src,
})
