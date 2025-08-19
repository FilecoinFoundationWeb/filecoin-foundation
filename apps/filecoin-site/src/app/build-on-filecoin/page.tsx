import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'
import { FILECOIN_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { CardGridContainer } from '@/components/CardGridContainer'
import { LinkCard } from '@/components/LinkCard'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'
import { SectionImage } from '@/components/SectionImage'
import { SplitSectionContent } from '@/components/SplitSectionContent'

import { getInvolvedOptions } from '../community/data/getInvolvedOptions'

import { BUILD_ON_FILECOIN_SEO } from './constants/seo'
import { developerResources } from './data/developerResources'
import { filecoinFeatures } from './data/filecoinFeatures'
import { generateStructuredData } from './utils/generateStructuredData'

export default function BuildOnFilecoin() {
  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(BUILD_ON_FILECOIN_SEO)}
      />
      <BackgroundImage
        overlayVariant="light"
        src={graphicsData.buildOnFilecoinHero.data.src}
        blurDataURL={graphicsData.buildOnFilecoinHero.data.blurDataURL}
      >
        <Navigation backgroundVariant="transparentDark" />
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title="Build on Filecoin: open, scalable, verifiable storage"
            description="Scale storage like the cloud, own it like your code. Filecoin is open-source, self-hostable, and built on shared APIs running on permissionless infrastructure — giving developers performance, flexibility, and data sovereignty."
            cta={
              <Button href={FILECOIN_URLS.docs} variant="primary">
                Explore documentation
              </Button>
            }
          />
        </PageSection>
      </BackgroundImage>

      <PageSection backgroundVariant="dark">
        <SectionContent title="Announcing Filecoin Onchain Cloud">
          <SplitSectionContent
            title="Verifiable onchain services with transparent storage, retrieval, and payments."
            description={[
              'Filecoin Onchain Cloud allows developers to build composable and verifiable services onchain where storage, pinning, retrieval, and payments are transparent, programmable, and interoperable by default. ,',
              'This provides direct, trustless entry points to the Filecoin network so developers can connect data, services, and applications without running their own infrastructure.',
            ]}
            cta={[
              <Button href="#todo" variant="primary">
                Get started with Filecoin Onchain Cloud
              </Button>,
            ]}
          />
        </SectionContent>

        <SectionImage {...graphicsData.buildOnFilecoinSection} />
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="A foundation for next-gen applications"
          description="From powering AI workflows to enabling cross-chain data bridges, Filecoin provides programmable, permissionless storage infrastructure."
        >
          <CardGrid as="ul" variant="smTwoXlFourWide">
            {filecoinFeatures.map(({ title, description, icon }) => (
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
          title="Built on Filecoin"
          description="Discover tools and applications powered by Filecoin."
          cta={
            <Button href="https://fil.org/ecosystem-explorer" variant="primary">
              Visit ecosystem explorer
            </Button>
          }
        />
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          title="Tutorials and guides"
          description="Learn the basics to start building with Filecoin."
        />
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent title="Developer resources">
          <CardGridContainer width="6xl">
            <CardGrid as="ul" variant="mdTwoWide">
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
          <CardGridContainer width="6xl">
            <CardGrid as="ul" variant="mdTwoWide">
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
})
