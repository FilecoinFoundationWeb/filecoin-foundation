import { trustedByLogos } from '@/data/trustedByLogos'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { LogoSection } from '@/components/LogoSection/LogoSection'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'

import { ExpertSupportBanner } from './components/ExpertSupportBanner'
import { StorageCategoryFilter } from './components/StorageCategoryFilter'
import { StorageProviderCard } from './components/StorageProviderCard'
import { filecoinFeatures } from './data/filecoinFeatures'
import { storageCategories } from './data/storageCategories'
import { storageProviders } from './data/storageProviders'

export default function StoreData() {
  return (
    <>
      <PageSection backgroundVariant="dark">
        <PageHeader
          title="Decentralized, Secure Storage for Data that Matters "
          description="A dynamic and powerful distributed storage network for your data."
          cta={
            <Button href="" variant="primary">
              Explore storage solutions
            </Button>
          }
        />
      </PageSection>

      <PageSection backgroundVariant="dark">
        <LogoSection
          title="Trusted by industry leaders"
          logos={trustedByLogos}
        />
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Future-proof your data infrastructure"
          description="Filecoin is a powerful alternative to traditional cloud storage. Filecoin ensures your data always remains secure and verified on a daily basis – so that you can store your data with confidence."
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

        <ul
          role="tablist"
          className="mt-20 flex flex-wrap gap-4 lg:flex-nowrap"
        >
          {storageCategories.map(({ name, description }, index) => (
            <StorageCategoryFilter
              key={name}
              isActive={index === 0}
              name={name}
              description={description}
              count={(index + 1) * 10}
            />
          ))}
        </ul>

        <div className="mt-10">
          <CardGrid as="ul" variant="smTwoLgThree">
            {storageProviders.map(({ name }) => (
              <StorageProviderCard key={name} name={name} />
            ))}
          </CardGrid>
        </div>
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent
          title="Don't see your storage solution?"
          description="Showcase your Filecoin storage solution in this storage directory and reach thousands of data clients."
          cta={
            <Button href="" variant="primary">
              Submit your storage solution
            </Button>
          }
        />
      </PageSection>
    </>
  )
}
