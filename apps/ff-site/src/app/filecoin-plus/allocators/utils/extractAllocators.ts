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
    .map((decodedContent) =>
      getParsedAllocator({
        decodedContent,
        allocatorName: decodedContent.name,
      }),
    )
    .filter((allocator) => allocator !== null)
}

function decodeAllocatorFileMetaDataContent(
  content: AllocatorFileMetaData['content'],
) {
  const decodedContent = atob(content)
  return JSON.parse(decodedContent)
}

type GetParsedAllocatorParams = {
  decodedContent: z.input<typeof AllocatorSchema>
  allocatorName: string
}

function getParsedAllocator({
  decodedContent,
  allocatorName,
}: GetParsedAllocatorParams) {
  const result = AllocatorSchema.safeParse(decodedContent)
  if (result.success) return result.data
  console.error('Failed to parse allocator:', {
    error: z.prettifyError(result.error),
    allocatorName,
  })

  Sentry.captureException(result.error, {
    tags: { context: 'allocator_parse' },
    extra: { allocatorName, formattedError: z.prettifyError(result.error) },
  })
  return null
}
