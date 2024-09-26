import type { AllocatorProps } from '../components/AllocatorsList'

const GITHUB_ALLOCATORS_REPO =
  'https://api.github.com/repos/filecoin-project/Allocator-Registry/contents/Allocators'

const SPEC_FILE_NAME = 'Allocator JSON SPEC.json'

async function getAllocatorUrlList() {
  try {
    const response = await fetch(GITHUB_ALLOCATORS_REPO)
    if (!response.ok) {
      console.error(`Failed to fetch allocator URLs: ${response.statusText}`)
      return []
    }
    const allocatorsData = await response.json()

    const urlList = allocatorsData
      .filter((file: any) => file.name.endsWith('.json'))
      .filter((file: any) => file.name !== SPEC_FILE_NAME)
      .map((file: any) => file.url)

    return urlList
  } catch (error) {
    console.error('Error fetching allocators:', error)
    return []
  }
}

export async function getAllocators() {
  try {
    const allocatorUrlList = await getAllocatorUrlList()

    const allocatorData = await Promise.all(
      allocatorUrlList.map(async (allocatorUrl: any) => {
        try {
          const allocatorResponse = await fetch(allocatorUrl)

          const allocatorJson = await allocatorResponse.json()

          return allocatorJson
        } catch (error) {
          console.error(`Error fetching ${allocatorUrl}:`, error)
          return null
        }
      }),
    )

    const validAllocatorData = validateAllocatorData(allocatorData)

    return validAllocatorData
  } catch (error) {
    console.error('Error fetching allocator data:', error)
  }
}

function validateAllocatorData(allocatorData: any) {
  const validAllocatorData = allocatorData
    .map((allocator: any) => {
      try {
        return parseAllocatorData(allocator)
      } catch (parseAllocatorError) {
        console.error('Error in parseAllocatorData:', parseAllocatorError)
        return null
      }
    })
    .filter((data: any): data is AllocatorProps => data !== null)

  return validAllocatorData
}

function parseAllocatorData(allocatorData: any) {
  if (!allocatorData.content) {
    console.error('Allocator data missing content field')
    return null
  }

  try {
    const decodedContent = atob(allocatorData.content)

    const parsedData = JSON.parse(decodedContent)

    return {
      name: parsedData.name || '',
      metapathway_type: parsedData.metapathway_type || '',
      location: parsedData.location || '',
      required_sps: parsedData.application?.required_sps || '',
      required_replicas: parsedData.application?.required_replicas || '',
    }
  } catch (error) {
    console.error('Error decoding or parsing JSON:', error)
    return null
  }
}
