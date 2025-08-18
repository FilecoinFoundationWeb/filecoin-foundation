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
import { SectionDivider } from '@/components/SectionDivider'
import { SectionImage } from '@/components/SectionImage'
import { SectionSubContent } from '@/components/SectionSubContent'
import { SimpleCard } from '@/components/SimpleCard'

import { StepCard } from './components/StepCard'
import { LEARN_SEO } from './constants/seo'
import { filecoinParticipants } from './data/filecoinParticipants'
import { filecoinStackFeatures } from './data/filecoinStackFeatures'
import { filecoinStorageFlow } from './data/filecoinStorageFlow'
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
        <SectionContent title="How Filecoin works">
          <SectionSubContent
            centerCTA
            headingTag="h3"
            title="How data gets stored on Filecoin"
            cta={
              <Button
                href={`${PATHS.STORE_DATA.path}#store-on-filecoin`}
                variant="primary"
              >
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
                  as="li"
                  border="only-top"
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
