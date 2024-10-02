import {
  type AllocatorMetaData,
  AllocatorsMetaDataSchema,
} from '../schemas/allocatorSchema'

const GITHUB_ALLOCATORS_REPO =
  'https://api.github.com/repos/filecoin-project/Allocator-Registry/contents/Allocators'

export async function getAllocatorUrlList() {
  const response = await fetch(GITHUB_ALLOCATORS_REPO, {
    headers: {
      Authorization: `token ${process.env.GITHUB_AUTH_TOKEN}`,
    },
  })
  const allocatorsData = await response.json()
  console.log('🔥🔥🔥🔥🔥🔥🔥', { allocatorsData })
  // const parsedData = AllocatorsMetaDataSchema.parse(allocatorsData)
  return extractAllocatorUrls(allocatorsData)
}

function extractAllocatorUrls(allocatorsData: Array<AllocatorMetaData>) {
  return allocatorsData.filter(isValidAllocatorFile).map((file) => file.url)
}

function isValidAllocatorFile(file: AllocatorMetaData) {
  const allocatorFilePattern = /^\d{3,4}\.json$/
  return allocatorFilePattern.test(file.name)
}
