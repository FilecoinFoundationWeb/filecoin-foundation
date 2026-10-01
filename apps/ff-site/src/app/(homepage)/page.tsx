import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { getFeaturedPosts } from '@filecoin-foundation/utils/getFeaturedPosts'

import { PATHS } from '@/constants/paths'
import { FILECOIN_URLS } from '@/constants/siteMetadata'
import { getOrganizationSchemaBase } from '@/constants/structuredDataConstants'

import { digestPageItem } from '@/qino/items/digestPage'
import { homePageItem } from '@/qino/items/homePage'

import { filecoinEcosystemData } from '@/data/filecoinEcosystemData'
import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Button } from '@/components/Button'
import { CTAButtonGroup } from '@/components/CTAButtonGroup'
import { CTASection } from '@/components/CTASection'
import { ExploreSectionCard } from '@/components/ExploreSectionCard'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { FeaturedBlogPosts } from './components/FeaturedBlogPosts'
import { FeaturedEcosystemProjects } from './components/FeaturedEcosystemProjects'
import { NoBreadCrumbsLayout } from './components/NoBreadCrumbsLayout'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'
import { getFeaturedEcosystemProjects } from '@/ecosystem-explorer/utils/getFeaturedEcosystemProjects'

export default async function Home() {
  const { header, featured_ecosystem_projects: featuredEcosystemProjectPaths } =
    await homePageItem.getEntry()
  const { header: digestPageHeader } = await digestPageItem.getEntry()

  const featuredBlogPosts = getFeaturedPosts({
    posts: await getBlogPostsData(),
    limit: 4,
  })

  const hasFeaturedBlogPosts = featuredBlogPosts.length > 0

  const featuredEcosystemProjects = await getFeaturedEcosystemProjects(
    featuredEcosystemProjectPaths,
  )

  return (
    <NoBreadCrumbsLayout>
      <PageLayout>
        <StructuredDataScript
          structuredData={await getOrganizationSchemaBase()}
        />
        <PageHeader
          title={header.title}
          description={{ text: header.description }}
          image={graphicsData.home}
        >
          <CTAButtonGroup
            cta={[
              {
                href: PATHS.ABOUT.path,
                text: 'Learn More About the Foundation',
              },
              {
                href: FILECOIN_URLS.site,
                text: 'Dive Into the Filecoin Protocol',
              },
            ]}
          />
        </PageHeader>

        <PageSection kicker="Explore" title="The Filecoin Ecosystem">
          <CardGrid as="ul" cols="smTwo">
            {filecoinEcosystemData.map((card) => {
              const {
                heading: { title, icon },
                description,
                cta,
              } = card

              return (
                <ExploreSectionCard
                  key={title}
                  cta={cta}
                  heading={{
                    tag: 'h3',
                    variant: 'lg',
                    children: title,
                    iconProps: {
                      component: icon,
                    },
                  }}
                >
                  {description}
                </ExploreSectionCard>
              )
            })}
          </CardGrid>
        </PageSection>

        <PageSection
          kicker="Learn"
          title="Filecoin Use Cases"
          description="Navigate the Filecoin Ecosystem Explorer, a crowd-sourced and open database to showcase projects powering the Filecoin network."
        >
          <FeaturedEcosystemProjects
            ecosystemProjects={featuredEcosystemProjects}
          />

          <Button
            className="sm:self-center"
            href={PATHS.ECOSYSTEM_EXPLORER.path}
          >
            View All
          </Button>
        </PageSection>

        <PageSection
          kicker="Digest"
          title={digestPageHeader.title}
          image={graphicsData.digest}
          description={digestPageHeader.description}
          cta={{
            href: PATHS.DIGEST.path,
            text: 'Read Digest',
          }}
        />

        {hasFeaturedBlogPosts && (
          <PageSection
            kicker="Stay Updated"
            title="News & Blog"
            description="The latest updates and announcements from the Filecoin ecosystem and Filecoin Foundation."
          >
            <FeaturedBlogPosts featuredBlogPosts={featuredBlogPosts} />

            <Button className="sm:self-center" href={PATHS.BLOG.path}>
              View All
            </Button>
          </PageSection>
        )}

        <CTASection
          title="Become Part of Our Vibrant Community"
          description="Join the Filecoin project Slack to engage with the community and stay updated on the latest developments."
          cta={{
            href: FILECOIN_URLS.social.slack.href,
            text: 'Join Filecoin Slack',
          }}
        />
      </PageLayout>
    </NoBreadCrumbsLayout>
  )
}

export async function generateMetadata() {
  const { seo } = await homePageItem.getEntry()

  return createMetadata({
    title: { absolute: seo.title },
    description: seo.description,
    path: PATHS.HOME.path,
    image: graphicsData.home.data.src,
  })
}
