import Image from 'next/image'

import { clsx } from 'clsx'

import { PATHS } from '@/constants/paths'
import { FILECOIN_DOCS_URL, FILECOIN_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { LinkCard } from '@/components/LinkCard'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { backgroundVariants } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { SimpleCard } from '@/components/SimpleCard'
import { YouTubeVideoEmbed } from '@/components/YoutubeVideoEmbeded'

import { LEARN_SEO } from './constants/seo'
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
            title="The authenticity layer of a more resilient internet"
            description="Filecoin is the world's largest decentralized storage network. By leveraging cryptographic verification and global redundancy, Filecoin safeguards humanity's most important information, keeping it free from centralized control."
            cta={
              <Button href={FILECOIN_DOCS_URL} variant="primary">
                Explore documentation
              </Button>
            }
          />
        </PageSection>

        <Image
          src={graphicsData.earthAtNight.data}
          alt={graphicsData.earthAtNight.alt}
          className="absolute top-0 right-0 -z-10 h-[110vh] translate-x-1/3 rotate-[15deg] transform object-contain object-right-top sm:translate-x-0 sm:rotate-0"
        />
      </div>

      <PageSection backgroundVariant="dark">
        <SectionContent
          descriptionColorBase
          title="What is Filecoin?"
          description={[
            "Filecoin is a decentralized alternative to today's storage solutions, offering a better foundation for humanity's most important information.",
            "A handful of corporations currently control most of the world's data. This centralized model creates gatekeepers, introduces single points of failures, and reduces transparency.",
            'Filecoin offers a fundamentally different approach to data storage by distributing data across a decentralized, global network, protected by cryptographic proofs.',
          ]}
        >
          <YouTubeVideoEmbed videoUrl={FILECOIN_URLS.video.whatIsFilecoin} />
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          centerCTA
          title="What is Filecoin used for?"
          description="From archival backups to Web3 apps, Filecoin offers decentralized, secure, and verifiable storage at scale. "
          cta={[
            <Button href={PATHS.CASE_STUDIES.path} variant="primary">
              Explore case studies
            </Button>,
            <Button href={PATHS.STORE_DATA.path} variant="ghost">
              Store data
            </Button>,
          ]}
        >
          <CardGrid as="ul" variant="smTwoXlFourWider">
            {whatIsFilecoinUsedFor.map(({ title, description, icon }) => (
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

      <PageSection backgroundVariant="gray">
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
          description="Filecoin is more than storage; it's an innovative, open ecosystem built to preserve humanity's most important information."
        >
          <CardGrid as="ul" variant="lgThree">
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
