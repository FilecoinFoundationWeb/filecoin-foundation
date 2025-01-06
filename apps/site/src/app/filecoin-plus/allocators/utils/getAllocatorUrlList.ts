import { Octokit } from '@octokit/rest'

import {
  AllocatorFileListMetaDataBaseSchema,
  type AllocatorFileMetaDataBase,
} from '../schemas/AllocatorSchema'

const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN })

export async function getAllocatorUrlList() {
  const allocatorsData = await getAllocatorList()
  return extractAllocatorUrls(allocatorsData)
}

async function getAllocatorList() {
  const { data: allocatorsData } = await octokit.repos.getContent({
    owner: 'filecoin-project',
    repo: 'Allocator-Registry',
    path: 'Allocators',
  })

  return AllocatorFileListMetaDataBaseSchema.parse(allocatorsData)
}

function extractAllocatorUrls(
  allocatorsData: Array<AllocatorFileMetaDataBase>,
) {
  return allocatorsData.filter(isValidAllocatorFile).map((file) => file.url)
}

function isValidAllocatorFile(file: AllocatorFileMetaDataBase) {
  const allocatorFilePattern = /^\d{3,4}\.json$/
  return allocatorFilePattern.test(file.name)
}
