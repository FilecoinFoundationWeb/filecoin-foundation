import Image from 'next/image'

import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Button } from '@/components/Button'
import { GradientContainer } from '@/components/GradientContainer'
import { ImageGrid } from '@/components/ImageGrid'
import { LinkCard } from '@/components/LinkCard'
import { Navigation } from '@/components/Navigation/Navigation'
import { SectionContent } from '@/components/SectionContent'
import { SectionImage } from '@/components/SectionImage'
import { SimpleCard } from '@/components/SimpleCard'
import { SimpleCardWithLogo } from '@/components/SimpleCardWithLogo'

import { COMMUNITY_SEO } from './constants/seo'
import { communityConnectionImages } from './data/communityConnectionImages'
import { ecosystemResources } from './data/ecosystemResources'
import { getInvolvedWithCommunity } from './data/getInvolvedWithCommunity'
import { socialMedia } from './data/socialMedia'

export default function CommunityHub() {
  return (
    <>
      <GradientContainer overlay clipY>
        <graphicsData.communityHubGradient.data className="absolute top-0 -right-[75vw] -z-20 w-[200vw] overflow-visible sm:-top-[30vw] md:-top-[50vw] lg:-top-[5vw] lg:-right-[20vw] lg:w-[90vw] 2xl:top-0 2xl:-right-[10vw] 2xl:w-[50vw]" />
        <Navigation backgroundVariant="transparentDark" />
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title="Build, connect and grow with the Filecoin community"
            description="A global network of builders, researchers, advocates and creators is shaping the future of Filecoin. Plug into the community and start contributing in your own way."
          />
        </PageSection>
      </GradientContainer>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Get involved"
          description="Whether you want to contribute, connect or build, there's a place for you in the Filecoin community."
        >
          <CardGrid as="ul" variant="mdTwoLgThreeWide">
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
        </SectionContent>
      </PageSection>

      <PageSection paddingVariant="topOnly" backgroundVariant="light">
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

          <CardGrid as="ul" variant="mdTwoLgThreeXlFour">
            {socialMedia.map(({ title, href, icon }) => (
              <LinkCard
                key={title}
                as="li"
                title={title}
                headingTag="h3"
                href={href}
                icon={{ component: icon }}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          title="Ecosystem resources"
          description="Filecoin is open-source and community-driven. Explore groups advancing the protocol and building the tools that power its ecosystem."
        >
          <CardGrid as="ul" variant="lgTwoWide">
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

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Explore the ecosystem"
          description="Visit Filecoin Foundation's Ecosystem Explorer to discover Filecoin projects, get inspired by what others are building, and find your place in the Filecoin ecosystem."
          cta={
            <Button
              href={FILECOIN_FOUNDATION_URLS.ecosystemExplorer.href}
              variant="primary"
            >
              Visit ecosystem explorer
            </Button>
          }
        />
        <div className="mt-40">
          <SectionImage {...graphicsData.earthAtNight} />
        </div>
      </PageSection>
    </>
  )
}

export const metadata = createMetadata({
  title: { absolute: COMMUNITY_SEO.title },
  description: COMMUNITY_SEO.description,
  path: PATHS.COMMUNITY_HUB.path,
})
