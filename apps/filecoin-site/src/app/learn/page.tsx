import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'

import { PATHS } from '@/constants/paths'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'
import { SectionDivider } from '@/components/SectionDivider'
import { SimpleCard } from '@/components/SimpleCard'
import { SplitSectionContent } from '@/components/SplitSectionContent'

import { ComparisonTable } from './components/ComparisonTable'
import { ecosystemPartners } from './data/ecosystemPartners'
import { filecoinParticipants } from './data/filecoinParticipants'
import { filecoinStackFeatures } from './data/filecoinStackFeatures'
import { filecoinStorageFlow } from './data/filecoinStorageFlow'
import { filecoinValues } from './data/filecoinValues'

export default function Learn() {
  return (
    <>
      <PageSection backgroundVariant="dark">
        <PageHeader
          title="A decentralized storage network for humanity's data"
          description="Filecoin is a protocol, economy, and community powering the world's
          largest open storage network. It enables anyone to store, retrieve,
          and build on verifiable data — securely and at scale."
          cta={
            <Button href="" variant="primary">
              Explore documentation
            </Button>
          }
        />
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="An open, resilient, and equitable foundation for the internet"
          description="Filecoin's mission is to create a more open, resilient, and equitable foundation for the internet. We believe in:"
        >
          <CardGrid as="ul" cols="mdThree">
            {filecoinValues.map(({ title, description, icon }) => (
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

      <PageSection backgroundVariant="gray">
        <SectionContent title="Breaking free from centralized control">
          <SplitSectionContent
            title="Why decentralize storage?"
            description={[
              "Today, most of the world's data lives in the hands of a few centralized cloud providers. This creates risks — from single points of failure and rising costs to censorship and opaque control.",
              'Filecoin turns this model on its head. By creating a global, trustless marketplace for storage, it gives individuals, developers, and organizations control over their data and infrastructure. Data becomes verifiable, programmable, and interoperable across use cases, industries, and chains.',
            ]}
            cta={
              <Button href="" variant="primary">
                Store on Filecoin
              </Button>
            }
          />
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          centerCTA
          title="From storage request to verified data"
          description="Here's how Filecoin works and who makes it happen."
          cta={
            <Button href="" variant="primary">
              Find storage solutions
            </Button>
          }
        >
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-6">
              <div>
                <Heading tag="h3" variant="3xl-medium">
                  How Filecoin works
                </Heading>
                <DescriptionText>
                  Imagine you have a file that you want to store. Here's how
                  Filecoin makes that possible:
                </DescriptionText>
              </div>

              <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {filecoinStorageFlow.map(({ description }, index) => (
                  <li key={description} className="flex flex-col gap-3">
                    <span className="text-brand-500 text-4xl font-medium">
                      {`0${index + 1}.`}
                    </span>
                    <DescriptionText>{description}</DescriptionText>
                  </li>
                ))}
              </ul>
            </div>

            <SectionDivider variant="light" />

            <div>
              <div>
                <Heading tag="h3" variant="3xl-medium">
                  Who's involved?
                </Heading>

                <DescriptionText>
                  Storing a file on Filecoin involves several participants
                  working together.
                </DescriptionText>

                <CardGrid as="ul" cols="mdThree">
                  {filecoinParticipants.map(({ title, description, cta }) => (
                    <SimpleCard
                      key={title}
                      hasTopBorder
                      title={title}
                      description={description}
                      cta={cta}
                    />
                  ))}
                </CardGrid>
              </div>
            </div>
          </div>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          centerCTA
          title="See how Filecoin storage stacks up"
          description="Compare decentralized object storage against the traditional cloud storage."
          cta={
            <Button href={PATHS.STORE_DATA.path} variant="primary">
              Store on Filecoin
            </Button>
          }
        >
          <ComparisonTable />
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          title="A robust foundation for humanity's information"
          description="Filecoin provides the foundation for critically important public data, such as open access scientific data, creative commons media, historical archives, preservation, and more."
        >
          <CardGrid as="ul" cols="mdTwo">
            {ecosystemPartners.map(({ title, description, cta }) => (
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

      <PageSection backgroundVariant="gray">
        <SectionContent
          title="What powers the Filecoin network"
          description="Filecoin is more than storage. It's a full stack of innovation."
        >
          <CardGrid as="ul" cols="mdThree">
            {filecoinStackFeatures.map(({ title, description, cta }) => (
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
          title="Go further with Filecoin"
          description="Whether you're a developer, a storage provider, or just curious, the Filecoin documentation has everything you need — from quick starts to in-depth guides."
          cta={
            <Button href="" variant="primary">
              Explore documentation
            </Button>
          }
        />
      </PageSection>
    </>
  )
}
