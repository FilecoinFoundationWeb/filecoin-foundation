import * as Sentry from '@sentry/nextjs'
import { z } from 'zod'

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
    .map((decodedContent) => AllocatorSchema.safeParse(decodedContent))
    .filter((result, index) => {
      if (!result.success) {
        reportAllocatorParseFailure({
          error: result.error,
          fileName: filteredAllocatorFileMetaData[index].name,
        })
      }
      return result.success
    })
    .map((result) => result.data)
}

function decodeAllocatorFileMetaDataContent(
  content: AllocatorFileMetaData['content'],
) {
  const decodedContent = atob(content)
  return JSON.parse(decodedContent)
}

type ReportAllocatorParseFailureParams = {
  error: z.ZodError
  fileName: string
}

function reportAllocatorParseFailure({
  error,
  fileName,
}: ReportAllocatorParseFailureParams) {
  const prettyError = z.prettifyError(error)
  console.error('Failed to parse allocator:', {
    error: prettyError,
    allocatorPath: fileName,
  })
  Sentry.captureException(error, {
    tags: { context: 'allocator_parse' },
    extra: { error: prettyError, allocatorPath: fileName },
  })
}
