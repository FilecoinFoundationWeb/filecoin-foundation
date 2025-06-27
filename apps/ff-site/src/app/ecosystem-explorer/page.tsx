import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { getFeaturedEntry } from '@filecoin-foundation/utils/getFeaturedEntry'
import type { AsyncQueryParams } from '@filecoin-foundation/utils/types/urlTypes'

import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/ecosystem-explorer/ecosystem-explorer.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { FeaturedPageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { Button } from '@/components/Button'
import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { EcosystemExplorerContent } from './components/EcosystemExplorerContent'
import { generateStructuredData } from './utils/generateStructuredData'
import { getEcosystemProjectsData } from './utils/getEcosystemProjectData'

type Props = {
  searchParams: AsyncQueryParams
}

const { seo, featured_entry } = FeaturedPageFrontmatterSchema.parse(attributes)

export default async function EcosystemExplorer(props: Props) {
  const searchParams = await props.searchParams
  const ecosystemProjects = await getEcosystemProjectsData()

  const featuredProject = getFeaturedEntry({
    entries: ecosystemProjects,
    featuredEntryPath: featured_entry,
  })

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />

      <PageHeader
        sectionDividerTitle="Featured"
        title={featuredProject.title}
        description={{ text: featuredProject.description }}
        image={{
          ...(featuredProject.image || graphicsData.imageFallback.data),
          alt: '',
          objectFit: 'contain',
          padding: Boolean(featuredProject.image),
        }}
      >
        <Button
          href={`${PATHS.ECOSYSTEM_EXPLORER.path}/${featuredProject.slug}`}
        >
          View Project Details
        </Button>
      </PageHeader>

      <PageSection
        kicker="Projects"
        title="Ecosystem Projects"
        description="Discover the diverse landscape of projects in the Filecoin ecosystem. Inclusion in the Filecoin Ecosystem Explorer is not an endorsement of any project, any company, or any company’s products or services."
      >
        <EcosystemExplorerContent
          searchParams={searchParams}
          ecosystemProjects={ecosystemProjects}
        />
      </PageSection>

      <CTASection
        title="Become Part of the Expanding Ecosystem"
        description="If you’re building on Filecoin and don’t see your project, share your details."
        cta={{
          text: 'Submit Your Project',
          href: PATHS.ECOSYSTEM_EXPLORER_PROJECT_FORM.path,
        }}
      />
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: { absolute: seo.title },
  description: seo.description,
  image: graphicsData.ecosystem.data.src,
  path: PATHS.ECOSYSTEM_EXPLORER.path,
})
