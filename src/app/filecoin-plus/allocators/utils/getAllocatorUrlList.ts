import * as Sentry from '@sentry/nextjs'

const GITHUB_ALLOCATORS_REPO =
  'https://api.github.com/repos/filecoin-project/Allocator-Registry/contents/Allocators'
const SPEC_FILE_NAME = 'Allocator JSON SPEC.json'
const JSON_EXTENSION = '.json'

export async function getAllocatorUrlList() {
  try {
    const response = await fetch(GITHUB_ALLOCATORS_REPO, {
      headers: {
        Authorization: `token ${process.env.GITHUB_AUTH_TOKEN}`,
      },
    })
    await validateResponse(response)
    const allocatorsData = await response.json()
    return extractAllocatorUrls(allocatorsData)
  } catch (error) {
    handleError(error, 'Error fetching allocator URLs')
    return []
  }
}

async function validateResponse(response: Response) {
  if (!response.ok) {
    throw new Error(`Failed to fetch allocator URLs: ${response.statusText}`)
  }
}

function extractAllocatorUrls(allocatorsData: Array<any>) {
  return allocatorsData.filter(isValidAllocatorFile).map((file) => file.url)
}

function isValidAllocatorFile(file: any) {
  return file.name.endsWith(JSON_EXTENSION) && file.name !== SPEC_FILE_NAME
}

function handleError(error: unknown, contextMessage: string) {
  Sentry.captureException(error, { extra: { context: contextMessage } })
}
