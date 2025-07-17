import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'
import { SectionDivider } from '@/components/SectionDivider'
import { SectionImage } from '@/components/SectionImage'
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
      <BackgroundImage
        overlayVariant="light"
        src={graphicsData.learnHero.data.src}
      >
        <PageSection backgroundVariant="transparentDark">
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
      </BackgroundImage>

      <PageSection backgroundVariant="light">
        <SectionContent
          title="A robust foundation for humanity's information"
          description="Filecoin provides the foundation for critically important public data, such as open access scientific data, creative commons media, historical archives, preservation, and more."
        >
          <SplitSectionContent
            title="A decentralized, efficient, and robust protocol."
            description={[
              "Today, a handful of corporations control most of the world's data, creating centralized gatekeepers that limit transparency and introduce single points of failure.",
              'Filecoin offers a fundamentally different approach to data storage by distributing data across a decentralized, global network, ensuring greater security and resilience.',
              'Petabytes of data, from cultural archives to scientific research, are stored on the network, protected by cryptographic proofs and distributed across nodes worldwide. The decentralized model empowers users with true control over their information, building a more open and resilient foundation for the web.',
            ]}
          />

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

      <PageSection backgroundVariant="dark">
        <SectionContent title="Building a decentralized future">
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

      <PageSection backgroundVariant="light">
        <SectionContent
          centerCTA
          title="How Filecoin works"
          description="How data gets stored on Filecoin"
          cta={
            <Button href="" variant="primary">
              Find storage solutions
            </Button>
          }
        >
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filecoinStorageFlow.map(({ step, title, description }) => (
              <li key={description} className="flex flex-col gap-3">
                <span className="text-brand-500 text-4xl font-medium">
                  {`0${step}.`}
                </span>
                <Heading tag="h4" variant="xl-medium">
                  {title}
                </Heading>
                <DescriptionText>{description}</DescriptionText>
              </li>
            ))}
          </ul>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionDivider variant="light" />
        <Heading tag="h3" variant="3xl-medium">
          The Filecoin ecosystem
        </Heading>
        <DescriptionText>
          Storing a file on Filecoin involves several participants working
          together.
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
        <SectionImage
          src={graphicsData.learnLibrarySection.data}
          alt={graphicsData.learnLibrarySection.alt}
        />
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent title="What powers the Filecoin network">
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
          <SectionImage
            src={graphicsData.learnDiagramSection.data}
            alt={graphicsData.learnDiagramSection.alt}
          />
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
