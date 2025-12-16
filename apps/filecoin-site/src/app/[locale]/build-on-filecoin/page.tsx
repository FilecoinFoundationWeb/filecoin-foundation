import Image from 'next/image'

import { clsx } from 'clsx'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import { LinkCard } from '@filecoin-foundation/ui-filecoin/LinkCard'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { backgroundVariants } from '@filecoin-foundation/ui-filecoin/Section/Section'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'
import { SimpleCard } from '@filecoin-foundation/ui-filecoin/SimpleCard'

import { PATHS } from '@/constants/paths'
import {
  FILECOIN_DOCS_URL,
  FILECOIN_FOUNDATION_URLS,
} from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { CardGridContainer } from '@/components/CardGridContainer'
import { ImageGrid } from '@/components/ImageGrid'
import { Navigation } from '@/components/Navigation/Navigation'
import { SimpleCardWithLogo } from '@/components/SimpleCardWithLogo'
import { SplitSectionContent } from '@/components/SplitSectionContent'

import { getInvolvedOptions } from '../community-hub/data/getInvolvedOptions'

import { BUILD_ON_FILECOIN_SEO } from './constants/seo'
import { builtOnFilecoin } from './data/builtOnFilecoin'
import { developerResources } from './data/developerResources'
import { getInvolvedImages } from './data/getInvolvedImages'
import { tutorialsAndGuides } from './data/tutorialsAndGuides'
import { generateStructuredData } from './utils/generateStructuredData'
import { getBadgeVariant } from './utils/getBadgeVariant'

export default function BuildOnFilecoin() {
  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(BUILD_ON_FILECOIN_SEO)}
      />

      <div className={clsx('relative isolate', backgroundVariants.dark)}>
        <Navigation backgroundVariant="transparentDark" />
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title="Build on Filecoin: open, scalable, verifiable storage"
            description="Filecoin is a programmable, permissionless network from the ground up with cryptographic verification and global redundancy. Integrate decentralized storage that scales with your needs and safeguards data integrity at every layer."
            cta={
              <Button href={FILECOIN_DOCS_URL} variant="primary">
                Explore documentation
              </Button>
            }
          />
        </PageSection>

        <div className="absolute top-30 right-0 hidden h-[60vh] w-[50vw] lg:block">
          <Image
            fill
            priority
            src={graphicsData.cupolaEarthView.data}
            alt={graphicsData.cupolaEarthView.alt}
            className="-z-10 object-contain"
          />
        </div>

        <PageSection
          backgroundVariant="transparentDark"
          paddingVariant="topNone"
        >
          <SectionContent title="Announcing Filecoin Onchain Cloud">
            <SplitSectionContent
              title="Verifiable onchain services with transparent storage, retrieval, and payments"
              description={[
                'Filecoin Onchain Cloud allows developers to build composable and verifiable services onchain where storage, pining, retrieval, and payments are transparent, programmable, and interoperable by default.',
                'This provides direct, trustless entry points to the Filecoin network so developers can connect data, services, and applications without running their own infrastructure.',
              ]}
              cta={[
                <Button href="https://filecoin.cloud/" variant="primary">
                  Get started with Filecoin Onchain Cloud
                </Button>,
              ]}
            />
          </SectionContent>
        </PageSection>
      </div>

      <PageSection backgroundVariant="light" paddingVariant="bottomNone">
        <SectionContent
          centerCTA
          centerTitle
          title="Built on Filecoin"
          description="Discover tools and applications powered by Filecoin."
          cta={
            <Button
              href={FILECOIN_FOUNDATION_URLS.ecosystemExplorer.href}
              variant="primary"
            >
              Visit ecosystem explorer
            </Button>
          }
        >
          <CardGrid as="ul" variant="lgTwoWide">
            {builtOnFilecoin.map(({ title, description, cta, logo }) => (
              <SimpleCardWithLogo
                key={title}
                title={title}
                description={description}
                cta={cta}
                logo={logo}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          title="Tutorials and guides"
          description="Learn the basics to start building with Filecoin."
        >
          <CardGrid as="ul" variant="smTwoXlThreeWide">
            {tutorialsAndGuides.map(
              ({ title, description, cta, difficulty }) => (
                <SimpleCard
                  key={title}
                  as="li"
                  title={title}
                  description={description}
                  cta={cta}
                  badge={{
                    text: difficulty,
                    variant: getBadgeVariant(difficulty),
                  }}
                />
              ),
            )}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent title="Developer resources">
          <CardGridContainer width="6xl">
            <CardGrid as="ul" variant="mdTwo">
              {developerResources.map(({ title, description, href, icon }) => (
                <LinkCard
                  key={title}
                  as="li"
                  title={title}
                  headingTag="h3"
                  description={description}
                  href={href}
                  icon={{ component: icon }}
                />
              ))}
            </CardGrid>
          </CardGridContainer>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Get involved"
          description="Whether you're just getting started or looking to deepen your
          contributions, there are many ways to get involved."
        >
          <ImageGrid variant="oneMdThree">
            {getInvolvedImages.map(({ data, alt }) => (
              <Image key={alt} src={data} alt={alt} />
            ))}
          </ImageGrid>

          <CardGridContainer width="6xl">
            <CardGrid as="ul" variant="mdTwo">
              {getInvolvedOptions.map(({ title, description, href, icon }) => (
                <LinkCard
                  key={title}
                  as="li"
                  title={title}
                  headingTag="h3"
                  description={description}
                  href={href}
                  icon={{ component: icon, variant: 'filled' }}
                />
              ))}
            </CardGrid>
          </CardGridContainer>
        </SectionContent>
      </PageSection>
    </>
  )
}

export const metadata = createMetadata({
  title: { absolute: BUILD_ON_FILECOIN_SEO.title },
  description: BUILD_ON_FILECOIN_SEO.description,
  path: PATHS.BUILD_ON_FILECOIN.path,
  image: graphicsData.spiralGalaxyStarsSpace.data.src,
})
