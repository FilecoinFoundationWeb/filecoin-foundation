import { ZodError } from 'zod'

import { logZodError } from '@/utils/zodUtils'

import {
  type AllocatorFileMetaData,
  type AllocatorFileMetaDataBase,
  AllocatorFileMetaDataSchema,
} from '../schemas/allocatorSchema'

import { extractAllocators } from './extractAllocators'
import { getAllocatorUrlList } from './getAllocatorUrlList'

export async function getAllocators() {
  const allocatorUrlList = await getAllocatorUrlList()
  console.log('allocatorUrlList', allocatorUrlList)

  const allocatorFileMetaData =
    await fetchAllocatorListMetaData(allocatorUrlList)
  console.log('allocatorFileMetaData', allocatorFileMetaData)

  const allocators = extractAllocators(allocatorFileMetaData)
  console.log('allocators', allocators)

  return allocators
}

async function fetchAllocatorListMetaData(
  allocatorUrlList: Array<AllocatorFileMetaDataBase['git_url']>,
) {
  return Promise.all(allocatorUrlList.map(fetchAllocatorMetaData))
}

async function fetchAllocatorMetaData(
  allocatorUrl: AllocatorFileMetaData['git_url'],
) {
  try {
    const response = await fetch(allocatorUrl)
    const data = await response.json()
    console.log('fetchAllocatorMetaData - response.json()', data)
    return AllocatorFileMetaDataSchema.parse(data)
  } catch (error) {
    if (error instanceof ZodError) {
      logZodError(error, {
        location: 'fetchAllocatorMetaData',
        context: { allocatorUrl },
      })
    }
    return null
  }
}
