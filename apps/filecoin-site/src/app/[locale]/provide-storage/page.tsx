import Image from 'next/image'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { Card } from '@filecoin-foundation/ui-filecoin/Card'
import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import { LogoSection } from '@filecoin-foundation/ui-filecoin/LogoSection/LogoSection'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'

import { PATHS } from '@/constants/paths'
import { FILECOIN_URLS, FILECOIN_DOCS_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { GradientOverlay } from '@/components/GradientOverlay'
import { Navigation } from '@/components/Navigation/Navigation'

import { PROVIDE_STORAGE_SEO } from './constants/seo'
import { gettingStartedWithPDP } from './data/gettingStartedWithPDP'
import { scalingOperations } from './data/scalingOperations'
import { storageProvidersLogos } from './data/storageProvidersLogos'
import { generateStructuredData } from './utils/generateStructuredData'

export default function ProvideStorage() {
  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(PROVIDE_STORAGE_SEO)}
      />

      <Navigation backgroundVariant="dark" />

      <div className="relative isolate">
        <Image
          priority
          src={graphicsData.colorfulNebula.data}
          alt={graphicsData.colorfulNebula.alt}
          className="absolute top-0 left-0 -z-20 h-full w-[200vw] object-cover object-top lg:w-full"
        />
        <GradientOverlay variant="dual" />

        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title="Power the world's largest decentralized storage network"
            description="Play a vital role in the future of decentralized storage. Become a Filecoin storage provider and contribute capacity to a global system preserving humanity’s most important information."
            cta={[
              <Button href={FILECOIN_URLS.github.href} variant="primary">
                Explore documentation
              </Button>,
              <Button
                href={PATHS.PROVIDE_STORAGE_ONBOARDING.path}
                variant="ghost"
              >
                Book a call with the onboarding team
              </Button>,
            ]}
          />

          <div className="mt-40">
            <LogoSection
              headingTag="h2"
              title="Join a global network of storage providers"
              logos={storageProvidersLogos}
            />
          </div>
        </PageSection>
      </div>

      <PageSection backgroundVariant="dark" paddingVariant="topCompact">
        <SectionContent
          centerCTA
          headingTag="h2"
          title="Getting started with PDP storage"
          description="Running a warm storage node using Proof of Data Possession (PDP) is the easiest way to begin offering Filecoin storage — no expensive hardware or long-term collateral required."
          cta={[
            <Button
              href={FILECOIN_DOCS_URLS.installAndRunPDP}
              variant="primary"
            >
              Become a PDP storage provider
            </Button>,

            <Button href={FILECOIN_DOCS_URLS.pdp} variant="ghost">
              Learn more about PDP Storage
            </Button>,
          ]}
        >
          <CardGrid as="ul" variant="smTwoLgThreeWider">
            {gettingStartedWithPDP.map(({ title, description, icon }) => (
              <Card
                key={title}
                as="li"
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
          centerCTA
          headingTag="h2"
          title="Scaling your storage operations"
          description="If you're already running a warm storage node and want to expand, Filecoin supports enterprise-grade proofs like Proof of Replication (PoRep) and Proof of Spacetime (PoSt) — enabling high-capacity, production-scale storage operations. Scaling involves:"
          cta={[
            <Button href={FILECOIN_DOCS_URLS.lotusComponents} variant="primary">
              Learn more about the requirements
            </Button>,
          ]}
        >
          <CardGrid as="ul" variant="smTwoXlFourWider">
            {scalingOperations.map(({ title, description, icon }) => (
              <Card
                key={title}
                as="li"
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          headingTag="h2"
          title="Need help choosing the right architecture?"
          description="Our team can guide you through PoRep requirements, recommended hardware, sealing pipelines, and operational best practices."
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
  image: graphicsData.filecoinStorageDevice.data.src,
})
