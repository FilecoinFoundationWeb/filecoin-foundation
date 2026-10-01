import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { allocatorsPageItem } from '@/qino/items/allocatorsPage'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { AllocatorsTableSection } from './components/AllocatorsTableSection'
import { generateStructuredData } from './utils/generateStructuredData'

export default async function Allocators() {
  const { header, seo } = await allocatorsPageItem.getEntry()

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

export async function generateMetadata() {
  const { seo } = await allocatorsPageItem.getEntry()

  return createMetadata({
    title: { absolute: seo.title },
    description: seo.description,
    image: graphicsData.filPlusAllocators.data.src,
    path: PATHS.ALLOCATORS.path,
  })
}
