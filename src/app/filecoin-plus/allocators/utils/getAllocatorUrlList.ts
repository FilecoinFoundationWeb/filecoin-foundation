import {
  AllocatorFileListMetaDataBaseSchema,
  type AllocatorFileMetaDataBase,
} from '../schemas/AllocatorSchema'

const GITHUB_ALLOCATORS_REPO =
  'https://api.github.com/repos/filecoin-project/Allocator-Registry/contents/Allocators'

export async function getAllocatorUrlList() {
  const response = await fetch(GITHUB_ALLOCATORS_REPO, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_AUTH_TOKEN}`,
    },
  })
  const allocatorsData = await response.json()
  const parsedData = AllocatorFileListMetaDataBaseSchema.parse(allocatorsData)
  return extractAllocatorUrls(parsedData)
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
