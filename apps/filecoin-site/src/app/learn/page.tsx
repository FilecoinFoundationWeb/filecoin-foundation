import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { LinkCard } from '@/components/LinkCard'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'
import { SectionDivider } from '@/components/SectionDivider'
import { SectionImage } from '@/components/SectionImage'
import { SectionSubContent } from '@/components/SectionSubContent'
import { SimpleCard } from '@/components/SimpleCard'
import { SplitSectionContent } from '@/components/SplitSectionContent'

import { ComparisonTable } from './components/ComparisonTable/ComparisonTable'
import { StepCard } from './components/StepCard'
import { ecosystemPartners } from './data/ecosystemPartners'
import { filecoinParticipants } from './data/filecoinParticipants'
import { filecoinStackFeatures } from './data/filecoinStackFeatures'
import { filecoinStorageFlow } from './data/filecoinStorageFlow'
import { filecoinValues } from './data/filecoinValues'
import { resilientInternetCta } from './data/resilientInternetCta'

export default function Learn() {
  return (
    <>
      <BackgroundImage
        overlayVariant="light"
        src={graphicsData.learnHero.data.src}
        blurDataURL={graphicsData.learnHero.data.blurDataURL}
      >
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title="The authenticity layer of a more resilient internet"
            description="Filecoin is the world's largest decentralized storage network. By leveraging cryptographic verification and global redundancy, Filecoin safeguards humanity's most important information — free from centralized control."
            cta={
              <Button href="" variant="primary">
                Explore documentation
              </Button>
            }
          />
        </PageSection>
      </BackgroundImage>

      <PageSection backgroundVariant="dark">
        <SectionContent title="A robust foundation for humanity's most important information">
          <SplitSectionContent
            title="A decentralized, efficient, and robust protocol."
            description={[
              "Today, a handful of corporations control most of the world's data, creating centralized gatekeepers that limit transparency and introduce single points of failure.",
              'Filecoin offers a fundamentally different approach to data storage by distributing data across a decentralized, global network, ensuring greater security and resilience.',
              'Petabytes of data, from cultural archives to scientific research, are stored on the network, protected by cryptographic proofs and distributed across nodes worldwide. The decentralized model empowers users with true control over their information, building a more open and resilient foundation for the web.',
            ]}
          />

          <SectionImage {...graphicsData.learnLibrarySection} />

          <CardGrid as="ul" variant="lgTwo">
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
        <SectionContent title="Building a decentralized future">
          <CardGrid as="ul" variant="smTwoLgThree">
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
        <SectionContent title="How Filecoin works">
          <SectionSubContent
            centerCTA
            headingTag="h3"
            title="How data gets stored on Filecoin"
            cta={
              <Button href="" variant="primary">
                Find storage solutions
              </Button>
            }
          >
            <CardGrid as="ul" variant="smTwoXlThreeWidest">
              {filecoinStorageFlow.map(({ step, title, description }) => (
                <StepCard
                  key={title}
                  as="li"
                  step={step}
                  title={title}
                  headingTag="h4"
                  description={description}
                />
              ))}
            </CardGrid>
          </SectionSubContent>

          <SectionDivider />

          <SectionSubContent
            headingTag="h3"
            title="The Filecoin ecosystem"
            description="Storing a file on Filecoin involves several participants working together."
          >
            <CardGrid as="ul" variant="smTwoLgThreeWider">
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
            <SectionImage {...graphicsData.learnDiagramSection} />
          </SectionSubContent>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent title="What powers the Filecoin network">
          <CardGrid as="ul" variant="smTwoLgThree">
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

      <PageSection backgroundVariant="light">
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

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Be a part of a more resilient internet"
          description="Filecoin is more than storage — it's an innovative ecosystem working to verify and preserve humanity's most important information."
        >
          <CardGrid as="ul" variant="smThree">
            {resilientInternetCta.map(({ title, href, icon }) => (
              <LinkCard
                key={title}
                as="li"
                backgroundVariant="dark"
                title={title}
                href={href}
                icon={icon}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>
    </>
  )
}
