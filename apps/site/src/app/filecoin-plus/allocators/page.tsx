import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getFrontmatter } from '@/utils/getFrontmatter'

import { BaseFrontmatterSchema } from '@/schemas/FrontmatterSchema'

import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { AllocatorsTableSection } from './components/AllocatorsTableSection'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = getFrontmatter({
  path: PATHS.ALLOCATORS,
  zodParser: BaseFrontmatterSchema.parse,
})

export const metadata = createMetadata({
  seo,
  path: PATHS.ALLOCATORS.path,
  overrideDefaultTitle: true,
})

export default function Allocators() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.filPlusAllocators}
      />

      <PageSection kicker="List of Allocators" title="Find an Allocator">
        <AllocatorsTableSection />
      </PageSection>
    </PageLayout>
  )
}
