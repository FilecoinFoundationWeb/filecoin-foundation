import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/filecoin-plus/allocators.md'

import { createMetadata } from '@/utils/createMetadata'

import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { AllocatorsList } from './components/AllocatorsList'
import { generateStructuredData } from './utils/generateStructuredData'
import { getAllocators } from './utils/getAllocators'

const { header, seo } = attributes

export const metadata = createMetadata({
  seo,
  path: PATHS.ALLOCATORS.path,
})

export default async function Allocators() {
  const allocators = await getAllocators()

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader title={header.title} />
      <AllocatorsList allocators={allocators} />
    </PageLayout>
  )
}
