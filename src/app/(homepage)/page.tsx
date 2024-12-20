import { PATHS } from '@/constants/paths'
import { FILECOIN_URLS } from '@/constants/siteMetadata'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import { filecoinEcosystemData } from '@/data/filecoinEcosystemData'
import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { extractSlugFromFilename } from '@/utils/fileUtils'
import { getFrontmatter } from '@/utils/getFrontmatter'

import {
  BaseFrontmatterSchema,
  HomePageFrontmatterSchema,
} from '@/schemas/FrontmatterSchema'

import { Button } from '@/components/Button'
import { CardGrid } from '@/components/CardGrid'
import { CTASection } from '@/components/CTASection'
import { ExploreSectionCard } from '@/components/ExploreSectionCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { getEcosystemProjectsData } from '@/ecosystem-explorer/utils/getEcosystemProjectData'

import { FeaturedBlogPosts } from './components/FeaturedBlogPosts'
import { FeaturedEcosystemProjects } from './components/FeaturedEcosystemProjects'
import { NoBreadCrumbsLayout } from './components/NoBreadCrumbsLayout'

const ecosystemProjects = getEcosystemProjectsData()

const {
  header,
  seo,
  featuredEcosystemProjects: featuredEcosystemProjectPaths,
} = getFrontmatter({
  path: PATHS.HOME,
  zodParser: HomePageFrontmatterSchema.parse,
})

const { header: digestPageHeader } = getFrontmatter({
  path: PATHS.DIGEST,
  zodParser: BaseFrontmatterSchema.parse,
})

const featuredEcosystemProjectsSlugs = featuredEcosystemProjectPaths.map(
  extractSlugFromFilename,
)

const featuredEcosystemProjects = ecosystemProjects.filter((item) =>
  featuredEcosystemProjectsSlugs?.includes(item.slug),
)

export const metadata = createMetadata({
  seo,
  path: PATHS.HOME.path,
  overrideDefaultTitle: true,
})

export default function Home() {
  return (
    <NoBreadCrumbsLayout>
      <PageLayout>
        <StructuredDataScript structuredData={ORGANIZATION_SCHEMA_BASE} />
        <PageHeader
          title={header.title}
          description={header.description}
          image={graphicsData.home}
          cta={[
            { href: PATHS.ABOUT.path, text: 'Learn More About the Foundation' },
            {
              href: FILECOIN_URLS.site,
              text: 'Dive Into the Filecoin Protocol',
            },
          ]}
        />

        <PageSection kicker="Explore" title="The Filecoin Ecosystem">
          <CardGrid cols="smTwo">
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

        <PageSection
          kicker="Stay Updated"
          title="News & Blog"
          description="The latest updates and announcements from the Filecoin ecosystem and Filecoin Foundation."
        >
          <FeaturedBlogPosts />
          <Button className="sm:self-center" href={PATHS.BLOG.path}>
            View All
          </Button>
        </PageSection>
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
