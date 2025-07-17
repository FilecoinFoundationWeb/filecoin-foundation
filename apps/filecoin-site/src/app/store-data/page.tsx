import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { Heading } from '@/components/Heading'
import { LogoSection } from '@/components/LogoSection/LogoSection'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'

import { filecoinFeatures } from './data/filecoinFeatures'
import { storageCategories } from './data/storageCategories'
import { trustedByLogos } from './data/trustedByLogos'

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
        <div className="flex flex-col items-center gap-20 px-15">
          <Heading tag="h2" variant="xl-regular">
            Trusted by industry leaders
          </Heading>

          <LogoSection
            title="Trusted by industry leaders"
            logos={trustedByLogos}
          />
        </div>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Future-proof your data infrastructure"
          description="Filecoin is a powerful alternative to traditional cloud storage. Filecoin ensures your data always remains secure and verified on a daily basis – so that you can store your data with confidence."
        >
          <CardGrid as="ul" variant="col4-one">
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

        <div className="flex items-baseline gap-6 bg-zinc-100 px-9 py-6">
          <p>Not sure what storage solution to choose?</p>

          <Button href="" variant="primary">
            Talk to an expert
          </Button>
        </div>

        <div className="flex gap-4">
          {storageCategories.map(({ name, description }) => (
            <div key={name} className="flex flex-col gap-3">
              <span className="font-medium text-zinc-600">{name}</span>
              <span className="text-sm text-zinc-600">{description}</span>
            </div>
          ))}
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
