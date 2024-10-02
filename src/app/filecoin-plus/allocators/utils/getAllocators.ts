<<<<<<< HEAD
import { AllocatorMetaDataSchema } from '../schema/AllocatorsSchema'
=======
import { AllocatorMetaDataSchema } from '../schemas/allocatorSchema'
>>>>>>> c2ef38e (CR)

import { getAllocatorUrlList } from './getAllocatorUrlList'
import { parseAndFilterAllocatorData } from './parseAllocatorData'

export async function getAllocators() {
  const allocatorUrlList = await getAllocatorUrlList()
  const allocatorData = await fetchAllocatorsData(allocatorUrlList)
  return parseAndFilterAllocatorData(allocatorData)
}

async function fetchAllocatorsData(allocatorUrlList: Array<string>) {
  return Promise.all(allocatorUrlList.map(fetchAllocatorData))
}

async function fetchAllocatorData(allocatorUrl: string) {
  try {
    const response = await fetch(allocatorUrl)
    const data = await response.json()
    // console.log('🔥🔥🔥🔥🔥🔥🔥', { data })
    return AllocatorMetaDataSchema.parse(data)
  } catch (error) {
    console.error('Error fetching allocator data:', error)
    return null
  }
}
