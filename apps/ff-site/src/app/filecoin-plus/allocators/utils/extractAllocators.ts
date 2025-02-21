import {
  type AllocatorFileMetaData,
  AllocatorSchema,
} from '../schemas/AllocatorSchema'

export function extractAllocators(
  allocatorFileMetaData: Array<AllocatorFileMetaData | null>,
) {
  const filteredAllocatorFileMetaData = allocatorFileMetaData.filter(
    (file) => file !== null,
  )

  return filteredAllocatorFileMetaData
    .map((file) => decodeAllocatorFileMetaDataContent(file.content))
    .map((decodedContent) => getParsedAllocator(decodedContent))
}

function decodeAllocatorFileMetaDataContent(
  content: AllocatorFileMetaData['content'],
) {
  const decodedContent = atob(content)
  return JSON.parse(decodedContent)
}

function getParsedAllocator(decodedContent: string) {
  return AllocatorSchema.parse(decodedContent)
}
