import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/allocators.md'

import { createMetadata } from '@/utils/createMetadata'

import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { AllocatorsList } from './components/AllocatorsList'
import { generateStructuredData } from './utils/generateStructuredData'
const { header, seo } = attributes

export const metadata = createMetadata({
  seo,
  path: PATHS.ALLOCATORS.path,
})

export default async function Allocators() {
  async function getAllAllocatorUrls() {
    try {
      const response = await fetch(
        'https://api.github.com/repos/filecoin-project/Allocator-Registry/contents/Allocators',
      )

      const allocatorsData = await response.json()

      const jsonFiles = allocatorsData
        .filter((file: any) => file.name.endsWith('.json'))
        .map((file: any) => file.url)

      return jsonFiles
    } catch (error) {
      console.error('Error fetching allocators:', error)
    }
  }

  async function getAllocatorData() {
    try {
      const allAllocatorUrls = await getAllAllocatorUrls()

      const allocatorData = await Promise.all(
        allAllocatorUrls.map(async (allocatorUrl: any) => {
          const allocatorResponse = await fetch(allocatorUrl)
          return await allocatorResponse.json()
        }),
      )

      const parsedAllocatorData = allocatorData.map((allocator: any) => {
        return parseAllocatorData(allocator)
      })

      return parsedAllocatorData
    } catch (error) {
      console.error('Error fetching allocator data:', error)
    }
  }

  function parseAllocatorData(allocatorData: any) {
    const decodedContent = atob(allocatorData.content)

    try {
      const parsedData = JSON.parse(decodedContent)

      return {
        name: parsedData.name,
        metapathway_type: parsedData.metapathway_type,
        location: parsedData.location,
        required_sps: parsedData.application?.required_sps,
        required_replicas: parsedData.application?.required_replicas,
      }
    } catch (error) {
      console.error('Error parsing JSON:', error)
    }
  }

  const allocatorsListData = await getAllocatorData()

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader title={header.title} description={header.description} />
      {/* <AllocatorsList allocators={allocatorsListData || []} /> */}
    </PageLayout>
  )
}
