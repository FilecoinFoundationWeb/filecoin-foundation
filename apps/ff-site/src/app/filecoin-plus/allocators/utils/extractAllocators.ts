import { type AllocatorFileMetaData } from '../schemas/AllocatorFileSchema'
import { AllocatorSchema } from '../schemas/AllocatorsSchema'

export function extractAllocators(
  allocatorFileMetaData: Array<AllocatorFileMetaData | null>,
) {
  const filteredAllocatorFileMetaData = allocatorFileMetaData.filter(
    (file) => file !== null,
  )

  return filteredAllocatorFileMetaData
    .map((file) => decodeAllocatorFileMetaDataContent(file.content))
    .map((decodedContent) => getParsedAllocator(decodedContent))
    .filter((allocator) => allocator !== null)
}

function decodeAllocatorFileMetaDataContent(
  content: AllocatorFileMetaData['content'],
) {
  const decodedContent = atob(content)
  return JSON.parse(decodedContent)
}

function getParsedAllocator(decodedContent: string) {
  const result = AllocatorSchema.safeParse(decodedContent)
  if (result.success) return result.data
  console.error('Failed to parse allocator:', {
    error: result.error.message,
    decodedContent: JSON.stringify(decodedContent, null, 2),
  })
  return null
}
