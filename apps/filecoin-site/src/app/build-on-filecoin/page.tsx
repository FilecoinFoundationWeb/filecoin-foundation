import { FILECOIN_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { CardGridContainer } from '@/components/CardGridContainer'
import { LinkCard } from '@/components/LinkCard'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'
import { SectionDivider } from '@/components/SectionDivider'
import { SectionImage } from '@/components/SectionImage'
import { SectionSubContent } from '@/components/SectionSubContent'
import { SimpleCard } from '@/components/SimpleCard'
import { SimpleCardWithGradient } from '@/components/SimpleCardWithGradient'
import { SimpleCardWithLogo } from '@/components/SimpleCardWithLogo'

import { blockExplorers } from './data/blockExplorers'
import { communityConnections } from './data/communityConnections'
import { developerResources } from './data/developerResources'
import { ecosystemResources } from './data/ecosystemResources'
import { filecoinFeatures } from './data/filecoinFeatures'
import { filecoinTools } from './data/filecoinTools'
import { getInvolvedOptions } from './data/getInvolvedOptions'

export default function BuildOnFilecoin() {
  return (
    <>
      <BackgroundImage
        overlayVariant="light"
        src={graphicsData.buildOnFilecoinHero.data.src}
        blurDataURL={graphicsData.buildOnFilecoinHero.data.blurDataURL}
      >
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title="Build on Filecoin: open, scalable, verifiable storage"
            description="Filecoin is a programmable, permissionless storage network with cryptographic verification and global redundancy by design. Integrate storage that safeguards data integrity at every layer and scales with your application's needs."
            cta={
              <Button href={FILECOIN_URLS.docs} variant="primary">
                Explore documentation
              </Button>
            }
          />
        </PageSection>
      </BackgroundImage>

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
          title="Useful tools for builders"
          description="Accelerate development with Filecoin's ecosystem tools."
        >
          <SectionSubContent headingTag="h3" title="Getting started">
            <CardGrid as="ul" variant="smTwoLgThree">
              {filecoinTools.map(
                ({ title, description, difficulty, cta }, index) => (
                  <SimpleCardWithGradient
                    key={title}
                    title={title}
                    description={description}
                    cta={cta}
                    badge={difficulty}
                    gradientIndex={index}
                  />
                ),
              )}
            </CardGrid>
          </SectionSubContent>

          <SectionDivider />

          <SectionSubContent headingTag="h3" title="Developer resources">
            <CardGridContainer width="6xl">
              <CardGrid as="ul" variant="mdTwo">
                {developerResources.map(
                  ({ title, description, href, icon }) => (
                    <LinkCard
                      key={title}
                      as="li"
                      backgroundVariant="light"
                      title={title}
                      description={description}
                      href={href}
                      icon={{ component: icon }}
                    />
                  ),
                )}
              </CardGrid>
            </CardGridContainer>
          </SectionSubContent>

          <SectionDivider />

          <SectionSubContent
            centerCTA
            headingTag="h3"
            title="Block explorers"
            description="Track transactions, contracts, and onchain activity with Filecoin-compatible block explorers."
            cta={
              <Button href="#todo" variant="primary">
                Submit block explorer
              </Button>
            }
          >
            <>
              <CardGrid as="ul" variant="smTwoLgThree">
                {blockExplorers.map(({ title, description, cta }) => (
                  <SimpleCard
                    key={title}
                    as="li"
                    title={title}
                    description={description}
                    cta={cta}
                  />
                ))}
              </CardGrid>
              <p className="-mb-12 text-center text-lg text-zinc-600">
                Have a block explorer to feature?
              </p>
            </>
          </SectionSubContent>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Explore the ecosystem"
          description="Visit Filecoin Foundation's Ecosystem Explorer to discover Filecoin projects, get inspired by what others are building, and find your place in the Filecoin ecosystem."
          cta={
            <Button href="https://fil.org/ecosystem-explorer" variant="primary">
              Visit ecosystem explorer
            </Button>
          }
        />

        <SectionImage {...graphicsData.buildOnFilecoinSection} />
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent
          title="Connect with the community"
          description="Connect with a vibrant network of developers building on Filecoin.
          Connect, collaborate, and grow with the ecosystem."
        >
          <CardGrid as="ul" variant="smTwoLgThreeTight">
            {communityConnections.map(({ title, description, href, icon }) => (
              <LinkCard
                key={title}
                as="li"
                backgroundVariant="light"
                title={title}
                description={description}
                href={href}
                icon={{ component: icon }}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          title="Ecosystem resources"
          description="Filecoin is open-source and community-driven. Explore groups advancing the protocol and building the tools that power its ecosystem."
        >
          <CardGrid as="ul" variant="lgTwo">
            {ecosystemResources.map(({ title, description, cta, logo }) => (
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

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Get involved"
          description="Whether you're just getting started or looking to deepen your
          contributions, there are many ways to get involved."
        >
          <CardGridContainer width="6xl">
            <CardGrid as="ul" variant="mdTwo">
              {getInvolvedOptions.map(({ title, description, href, icon }) => (
                <LinkCard
                  key={title}
                  as="li"
                  backgroundVariant="dark"
                  title={title}
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
