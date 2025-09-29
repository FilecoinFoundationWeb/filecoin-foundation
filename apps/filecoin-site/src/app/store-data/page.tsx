import Image from 'next/image'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { findOrThrow } from '@filecoin-foundation/utils/findOrThrow'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'
import { trustedByLogos } from '@/data/trustedByLogos'

import { createMetadata } from '@/utils/createMetadata'

import { Button } from '@/components/Button'
import { CardGrid } from '@/components/CardGrid'
import { LogoSection } from '@/components/LogoSection/LogoSection'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'
import { SectionDivider } from '@/components/SectionDivider'

import { StorageProviderCard } from './components/StorageProviderCard/StorageProviderCard'
import { STORE_DATA_SEO } from './constants/seo'
import { storageProviders } from './data/storageProviders'
import { generateStructuredData } from './utils/generateStructuredData'

const featuredStorageProvider = findOrThrow(
  storageProviders,
  (provider) => provider.featured,
)

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
            description="A dynamic and powerful distributed storage network for your data."
          />
        </PageSection>

        <Image
          priority
          src={graphicsData.starsSpinning.data}
          alt={graphicsData.starsSpinning.alt}
          className="absolute right-0 bottom-0 -z-10 h-full object-cover object-bottom-right"
        />
      </div>

      <PageSection paddingVariant="compact" backgroundVariant="dark">
        <LogoSection
          headingTag="h2"
          title="Trusted by industry leaders"
          logos={trustedByLogos}
        />
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          title="Store on Filecoin"
          description="Find the perfect storage solution for your data on Filecoin."
        >
          <StorageProviderCard as="div" {...featuredStorageProvider} />

          <SectionDivider />

          <CardGrid as="ul" variant="mdTwoLgThreeWide">
            {storageProviders
              .slice()
              .filter((provider) => !provider.featured)
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(({ name, description, bestFor, keyFeatures, url, logo }) => (
                <StorageProviderCard
                  key={name}
                  as="li"
                  name={name}
                  description={description}
                  bestFor={bestFor}
                  keyFeatures={keyFeatures}
                  url={url}
                  logo={logo}
                />
              ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
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
