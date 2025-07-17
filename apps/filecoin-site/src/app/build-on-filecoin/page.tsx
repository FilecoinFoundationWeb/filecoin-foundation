import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { CardGridContainer } from '@/components/CardGridContainer'
import { Heading } from '@/components/Heading'
import { LinkCard } from '@/components/LinkCard'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'
import { SectionDivider } from '@/components/SectionDivider'
import { SimpleCard } from '@/components/SimpleCard'

import { blockExplorers } from './data/blockExplorers'
import { communityConnections } from './data/communityConnections'
import { communityHubs } from './data/communityHubs'
import { developerResources } from './data/developerResources'
import { filecoinFeatures } from './data/filecoinFeatures'
import { filecoinTools } from './data/filecoinTools'
import { getInvolvedOptions } from './data/getInvolvedOptions'

export default function BuildOnFilecoin() {
  return (
    <>
      <PageSection backgroundVariant="dark">
        <PageHeader
          title="Build on Filecoin with programmable storage"
          description="Build on Filecoin — the programmable, permissionless storage network
          with cryptographic verification and global redundancy by design.
          Integrate storage that safeguards data integrity at every layer and
          scales with your application's needs."
          cta={
            <Button href="" variant="primary">
              Explore documentation
            </Button>
          }
        />
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Beyond storage, a foundation for next-gen applications"
          description="          From powering AI workflows to enabling cross-chain data bridges,
          Filecoin provides programmable, permissionless storage infrastructure."
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
          <div className="space-y-30">
            <div className="flex flex-col gap-20">
              <Heading tag="h3" variant="3xl-medium">
                Getting stared
              </Heading>

              <CardGrid as="ul" variant="smTwoLgThree">
                {filecoinTools.map(
                  ({ title, description, difficulty, cta }, index) => (
                    <SimpleCard
                      key={title}
                      title={title}
                      description={description}
                      cta={cta}
                      gradientHeaderAndBadge={{
                        gradientIndex: index,
                        badgeText: difficulty,
                      }}
                    />
                  ),
                )}
              </CardGrid>
            </div>

            <SectionDivider />

            <div className="flex flex-col gap-20">
              <Heading tag="h3" variant="3xl-medium">
                Developer resources
              </Heading>

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
                        icon={icon}
                      />
                    ),
                  )}
                </CardGrid>
              </CardGridContainer>
            </div>

            <SectionDivider />

            <div className="flex flex-col gap-20">
              <div>
                <Heading tag="h3" variant="3xl-medium">
                  Block explorers
                </Heading>
                <DescriptionText>
                  Track transactions, contracts, and onchain activity with
                  Filecoin-compatible block explorers.
                </DescriptionText>
              </div>

              <CardGrid as="ul" variant="smTwoLgThree">
                {blockExplorers.map(({ title, description, cta }) => (
                  <SimpleCard
                    key={title}
                    title={title}
                    description={description}
                    cta={cta}
                  />
                ))}
              </CardGrid>
            </div>
          </div>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Explore the ecosystem"
          description="Discover the diverse landscape of projects in the Filecoin ecosystem."
          cta={
            <Button href="https://fil.org/ecosystem-explorer" variant="primary">
              Visit the ecosystem explorer
            </Button>
          }
        />
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
                icon={icon}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          title="Community hubs"
          description="            Filecoin is open-source and community-driven. Explore groups
            advancing the protocol and building the tools that power its
            ecosystem."
        >
          <CardGrid as="ul" variant="lgTwo">
            {communityHubs.map(({ title, description, cta }) => (
              <SimpleCard
                key={title}
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
                  icon={icon}
                />
              ))}
            </CardGrid>
          </CardGridContainer>
        </SectionContent>
      </PageSection>
    </>
  )
}
