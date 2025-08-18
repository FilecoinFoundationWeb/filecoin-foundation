import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { Heading } from '@/components/Heading'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'
import { SectionDivider } from '@/components/SectionDivider'
import { SectionImage } from '@/components/SectionImage'
import { SectionSubContent } from '@/components/SectionSubContent'
import { SimpleCard } from '@/components/SimpleCard'

import { PROVIDE_STORAGE_SEO } from './constants/seo'
import { coreInfrastructureSpecs } from './data/coreInfrastructureSpecs'
import { dataCenterRequirements } from './data/dataCenterRequirements'
import { filecoinEarningsInsights } from './data/filecoinEarningsInsights'
import { specializedInfrastructureSpecs } from './data/specializedInfrastructureSpecs'
import { generateStructuredData } from './utils/generateStructuredData'

export default function ProvideStorage() {
  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(PROVIDE_STORAGE_SEO)}
      />
      <BackgroundImage
        overlayVariant="dark"
        src={graphicsData.provideStorageHero.data.src}
        blurDataURL={graphicsData.provideStorageHero.data.blurDataURL}
      >
        <Navigation backgroundVariant="transparentDark" />
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title="Power a more open and resilient web"
            description="Play a vital role in the future of decentralized storage. Become a Filecoin storage provider and contribute capacity to a global system preserving humanity's most important information."
            cta={
              <Button href="#todo" variant="primary">
                Book a call with the onboarding team
              </Button>
            }
            // cta={
            //   <Button
            //     href={`${FILECOIN_URLS.docs}storage-providers/basics`}
            //     variant="primary"
            //   >
            //     Explore documentation
            //   </Button>
            // }
          />
        </PageSection>
      </BackgroundImage>

      <PageSection backgroundVariant="light">
        <SectionContent
          title="What it takes to provide storage on Filecoin"
          description="Filecoin is open and permissionless, empowering anyone with the right infrastructure and expertise to participate. Storage providers are foundational to the network's mission, ensuring information stays safe, retrievable, and verifiable."
        >
          <SectionSubContent
            headingTag="h3"
            title="Reliable data center environment"
            description="Run your systems in a secure, high-uptime setting with:"
          >
            <CardGrid as="ul" variant="smTwoLgThreeWider">
              {dataCenterRequirements.map(({ title, description, icon }) => (
                <Card
                  key={title}
                  as="li"
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
                  <Heading tag="h4" variant="card-heading">
                    {title}
                  </Heading>
                  <ul className="list-disc pl-4 text-xl text-zinc-600">
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
                  <Heading tag="h4" variant="card-heading">
                    {title}
                  </Heading>
                  <ul className="list-disc pl-4 text-xl text-zinc-600">
                    {list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </CardGrid>
          </SectionSubContent>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          title="Optimize your storage potential"
          description="The Filecoin Network rewards storage providers through a self-sustaining marketplace designed for long-term commitment and resilience."
        >
          <CardGrid as="ul" variant="lgThree">
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
        <SectionImage {...graphicsData.provideStorageSection} />

        <SectionContent
          title="Empower a more open and resilient web"
          description="As a Filecoin storage provider, you'll empower independent infrastructure, protect critical data without relying on centralized tech giants, and unlock new revenue streams—all while helping build a more open, resilient, and censorship-resistant internet."
          cta={
            <Button
              href={PATHS.PROVIDE_STORAGE_ONBOARDING.path}
              variant="primary"
            >
              Book a call with the onboarding team
            </Button>
          }
        />
      </PageSection>
    </>
  )
}

export const metadata = createMetadata({
  title: { absolute: PROVIDE_STORAGE_SEO.title },
  description: PROVIDE_STORAGE_SEO.description,
  path: PATHS.PROVIDE_STORAGE.path,
})
