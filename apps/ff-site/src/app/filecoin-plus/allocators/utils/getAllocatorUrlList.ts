import { Octokit } from '@octokit/rest'
import { z } from 'zod'

import {
  AllocatorFileMetaDataBaseSchema,
  type AllocatorFileMetaDataBase,
} from '../schemas/AllocatorFileSchema'

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

  return z.array(AllocatorFileMetaDataBaseSchema).parse(allocatorsData)
}

function extractAllocatorUrls(
  allocatorsData: Array<AllocatorFileMetaDataBase>,
) {
  return allocatorsData.filter(isValidAllocatorFile).map((file) => file.url)
}

function isValidAllocatorFile(file: AllocatorFileMetaDataBase) {
  const allocatorFilePattern = /^rec[A-Za-z0-9]+\.json$/
  return allocatorFilePattern.test(file.name)
}
