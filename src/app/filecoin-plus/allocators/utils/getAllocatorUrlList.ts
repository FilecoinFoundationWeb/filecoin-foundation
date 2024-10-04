import {
  AllocatorFileListMetaDataBaseSchema,
  type AllocatorFileMetaDataBase,
} from '../schemas/allocatorSchema'

const GITHUB_ALLOCATORS_REPO =
  'https://api.github.com/repos/filecoin-project/Allocator-Registry/contents/Allocators'

export async function getAllocatorUrlList() {
  const response = await fetch(GITHUB_ALLOCATORS_REPO, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_AUTH_TOKEN}`,
    },
  })
  const allocatorsData = await response.json()
  console.log('allocatorsData', allocatorsData)

  const parsedData = AllocatorFileListMetaDataBaseSchema.parse(allocatorsData)
  console.log('parsedData', parsedData)

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
