import type { AsyncNextServerSearchParams } from '@/types/searchParams'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getFrontmatter } from '@/utils/getFrontmatter'

import { BaseFrontmatterSchema } from '@/schemas/FrontmatterSchema'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { EcosystemExplorerContent } from './components/EcosystemExplorerContent'
import { generateStructuredData } from './utils/generateStructuredData'

type Props = {
  searchParams: AsyncNextServerSearchParams
}

const { header, seo } = getFrontmatter({
  path: PATHS.ECOSYSTEM_EXPLORER,
  zodParser: BaseFrontmatterSchema.parse,
})

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
        <EcosystemExplorerContent searchParams={searchParams} />
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
