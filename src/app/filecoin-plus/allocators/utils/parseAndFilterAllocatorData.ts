import * as Sentry from '@sentry/nextjs'

import { parseAllocatorData } from './parseAllocatorData'

export function parseAndFilterAllocatorData(allocatorData: Array<any>) {
  return allocatorData
    .map(parseAllocatorWithErrorHandling)
    .filter(isNonNullAllocator)
}

function parseAllocatorWithErrorHandling(allocator: any) {
  try {
    return parseAllocatorData(allocator)
  } catch (error) {
    handleParsingError(error, 'Error in parseAllocatorData')
    return null
  }
}

function isNonNullAllocator(data: any) {
  return data !== null
}

function handleParsingError(error: unknown, context: string) {
  Sentry.captureException(error, { extra: { context } })
}
