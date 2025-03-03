import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import type { AsyncQueryParams } from '@filecoin-foundation/utils/types/urlTypes'

import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/ecosystem-explorer/ecosystem-explorer.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { EcosystemExplorerContent } from './components/EcosystemExplorerContent'
import { generateStructuredData } from './utils/generateStructuredData'
import { getEcosystemProjectsData } from './utils/getEcosystemProjectData'

type Props = {
  searchParams: AsyncQueryParams
}

const { header, seo } = PageFrontmatterSchema.parse(attributes)

export const metadata = createMetadata({
  seo: {
    ...seo,
    image: graphicsData.ecosystem.data.src,
  },
  path: PATHS.ECOSYSTEM_EXPLORER.path,
  overrideDefaultTitle: true,
})

export default async function EcosystemExplorer(props: Props) {
  const searchParams = await props.searchParams
  const ecosystemProjects = await getEcosystemProjectsData()

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.ecosystem}
        cta={{
          text: 'Submit Your Project',
          href: PATHS.ECOSYSTEM_EXPLORER_PROJECT_FORM.path,
        }}
      />

      <PageSection
        kicker="Projects"
        title="Ecosystem Projects"
        description="Discover the diverse landscape of projects in the Filecoin ecosystem. Inclusion in the Filecoin Ecosystem Explorer is not an endorsement of any project, any company, or any company’s product or services."
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
