import { Suspense } from 'react'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'
import { trustedByLogos } from '@/data/trustedByLogos'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { LogoSection } from '@/components/LogoSection/LogoSection'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'

import { ExpertSupportBanner } from './components/ExpertSupportBanner'
import { StorageProviderList } from './components/StorageProviderList'
import { filecoinFeatures } from './data/filecoinFeatures'

export default function StoreData() {
  return (
    <>
      <BackgroundImage
        overlayVariant="light"
        src={graphicsData.storeDataHero.data.src}
        blurDataURL={graphicsData.storeDataHero.data.blurDataURL}
      >
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
        <LogoSection
          title="Trusted by industry leaders"
          logos={trustedByLogos}
        />
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
