import { allocatorSchema } from '../schema/AllocatorsSchema'

export function parseAllocatorData(allocatorData: any) {
  const parsedData = decodeAndParseContent(allocatorData.content)

  const result = allocatorSchema.safeParse(parsedData)

  return result.data
}

function decodeAndParseContent(content: string) {
  const decodedContent = atob(content)
  return JSON.parse(decodedContent)
}
