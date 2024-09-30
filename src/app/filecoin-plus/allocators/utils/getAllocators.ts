import { allocatorDataSchema } from '../schema/AllocatorsSchema'

import { getAllocatorUrlList } from './getAllocatorUrlList'
import { parseAndFilterAllocatorData } from './parseAndFilterAllocatorData'

export async function getAllocators() {
  const allocatorUrlList = await getAllocatorUrlList()
  const allocatorData = await fetchAllocatorsData(allocatorUrlList)

  return parseAndFilterAllocatorData(allocatorData)
}

async function fetchAllocatorsData(allocatorUrlList: Array<string>) {
  return Promise.all(allocatorUrlList.map(fetchAllocatorData))
}

async function fetchAllocatorData(allocatorUrl: string) {
  const response = await fetch(allocatorUrl)
  const data = await response.json()

  const validatedResult = allocatorDataSchema.safeParse(data)

  return validatedResult.data
}
