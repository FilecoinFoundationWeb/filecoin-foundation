import { CardGrid } from '@filecoin-foundation/ui/CardGrid'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
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
          title="Secure, decentralized storage for data that matters"
          description="A powerful and dynamic distributed cloud storage network for your data."
          cta={
            <Button href="" variant="primaryDark">
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
          title="Decentralized, secure, and verifiable by design"
          description="Filecoin offers a powerful alternative to traditional cloud storage —
          combining a distributed network architecture with built-in
          cryptographic guarantees. Your data stays available, authentic, and
          tamper-proof over time."
        >
          <CardGrid as="ul" cols="mdThree">
            {filecoinFeatures.map(({ title, description, icon }) => (
              <Card
                key={title}
                as="li"
                backgroundVariant="dark"
                title={title}
                description={description}
                icon={{
                  component: icon,
                  position: 'top',
                }}
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
          title="Don't see your project?"
          description="Showcase your Filecoin storage solution in this directory and reach
          thousands of data owners."
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
