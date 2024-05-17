import { Card } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'
import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { getEcosystemProjectsData } from '@/utils/getEcosystemProjectData'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/ecosystem.md'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

const { featured_post: featuredProjectSlug, seo } = attributes

export const metadata = createMetadata(seo, PATHS.ECOSYSTEM.path)

const ecosystemProjects = getEcosystemProjectsData()
const featuredProject = ecosystemProjects.find(
  (project) => project.slug === featuredProjectSlug,
)

const ecosystemPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.ECOSYSTEM.path,
})

export default function Ecosystem() {
  if (!featuredProject) {
    throw new Error('Featured project not found')
  }

  return (
    <PageLayout>
      <StructuredDataScript structuredData={ecosystemPageBaseData} />
      <PageHeader
        isFeatured
        containImageSize
        title={featuredProject.title}
        description={featuredProject.description}
        image={featuredProject.image}
        cta={{
          href: `${PATHS.ECOSYSTEM.path}/${featuredProjectSlug}`,
          text: 'Learn More About the Project',
        }}
      />

      <PageSection
        kicker="Projects"
        title="Ecosystem Projects"
        description="Discover the diverse landscape of Filecoin projects. Inclusion in the Filecoin Ecosystem Explorer is not an endorsement of any project, any company, or any company’s products or services."
      >
        <CardLayout type="home">
          {ecosystemProjects.map((project) => {
            const { slug, title, description, image, category } = project

            return (
              <Card
                key={slug}
                title={title}
                description={description}
                image={image}
                tag={category}
                entryType="ecosystemProject"
                cta={{
                  href: `${PATHS.ECOSYSTEM.path}/${slug}`,
                  text: 'Learn More',
                }}
              />
            )
          })}
        </CardLayout>
      </PageSection>

      <CTASection
        title="Become Part of the Expanding Ecosystem"
        description="If you’re building on Filecoin and don’t see your project or want to edit your listing, share your details."
        cta={{
          href: FILECOIN_FOUNDATION_URLS.ecosystem.submitOrUpdateProjectForm,
          text: 'Submit or Update Your Project',
        }}
      />
    </PageLayout>
  )
}
