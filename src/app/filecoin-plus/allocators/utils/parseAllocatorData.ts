import { AllocatorSchema } from '../schema/AllocatorsSchema'

export function parseAllocatorData(allocatorData: any) {
  const parsedData = decodeAndParseContent(allocatorData.content)
  return AllocatorSchema.parse(parsedData)
}

function decodeAndParseContent(content: string) {
  const decodedContent = atob(content)
  return JSON.parse(decodedContent)
}
