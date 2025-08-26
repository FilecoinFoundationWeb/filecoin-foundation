import Image from 'next/image'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'
import { FILECOIN_DOCS_URL } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { CardGridContainer } from '@/components/CardGridContainer'
import { ImageGrid } from '@/components/ImageGrid'
import { LinkCard } from '@/components/LinkCard'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { SectionImage } from '@/components/SectionImage'
import { SimpleCard } from '@/components/SimpleCard'
import { SimpleCardWithLogo } from '@/components/SimpleCardWithLogo'
import { SplitSectionContent } from '@/components/SplitSectionContent'

import { getInvolvedOptions } from '../community-hub/data/getInvolvedOptions'

import { BUILD_ON_FILECOIN_SEO } from './constants/seo'
import { builtOnFilecoin } from './data/builtOnFilecoin'
import { developerResources } from './data/developerResources'
import { filecoinFeatures } from './data/filecoinFeatures'
import { getInvolvedImages } from './data/getInvolvedImages'
import { tutorialsAndGuides } from './data/tutorialsAndGuides'
import { generateStructuredData } from './utils/generateStructuredData'

export default function BuildOnFilecoin() {
  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(BUILD_ON_FILECOIN_SEO)}
      />

      <Navigation backgroundVariant="dark" />
      <PageSection backgroundVariant="dark">
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

      <Section backgroundVariant="dark">
        <div className="h-[480px] overflow-x-clip overflow-y-visible">
          <graphicsData.buildOnFilecoinGradient.data className="relative -top-[100%] w-[200%] -translate-x-1/4 transform overflow-visible" />
        </div>
      </Section>

      <PageSection backgroundVariant="dark">
        <SectionContent title="Announcing Filecoin Onchain Cloud">
          <SplitSectionContent
            title="Verifiable onchain services with transparent storage, retrieval, and payments"
            description={[
              'Filecoin Onchain Cloud allows developers to build composable and verifiable services onchain where storage, pining, retrieval, and payments are transparent, programmable, and interoperable by default.',
              'This provides direct, trustless entry points to the Filecoin network so developers can connect data, services, and applications without running their own infrastructure.',
            ]}
            cta={[
              <Button href="#todo" variant="primary">
                Get started with Filecoin Onchain Cloud
              </Button>,
            ]}
          />
        </SectionContent>

        <div className="mt-40">
          <SectionImage {...graphicsData.buildOnFilecoinSection} />
        </div>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="A foundation for next-gen applications"
          description="From powering AI workflows to enabling cross-chain data bridges, Filecoin provides programmable, permissionless storage infrastructure."
        >
          <CardGrid as="ul" variant="smTwoLgThreeWider">
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

      <PageSection paddingVariant="topOnly" backgroundVariant="light">
        <SectionContent
          centerCTA
          title="Built on Filecoin"
          description="Discover tools and applications powered by Filecoin."
          cta={
            <Button href="https://fil.org/ecosystem-explorer" variant="primary">
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
                  badge={difficulty}
                  as="li"
                  title={title}
                  description={description}
                  cta={cta}
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
})
