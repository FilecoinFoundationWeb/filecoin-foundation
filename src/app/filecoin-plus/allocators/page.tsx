import * as Sentry from '@sentry/nextjs'

import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/filecoin-plus/allocators.md'

import { createMetadata } from '@/utils/createMetadata'

import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { AllocatorsTable } from './components/AllocatorsTable'
import { NoAllocatorsMessage } from './components/NoAllocatorsMessage'
import type { AllocatorProps } from './schema/AllocatorsSchema'
import { generateStructuredData } from './utils/generateStructuredData'
import { getAllocators } from './utils/getAllocators'

const { header, seo } = attributes

export const metadata = createMetadata({
  seo,
  path: PATHS.ALLOCATORS.path,
})

export default async function Allocators() {
  let allocators: Array<AllocatorProps> = []

  try {
    const allAllocators = await getAllocators()
    allocators = allAllocators.filter(
      (allocator): allocator is AllocatorProps => allocator !== null,
    )
  } catch (error) {
    Sentry.captureException(error, {
      tags: { component: 'Allocators' },
      extra: { message: 'Error fetching or validating allocators' },
    })
    console.error('Error fetching or validating allocators:', error)
  }

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader title={header.title} />
      {allocators && allocators.length > 0 ? (
        <AllocatorsTable allocators={allocators} />
      ) : (
        <NoAllocatorsMessage />
      )}
    </PageLayout>
  )
}
