import Image from 'next/image'

import clsx from 'clsx'
// import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Button } from '@/components/Button'
import { CardGrid } from '@/components/CardGrid'
import { CardGridContainer } from '@/components/CardGridContainer'
import { ImageGrid } from '@/components/ImageGrid'
import { LinkCard } from '@/components/LinkCard'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { backgroundVariants } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { SectionImage } from '@/components/SectionImage'
import { SimpleCard } from '@/components/SimpleCard'
import { SimpleCardWithLogo } from '@/components/SimpleCardWithLogo'

import { COMMUNITY_SEO } from './constants/seo'
import { communityConnectionImages } from './data/communityConnectionImages'
import { communityConnections } from './data/communityConnections'
import { ecosystemResources } from './data/ecosystemResources'
import { getInvolvedWithCommunity } from './data/getInvolvedWithCommunity'

export default function BuildOnFilecoin() {
  return (
    <>
      <div
        className={clsx(
          'relative isolate overflow-clip',
          backgroundVariants.dark,
        )}
      >
        <Navigation backgroundVariant="transparentDark" />
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title="Build, connect and grow with the Filecoin community"
            description="A global network of builders, researchers, advocates and creators is shaping the future of Filecoin. Plug into the community and start contributing in your own way."
            cta={
              <Button href="#todo" variant="primary">
                Explore how to get involved
              </Button>
            }
          />
        </PageSection>

        <graphicsData.communityHero.data className="absolute -top-[30vw] left-0 -z-10 w-[130vw]" />
      </div>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Get involved"
          description="Whether you want to contribute, connect or build, there’s a place for you in the Filecoin community."
        >
          <CardGridContainer width="6xl">
            <CardGrid as="ul" variant="mdTwoWide">
              {getInvolvedWithCommunity.map(({ title, description, cta }) => (
                <SimpleCard
                  key={title}
                  as="li"
                  title={title}
                  description={description}
                  cta={cta}
                />
              ))}
            </CardGrid>
          </CardGridContainer>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          title="Connect with the community"
          description="Connect with a vibrant network of developers building on Filecoin.
          Connect, collaborate, and grow with the ecosystem."
        >
          <ImageGrid variant="oneMdThreeCollage">
            {communityConnectionImages.map(({ data, alt }) => (
              <Image key={alt} src={data} alt={alt} />
            ))}
          </ImageGrid>
          <CardGrid as="ul" variant="smTwoLgThreeTight">
            {communityConnections.map(({ title, description, href, icon }) => (
              <LinkCard
                key={title}
                as="li"
                title={title}
                headingTag="h3"
                description={description}
                href={href}
                icon={{ component: icon }}
              />
            ))}
          </CardGrid>
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
    </>
  )
}

export const metadata = createMetadata({
  title: { absolute: COMMUNITY_SEO.title },
  description: COMMUNITY_SEO.description,
  path: PATHS.COMMUNITY.path,
})
