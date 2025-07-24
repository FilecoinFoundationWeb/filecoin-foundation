import { graphicsData } from '@/data/graphicsData'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'
import { SectionDivider } from '@/components/SectionDivider'
import { SectionImage } from '@/components/SectionImage'
import { SectionSubContent } from '@/components/SectionSubContent'
import { SimpleCard } from '@/components/SimpleCard'

import { coreInfrastructureSpecs } from './data/coreInfrastructureSpecs'
import { dataCenterRequirements } from './data/dataCenterRequirements'
import { filecoinEarningsInsights } from './data/filecoinEarningsInsights'
import { specializedInfrastructureSpecs } from './data/specializedInfrastructureSpecs'

export default function OfferStorage() {
  return (
    <>
      <BackgroundImage
        overlayVariant="light"
        src={graphicsData.offerStorageHero.data.src}
        blurDataURL={graphicsData.offerStorageHero.data.blurDataURL}
      >
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title="Power the world's largest decentralized storage network"
            description="Play a vital role in the future of decentralized storage. Become a Filecoin storage provider and contribute capacity to a global system preserving humanity's most important information."
            cta={
              <Button href="" variant="primary">
                Check requirements
              </Button>
            }
          />
        </PageSection>
      </BackgroundImage>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="What it takes to offer storage on Filecoin"
          description="Filecoin is open and permissionless, empowering anyone with the right infrastructure and expertise to participate. Storage providers are foundational to the network's mission, ensuring information stays safe, retrievable, and verifiable."
        >
          <SectionSubContent
            headingTag="h3"
            title="Reliable data center environment"
            description="Filecoin is open and permissionless, empowering anyone with the right infrastructure and expertise to participate. Storage providers are foundational to the network's mission, ensuring information stays safe, retrievable, and verifiable."
          >
            <CardGrid as="ul" variant="smTwoLgThreeWider">
              {dataCenterRequirements.map(({ title, description, icon }) => (
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
          </SectionSubContent>

          <SectionDivider />

          <SectionSubContent
            headingTag="h3"
            title="Core infrastructure setup"
            description="Ensure your system can deliver high-performance, reliable storage."
          >
            <CardGrid as="ul" variant="lgTwoWide">
              {coreInfrastructureSpecs.map(({ title, list }) => (
                <li key={title} className="space-y-3">
                  <Heading tag="h4" variant="xl-medium">
                    {title}
                  </Heading>
                  <ul className="list-disc pl-4 text-xl text-zinc-400">
                    {list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </CardGrid>
          </SectionSubContent>

          <SectionDivider />

          <SectionSubContent
            headingTag="h3"
            title="Specialized hardware"
            description="Filecoin's sealing and storage system require purpose-build hardware."
          >
            <CardGrid as="ul" variant="lgTwoWide">
              {specializedInfrastructureSpecs.map(({ title, list }) => (
                <li key={title} className="space-y-3">
                  <Heading tag="h4" variant="xl-medium">
                    {title}
                  </Heading>
                  <ul className="list-disc pl-4 text-xl text-zinc-400">
                    {list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </CardGrid>

            <SectionImage {...graphicsData.offerStorageSection} />
          </SectionSubContent>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent
          title="Begin your storage provider journey"
          description="If you already operate enterprise-grade infrastructure—or plan to—Filecoin offers a scalable path to meaningful, global impact."
          cta={
            <Button href="" variant="primary">
              Book a call with storage providers' onboarding team
            </Button>
          }
        />
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          title="Create long-term value"
          description="The Filecoin Network rewards storage providers through a self-sustaining marketplace designed for long-term commitment and resilience."
        >
          <CardGrid as="ul" variant="smTwoLgThreeWider">
            {filecoinEarningsInsights.map(({ title, description, cta }) => (
              <SimpleCard
                key={title}
                as="li"
                border="only-top"
                title={title}
                description={description}
                cta={cta}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Empower a more open and resilient web"
          description="As a Filecoin storage provider, you'll empower independent infrastructure, protect critical data without relying on centralized tech giants, and unlock new revenue streams—all while helping build a more open, resilient, and censorship-resistant internet."
          cta={
            <Button href="" variant="primary">
              Book a call with storage providers' onboarding team
            </Button>
          }
        />
      </PageSection>
    </>
  )
}
