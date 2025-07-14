import { CardGrid } from '@filecoin-foundation/ui/CardGrid'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'

import { dataCenterRequirements } from './data/dataCenterRequirements'

export default function OfferStorage() {
  return (
    <>
      <PageSection backgroundVariant="dark">
        <PageHeader
          title="Join the world's largest decentralized storage network"
          description="Become a Filecoin storage provider and contribute capacity to a global system preserving humanity's most important data. If you've got the infrastructure, you can become a core part of it."
          cta={
            <Button href="" variant="primaryDark">
              Check requirements
            </Button>
          }
        />
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="What you need to offer storage on Filecoin"
          description="To offer storage on Filecoin you’ll need enterprise-grade infrastructure and deep technical expertise to get started."
        >
          <CardGrid as="ul" cols="mdThree">
            {dataCenterRequirements.map(({ title, description, icon }) => (
              <Card
                key={title}
                as="li"
                backgroundVariant="dark"
                title={title}
                description={description}
                icon={{ component: icon, position: 'top' }}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent title="Return on investment">TODO</SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          title="Earn more rewards for more storage"
          description="Storing more files is directly related to winning more block rewards. The more storage you add, the more Filecoin you'll earn."
        >
          TODO
        </SectionContent>
      </PageSection>
      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Build an open, resilient, and trustworthy web"
          description="Join the world's largest decentralized storage network — empowering independent operators to store and protect critical data without relying on centralized tech giants. Your infrastructure helps power a more open, resilient, and censorship-resistant internet."
          cta={
            <Button href="" variant="primaryDark">
              Book a call with our onboarding team
            </Button>
          }
        />
      </PageSection>
    </>
  )
}
