import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/filecoin-plus/allocators.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { AllocatorsTableSection } from './components/AllocatorsTableSection'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = PageFrontmatterSchema.parse(attributes)

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
        description={{ text: header.description }}
        image={graphicsData.filPlusAllocators}
      />

      <PageSection kicker="List of Allocators" title="Find an Allocator">
        <AllocatorsTableSection />
      </PageSection>
    </PageLayout>
  )
}
