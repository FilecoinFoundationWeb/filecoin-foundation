import path from 'path'

import { PATHS } from '@/constants/paths'
import { FILECOIN_URLS } from '@/constants/siteMetadata'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import { attributes as digestAttributes } from '@/content/pages/digest.md'
import { attributes } from '@/content/pages/home.md'

import { filecoinEcosystemData } from '@/data/filecoinEcosystemData'
import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Button } from '@/components/Button'
import { CardGrid } from '@/components/CardGrid'
import { CTASection } from '@/components/CTASection'
import { FeaturedBlogPosts } from '@/components/FeaturedBlogPosts'
import { FeaturedEcosystemProjects } from '@/components/FeaturedEcosystemProjects'
import { HomeExploreSectionCard } from '@/components/HomeExploreSectionCard'
import { NoBreadCrumbsLayout } from '@/components/NoBreadCrumbsLayout'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { getEcosystemProjectsData } from '@/ecosystem-explorer/utils/getEcosystemProjectData'

const ecosystemProjects = getEcosystemProjectsData()

const { featured_ecosystem_projects, header, seo } = attributes
const { header: digestHeader } = digestAttributes

if (!featured_ecosystem_projects) {
  throw new Error('Featured ecosystem projects are undefined')
}

const featuredEcosystemProjectsSlugs = featured_ecosystem_projects.map(
  (item) => path.parse(item).name,
)

const featuredEcosystemProjects = ecosystemProjects.filter((item) =>
  featuredEcosystemProjectsSlugs?.includes(item.slug),
)

export const metadata = createMetadata({
  seo,
  path: PATHS.HOME.path,
  overrideDefaultTitle: true,
})

// To test if Vercel is picking up the env variable from GitHub Actions
// ⚠️⚠️⚠️ To remove after testing
console.log({ GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN })

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
                <HomeExploreSectionCard
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
                </HomeExploreSectionCard>
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
          title={digestHeader.title}
          image={graphicsData.digest}
          description={digestHeader.description}
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
