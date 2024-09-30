import * as Sentry from '@sentry/nextjs'

const ERROR_MISSING_CONTENT = 'Allocator data missing content field'
const ERROR_PARSING_JSON = 'Error decoding or parsing JSON'

export function parseAllocatorData(allocatorData: any) {
  if (!hasContentField(allocatorData)) return null

  try {
    const parsedData = decodeAndParseContent(allocatorData.content)
    return mapParsedDataToAllocatorProps(parsedData)
  } catch (error) {
    handleParsingError(error)
    return null
  }
}

function hasContentField(allocatorData: any) {
  if (!allocatorData?.content) {
    Sentry.captureMessage(ERROR_MISSING_CONTENT)
    return false
  }
  return true
}

function decodeAndParseContent(content: string) {
  const decodedContent = atob(content)
  return JSON.parse(decodedContent)
}

function mapParsedDataToAllocatorProps(parsedData: any) {
  return {
    name: parsedData.name || '',
    type: parsedData.metapathway_type || '',
    region: parsedData.location || '',
    requiredSps: parsedData.application?.required_sps || '',
    requiredReplicas: parsedData.application?.required_replicas || '',
    apply: parsedData.application?.allocation_bookkeeping || '',
  }
}

function handleParsingError(error: unknown) {
  Sentry.captureException(error, { extra: { context: ERROR_PARSING_JSON } })
}
