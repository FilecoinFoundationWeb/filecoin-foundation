import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/allocators.md'

import { createMetadata } from '@/utils/createMetadata'

import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { AllocatorsList } from './components/AllocatorsList'
import { generateStructuredData } from './utils/generateStructuredData'
const { header, seo } = attributes

export const metadata = createMetadata({
  seo,
  path: PATHS.ALLOCATORS.path,
})

export default function Allocators() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader title={header.title} description={header.description} />
      <AllocatorsList />
    </PageLayout>
  )
}
