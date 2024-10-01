import { AllocatorSchema } from '../schemas/allocatorSchema'

export function parseAndFilterAllocatorData(allocatorData: Array<any>) {
  return allocatorData.map(validateAndParseAllocator).filter(isNonNullAllocator)
}

function validateAndParseAllocator(allocator: any) {
  const parsedAllocator = parseAllocatorData(allocator)
  return AllocatorSchema.parse(parsedAllocator)
}

function parseAllocatorData(allocatorData: any) {
  const parsedData = decodeAndParseContent(allocatorData.content)
  return AllocatorSchema.parse(parsedData)
}

function decodeAndParseContent(content: string) {
  const decodedContent = atob(content)
  return JSON.parse(decodedContent)
}

function isNonNullAllocator(allocator: any) {
  return (
    allocator !== null &&
    typeof allocator === 'object' &&
    allocator.name &&
    allocator.metapathway_type &&
    allocator.location &&
    allocator.application?.required_sps &&
    allocator.application?.required_replicas
  )
}
