import clsx from 'clsx'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'
import { FILECOIN_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { Heading } from '@/components/Heading'
import { LogoSection } from '@/components/LogoSection/LogoSection'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { backgroundVariants } from '@/components/Section'
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
import { storageProvidersLogos } from './data/storageProvidersLogos'
import { generateStructuredData } from './utils/generateStructuredData'

export default function ProvideStorage() {
  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(PROVIDE_STORAGE_SEO)}
      />

      <div
        className={clsx(
          'relative isolate overflow-x-clip',
          backgroundVariants.dark,
        )}
      >
        <Navigation backgroundVariant="transparentDark" />
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title="Power the world's largest decentralized storage network"
            description="Play a vital role in the future of decentralized storage. Become a Filecoin storage provider and contribute capacity to a global system preserving humanity’s most important information."
            cta={[
              <Button
                href={PATHS.PROVIDE_STORAGE_ONBOARDING.path}
                variant="primary"
              >
                Book a call with the onboarding team
              </Button>,
              <Button href={FILECOIN_URLS.github} variant="ghost">
                Explore documentation
              </Button>,
            ]}
          />
        </PageSection>

        <graphicsData.planetsShadow.data className="-z-10 w-[125vw] -translate-x-1/12 transform overflow-visible py-4 sm:mx-auto sm:w-4/5 sm:py-16 lg:absolute lg:top-[20%] lg:-right-1/5 lg:mx-0 lg:w-[760px] lg:py-0 2xl:w-[860px]" />
      </div>

      <PageSection paddingVariant="none" backgroundVariant="dark">
        <div className="py-24" />
        <LogoSection
          title="Join a global network of storage providers"
          tag="h2"
          logos={storageProvidersLogos}
        />
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Optimize your storage potential"
          description="The Filecoin network empowers storage providers through a sustainable, incentive-driven marketplace built for longevity and reliability."
        >
          <SectionImage {...graphicsData.provideStorageSection} />

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

      <PageSection backgroundVariant="light">
        <SectionContent
          title="What it takes to provide storage on Filecoin"
          description="Storage providers are foundational to the network's mission, ensuring information stays safe, retrievable, and verifiable."
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
                  <ul className="list-disc pl-4 text-xl text-[var(--color-paragraph-text)]">
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
                  <ul className="list-disc pl-4 text-xl text-[var(--color-paragraph-text)]">
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

      <PageSection backgroundVariant="dark">
        <SectionImage {...graphicsData.provideStorageSection2} />

        <SectionContent
          title="Empower a more open and resilient web"
          description="Contribute to a decentralized physical infrastructure network (DePIN), protect critical data without relying on centralized tech giants, and unlock new revenue streams — all while helping build a more open, resilient, and censorship-resistant internet."
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
