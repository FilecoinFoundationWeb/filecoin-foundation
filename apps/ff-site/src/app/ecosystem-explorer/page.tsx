import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import type { AsyncQueryParams } from '@filecoin-foundation/utils/types/urlTypes'

import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/ecosystem-explorer/ecosystem-explorer.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

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

const { header, seo } = PageFrontmatterSchema.parse(attributes)

export default async function EcosystemExplorer(props: Props) {
  const searchParams = await props.searchParams
  const ecosystemProjects = await getEcosystemProjectsData()

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />

      <PageHeader
        title={header.title}
        description={{ text: header.description }}
        image={graphicsData.ecosystem}
      >
        <Button href={PATHS.ECOSYSTEM_EXPLORER_PROJECT_FORM.path}>
          Submit Your Project
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
