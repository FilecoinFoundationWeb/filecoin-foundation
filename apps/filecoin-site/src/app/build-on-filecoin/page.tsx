import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionDivider } from '@/components/SectionDivider'

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
            <Button href="" variant="primaryDark">
              Explore documentation
            </Button>
          }
        />
      </PageSection>

      <PageSection backgroundVariant="dark">
        <Heading tag="h2" variant="6xl-medium">
          Beyond storage, a foundation for next-gen applications
        </Heading>

        <DescriptionText>
          From powering AI workflows to enabling cross-chain data bridges,
          Filecoin provides programmable, permissionless storage infrastructure.
        </DescriptionText>

        <CardGrid as="ul" cols="mdThree">
          {filecoinFeatures.map(({ title, description, icon }) => (
            <Card
              key={title}
              as="li"
              backgroundVariant="dark"
              title={title}
              description={description}
              icon={{
                component: icon,
                position: 'top',
              }}
            />
          ))}
        </CardGrid>
      </PageSection>
      <PageSection backgroundVariant="light">
        <Heading tag="h2" variant="6xl-medium">
          Useful tools for builders
        </Heading>

        <DescriptionText>
          Accelerate development with Filecoin's ecosystem tools.
        </DescriptionText>

        <div className="space-y-30">
          <div className="flex flex-col gap-20">
            <Heading tag="h3" variant="3xl-medium">
              Getting stared
            </Heading>

            <CardGrid as="ul" cols="mdThree">
              {filecoinTools.map(({ title, description, difficulty, href }) => (
                <li key={title} className="flex flex-col gap-6">
                  <span>{difficulty}</span>
                  <div className="space-y-3">
                    <Heading tag="h4" variant="xl-medium">
                      {title}
                    </Heading>
                    <p>{description}</p>
                  </div>
                  <a href={href}>Learn more</a>
                </li>
              ))}
            </CardGrid>
          </div>

          <SectionDivider variant="dark" />

          <div className="flex flex-col gap-20">
            <Heading tag="h3" variant="3xl-medium">
              Developer resources
            </Heading>

            <CardGrid as="ul" cols="mdTwo">
              {developerResources.map(({ title, description, icon }) => (
                <Card
                  key={title}
                  as="li"
                  backgroundVariant="light"
                  title={title}
                  description={description}
                  icon={{
                    component: icon,
                    position: 'side',
                  }}
                />
              ))}
            </CardGrid>
          </div>

          <SectionDivider variant="dark" />

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

            <CardGrid as="ul" cols="mdThree">
              {blockExplorers.map(({ name, description, href }) => (
                <li key={name} className="flex flex-col gap-6">
                  <div className="space-y-3">
                    <Heading tag="h4" variant="xl-medium">
                      {name}
                    </Heading>
                    <p>{description}</p>
                  </div>
                  <a href={href}>Visit {name}</a>
                </li>
              ))}
            </CardGrid>
          </div>
        </div>
      </PageSection>
      <PageSection backgroundVariant="dark">
        <Heading tag="h2" variant="6xl-medium">
          Explore the ecosystem
        </Heading>

        <DescriptionText>
          Visit the Ecosystem Explorer to discover Filecoin projects, get
          inspired by what others are building, and find your place in the
          Filecoin ecosystem.
        </DescriptionText>

        <Button href="https://fil.org/ecosystem-explorer" variant="primaryDark">
          Visit the ecosystem explorer
        </Button>
      </PageSection>
      <PageSection backgroundVariant="gray">
        <Heading tag="h2" variant="6xl-medium">
          Connect with the community
        </Heading>

        <DescriptionText>
          Connect with a vibrant network of developers building on Filecoin.
          Connect, collaborate, and grow with the ecosystem.
        </DescriptionText>

        <CardGrid as="ul" cols="mdThree">
          {communityConnections.map(({ title, description, icon }) => (
            <Card
              key={title}
              as="li"
              backgroundVariant="light"
              title={title}
              description={description}
              icon={{ component: icon, position: 'side' }}
            />
          ))}
        </CardGrid>
      </PageSection>
      <PageSection backgroundVariant="light">
        <Heading tag="h2" variant="6xl-medium">
          Community hubs
        </Heading>

        <DescriptionText>
          Filecoin is open-source and community-driven. Explore groups advancing
          the protocol and building the tools that power its ecosystem.
        </DescriptionText>

        <CardGrid as="ul" cols="mdTwo">
          {communityHubs.map(({ name, description, href }) => (
            <li key={name} className="flex flex-col gap-6">
              <div className="space-y-3">
                <Heading tag="h4" variant="xl-medium">
                  {name}
                </Heading>
                <p className="text-zinc-600">{description}</p>
              </div>
              <a className="font-semibold text-zinc-600" href={href}>
                Visit {name}
              </a>
            </li>
          ))}
        </CardGrid>
      </PageSection>
      <PageSection backgroundVariant="dark">
        <Heading tag="h2" variant="6xl-medium">
          Get involved
        </Heading>

        <DescriptionText>
          Whether you're just getting started or looking to deepen your
          contributions, there are many ways to get involved.
        </DescriptionText>

        <CardGrid as="ul" cols="mdTwo">
          {getInvolvedOptions.map(({ title, description, icon }) => (
            <Card
              key={title}
              as="li"
              backgroundVariant="dark"
              title={title}
              description={description}
              icon={{ component: icon, position: 'side' }}
            />
          ))}
        </CardGrid>
      </PageSection>
    </>
  )
}
