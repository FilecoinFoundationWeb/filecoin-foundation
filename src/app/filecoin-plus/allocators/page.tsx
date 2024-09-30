import { CloudSlash } from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/constants/paths'
import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

import { attributes } from '@/content/pages/filecoin-plus/allocators.md'

import { createMetadata } from '@/utils/createMetadata'

import { Button } from '@/components/Button'
import { NoResultsMessage } from '@/components/NoResultsMessage'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import {
  AllocatorsList,
  type AllocatorProps,
} from './components/AllocatorsList'
import { generateStructuredData } from './utils/generateStructuredData'
import { getAllocators } from './utils/getAllocators'

const { header, seo } = attributes

export const metadata = createMetadata({
  seo,
  path: PATHS.ALLOCATORS.path,
})

export default async function Allocators() {
  const allAllocators = await getAllocators()
  const allocators = allAllocators.filter(
    (allocator): allocator is AllocatorProps => allocator !== null,
  )

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader title={header.title} />
      {allocators ? (
        <AllocatorsList allocators={allocators} />
      ) : (
        <NoAllocatorsMessage />
      )}
    </PageLayout>
  )
}

function NoAllocatorsMessage() {
  return (
    <NoResultsMessage title="Allocator Data Unavailable" icon={CloudSlash}>
      <p className="max-w-md text-center">
        We're having trouble fetching the allocator data. For the latest
        information, please check the Allocators list on the Filecoin Plus
        Registry.
      </p>
      <Button href={FIL_PLUS_URLS.allocators.site} variant="primary">
        Go to Filecoin Plus Registry
      </Button>
    </NoResultsMessage>
  )
}
