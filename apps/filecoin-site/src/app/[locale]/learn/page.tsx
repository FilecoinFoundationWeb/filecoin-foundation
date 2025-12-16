import Image from 'next/image'

import { clsx } from 'clsx'

import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { Card } from '@filecoin-foundation/ui-filecoin/Card'
import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import { LinkCard } from '@filecoin-foundation/ui-filecoin/LinkCard'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { backgroundVariants } from '@filecoin-foundation/ui-filecoin/Section/Section'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'
import { SimpleCard } from '@filecoin-foundation/ui-filecoin/SimpleCard'

import { PATHS } from '@/constants/paths'
import { FILECOIN_DOCS_URL, FILECOIN_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { GradientOverlay } from '@/components/GradientOverlay'
import { Navigation } from '@/components/Navigation/Navigation'
import { SplitSectionContent } from '@/components/SplitSectionContent'
import { YouTubeVideoEmbed } from '@/components/YoutubeVideoEmbed'

import { LEARN_SEO } from './constants/seo'
import { howFilecoinWorks } from './data/howFilecoinWorks'
import { learnAboutFilecoinProtocol } from './data/learnAboutFilecoinProtocol'
import { resilientInternetCta } from './data/resilientInternetCta'
import { whatIsFilecoinUsedFor } from './data/whatIsFilecoinUsedFor'

export default function Learn() {
  return (
    <>
      <div className={clsx('relative isolate', backgroundVariants.dark)}>
        <Navigation backgroundVariant="transparentDark" />
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            variant="highContrast"
            title="The authenticity layer of a more resilient internet"
            description="Filecoin is the world's largest decentralized storage network. By leveraging cryptographic verification and global redundancy, Filecoin safeguards humanity's information, keeping it free from centralized control."
            cta={
              <Button href={FILECOIN_DOCS_URL} variant="primary">
                Explore documentation
              </Button>
            }
          />
        </PageSection>

        <div className="absolute right-0 bottom-0 -z-10 h-[80vh] w-[80vw] xl:origin-bottom-right">
          <Image
            fill
            priority
            src={graphicsData.solarEclipse.data}
            alt={graphicsData.solarEclipse.alt}
            className="object-cover"
          />
        </div>
        <GradientOverlay />
      </div>

      <PageSection backgroundVariant="dark" paddingVariant="topNone">
        <SectionContent
          centerCTA
          descriptionColorBase
          title="What is Filecoin?"
        >
          <SplitSectionContent
            title="A decentralized alternative to today's storage solutions."
            description={[
              "Filecoin is a decentralized alternative to today's storage solutions, offering a better foundation for humanity's information.",
              "A handful of corporations currently control most of the world's data. This centralized model creates gatekeepers, introduces single points of failures, and reduces transparency.",
              'Filecoin offers a fundamentally different approach to data storage by distributing data across a decentralized, global network, protected by cryptographic proofs.',
            ]}
          />
          <YouTubeVideoEmbed videoUrl={FILECOIN_URLS.video.whatIsFilecoin} />
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          centerCTA
          title="What is Filecoin used for?"
          description="From archival backups to Web3 and AI apps, Filecoin offers decentralized, secure, and verifiable storage at scale."
          cta={
            <Button href={PATHS.CASE_STUDIES.path} variant="primary">
              Explore real-world case studies
            </Button>
          }
        >
          <CardGrid as="ul" variant="mdTwoWider">
            {whatIsFilecoinUsedFor.map(({ title, description, image }) => (
              <Card
                key={title}
                as="li"
                title={title}
                description={description}
                image={image}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent
          centerCTA
          title="What makes Filecoin unique"
          description="Filecoin's distributed design delivers verifiable storage, removes single points of failure, and creates a resilient, transparent storage foundation."
          cta={
            <Button href={PATHS.STORE_DATA.path} variant="primary">
              Start storing on Filecoin
            </Button>
          }
        >
          <CardGrid as="ul" variant="smTwoLgThreeWider">
            {howFilecoinWorks.map(({ title, description, icon }) => (
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
          title="Learn about the Filecoin protocol"
          description="For technically curious people who want to go deeper into how Filecoin actually works."
          cta={
            <Button href={FILECOIN_DOCS_URL} variant="primary">
              Explore documentation
            </Button>
          }
        >
          <CardGrid as="ul" variant="smTwoXlThreeWide">
            {learnAboutFilecoinProtocol.map(({ title, description, cta }) => (
              <SimpleCard
                key={title}
                as="li"
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
          title="Be a part of a more resilient internet"
          description="Filecoin is more than storage; it's an innovative, open ecosystem built to preserve humanity's information."
        >
          <CardGrid as="ul" variant="mdTwo">
            {resilientInternetCta.map(({ title, href, icon }) => (
              <LinkCard
                key={title}
                as="li"
                title={title}
                headingTag="h3"
                href={href}
                icon={{ component: icon, variant: 'filled' }}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>
    </>
  )
}

export const metadata = createMetadata({
  title: { absolute: LEARN_SEO.title },
  description: LEARN_SEO.description,
  path: PATHS.LEARN.path,
})
