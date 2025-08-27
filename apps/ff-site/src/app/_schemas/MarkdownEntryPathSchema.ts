import { z } from 'zod'

import { MARKDOWN_EXTENSION } from '@filecoin-foundation/utils/constants/fileExtensions'

import { CONTENT_ROOT, WORKSPACE_ROOT } from '@/constants/paths'

export const MarkdownEntryPathSchema = z.string().refine(isValidMarkdownPath, {
  error: 'Invalid markdown file path format',
})

export function isValidMarkdownPath(path: string) {
  return (
    path.startsWith(`${WORKSPACE_ROOT}/${CONTENT_ROOT}`) &&
    path.endsWith(MARKDOWN_EXTENSION)
  )
}
