import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { getFeaturedBlogPosts } from '@filecoin-foundation/utils/getFeaturedBlogPosts'

import { PATHS } from '@/constants/paths'
import { FILECOIN_URLS } from '@/constants/siteMetadata'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import { attributes as digestAttributes } from '@/content/pages/digest.md'
import { attributes } from '@/content/pages/home.md'

import { filecoinEcosystemData } from '@/data/filecoinEcosystemData'
import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { Button } from '@/components/Button'
import { CTAButtonGroup } from '@/components/CTAButtonGroup'
import { CTASection } from '@/components/CTASection'
import { ExploreSectionCard } from '@/components/ExploreSectionCard'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { FeaturedBlogPosts } from './components/FeaturedBlogPosts'
import { FeaturedEcosystemProjects } from './components/FeaturedEcosystemProjects'
import { NoBreadCrumbsLayout } from './components/NoBreadCrumbsLayout'
import { FrontmatterSchema } from './schemas/FrontmatterSchema'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'
import { getFeaturedEcosystemProjects } from '@/ecosystem-explorer/utils/getFeaturedEcosystemProjects'

const {
  header,
  seo,
  featured_ecosystem_projects: featuredEcosystemProjectPaths,
} = FrontmatterSchema.parse(attributes)

const { header: digestPageHeader } =
  PageFrontmatterSchema.parse(digestAttributes)

export default async function Home() {
  const featuredBlogPosts = getFeaturedBlogPosts({
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
        <StructuredDataScript structuredData={ORGANIZATION_SCHEMA_BASE} />
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

export const metadata = createMetadata({
  title: { absolute: seo.title },
  description: seo.description,
  path: PATHS.HOME.path,
  image: graphicsData.home.data.src,
})
