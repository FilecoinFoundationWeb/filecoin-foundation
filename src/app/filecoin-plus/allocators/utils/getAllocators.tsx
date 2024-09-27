import * as Sentry from '@sentry/nextjs'

import { getAllocatorUrlList } from './getAllocatorUrlList'
import { parseAndFilterAllocatorData } from './parseAndFilterAllocatorData'

export async function getAllocators() {
  try {
    const allocatorUrlList = await getAllocatorUrlList()
    const allocatorData = await fetchAllocatorsData(allocatorUrlList)
    return parseAndFilterAllocatorData(allocatorData)
  } catch (error) {
    handleAllocatorFetchingError(error, 'Error fetching allocator data')
    return []
  }
}

async function fetchAllocatorsData(allocatorUrlList: Array<string>) {
  return Promise.all(allocatorUrlList.map(fetchAllocatorData))
}

async function fetchAllocatorData(allocatorUrl: string) {
  try {
    const response = await fetch(allocatorUrl)
    return await validateAllocatorResponse(response)
  } catch (error) {
    handleAllocatorFetchingError(error, `Error fetching ${allocatorUrl}`)
    return null
  }
}

async function validateAllocatorResponse(response: Response) {
  if (!response.ok) {
    throw new Error(`Failed to fetch allocator: ${response.statusText}`)
  }
  return response.json()
}

function handleAllocatorFetchingError(error: unknown, context: string) {
  Sentry.captureException(error, { extra: { context } })
}
