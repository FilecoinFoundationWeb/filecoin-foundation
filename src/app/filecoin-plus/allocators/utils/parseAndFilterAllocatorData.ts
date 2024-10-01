import { AllocatorMetaDataSchema } from '../schema/AllocatorsSchema'

import { parseAllocatorData } from './parseAllocatorData'

export function parseAndFilterAllocatorData(allocatorData: Array<any>) {
  return allocatorData.map(validateAndParseAllocator).filter(isNonNullAllocator)
}

function validateAndParseAllocator(allocator: any) {
  const result = AllocatorMetaDataSchema.parse(allocator)

  return parseAllocatorData(result)
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
