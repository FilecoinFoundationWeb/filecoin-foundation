import {
  type AllocatorFileMetaData,
  type AllocatorFileMetaDataBase,
  AllocatorFileMetaDataSchema,
} from '../schemas/AllocatorSchema'

import { extractAllocators } from './extractAllocators'
import { getAllocatorUrlList } from './getAllocatorUrlList'

export async function getAllocators() {
  const allocatorUrlList = await getAllocatorUrlList()

  const allocatorFileMetaData =
    await fetchAllocatorListMetaData(allocatorUrlList)

  return extractAllocators(allocatorFileMetaData)
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
    const response = await fetch(allocatorUrl, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_AUTH_TOKEN}`,
      },
    })
    const data = await response.json()
    return AllocatorFileMetaDataSchema.parse(data)
  } catch (error) {
    return null
  }
}
