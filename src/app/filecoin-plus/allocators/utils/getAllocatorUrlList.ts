const GITHUB_ALLOCATORS_REPO =
  'https://api.github.com/repos/filecoin-project/Allocator-Registry/contents/Allocators'
const SPEC_FILE_NAME = 'Allocator JSON SPEC.json'
const JSON_EXTENSION = '.json'

export async function getAllocatorUrlList() {
  const response = await fetch(GITHUB_ALLOCATORS_REPO, {
    headers: {
      Authorization: `token ${process.env.GITHUB_AUTH_TOKEN}`,
    },
  })
  const allocatorsData = await response.json()

  return extractAllocatorUrls(allocatorsData)
}

function extractAllocatorUrls(allocatorsData: Array<any>) {
  return allocatorsData.filter(isValidAllocatorFile).map((file) => file.url)
}

function isValidAllocatorFile(file: any) {
  return file.name.endsWith(JSON_EXTENSION) && file.name !== SPEC_FILE_NAME
}
