import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'
import { FILECOIN_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { CardGrid } from '@/components/CardGrid'
import { LinkCard } from '@/components/LinkCard'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'

import { LEARN_SEO } from './constants/seo'
import { resilientInternetCta } from './data/resilientInternetCta'
import { generateStructuredData } from './utils/generateStructuredData'

export default function Learn() {
  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(LEARN_SEO)}
      />
      <BackgroundImage
        overlayVariant="light"
        src={graphicsData.learnHero.data.src}
        blurDataURL={graphicsData.learnHero.data.blurDataURL}
      >
        <Navigation backgroundVariant="transparentDark" />
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title="The authenticity layer of a more resilient internet"
            description="Filecoin exists to decentralize the world’s information infrastructure, giving users control over their data and creating a more resilient, transparent, and equitable foundation for the internet."
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
          title="What is Filecoin?"
          description="Filecoin is a decentralized storage network where users can store, retrieve, and verify data.

Instead of relying on a single company or data centre, Filecoin distributes data across a global marketplace of independent storage providers, secured by cryptographic proofs."
        />
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          centerCTA
          title="What is Filecoin used for?"
          description="Whether you're backing up a petabyte or building a next-gen application, Filecoin offers verifiable, decentralized storage at scale."
          cta={[
            <Button href={PATHS.CASE_STUDIES.path} variant="primary">
              Explore case studies
            </Button>,
            <Button href={PATHS.STORE_DATA.path} variant="ghost">
              Store data
            </Button>,
          ]}
        />
      </PageSection>

      <PageSection backgroundVariant="gray">
        <SectionContent
          title="Learn about the Filecoin protocol"
          description="For technically curious people who want to go deeper into how Filecoin actually works."
          cta={
            <Button href={FILECOIN_URLS.docs} variant="primary">
              Explore documentation
            </Button>
          }
        />
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
