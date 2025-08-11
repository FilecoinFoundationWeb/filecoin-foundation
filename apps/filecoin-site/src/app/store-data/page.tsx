import { Suspense } from 'react'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'
import { trustedByLogos } from '@/data/trustedByLogos'

import { createMetadata } from '@/utils/createMetadata'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { LogoSection } from '@/components/LogoSection/LogoSection'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'

import { ExpertSupportBanner } from './components/ExpertSupportBanner'
import { StorageProviderList } from './components/StorageProviderList'
import { STORE_DATA_SEO } from './constants/seo'
import { filecoinFeatures } from './data/filecoinFeatures'
import { generateStructuredData } from './utils/generateStructuredData'

export default function StoreData() {
  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(STORE_DATA_SEO)}
      />
      <BackgroundImage
        overlayVariant="light"
        src={graphicsData.starsSpinning.data.src}
        blurDataURL={graphicsData.starsSpinning.data.blurDataURL}
      >
        <Navigation backgroundVariant="transparentDark" />
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title="Decentralized, secure storage for data that matters"
            description="A dynamic and powerful distributed storage network for your data."
            cta={
              <Button
                href={`${PATHS.STORE_DATA.path}#store-on-filecoin`}
                variant="primary"
              >
                Explore storage solutions
              </Button>
            }
          />
        </PageSection>
      </BackgroundImage>

      <PageSection backgroundVariant="dark">
        <div className="-mb-10">
          <LogoSection
            title="Trusted by industry leaders"
            logos={trustedByLogos}
          />
        </div>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Future-proof your data infrastructure"
          description="Filecoin is a powerful alternative to traditional cloud storage. The network ensures your data remains secure and verified, so that you can store your data with confidence."
        >
          <CardGrid as="ul" variant="smTwoXlFourWide">
            {filecoinFeatures.map(({ title, description, icon }) => (
              <Card
                key={title}
                as="li"
                backgroundVariant="dark"
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          title="Store on Filecoin"
          description="Find the perfect storage solution for your data on Filecoin."
        />

        <div className="mt-15">
          <ExpertSupportBanner />
        </div>

        <div className="mt-20">
          <Suspense>
            <StorageProviderList />
          </Suspense>
        </div>
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent
          title="Don't see your storage solution?"
          description="Showcase your Filecoin storage solution in this storage directory and reach thousands of data clients."
          cta={
            <Button href="#todo" variant="primary">
              Submit your storage solution
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
})
