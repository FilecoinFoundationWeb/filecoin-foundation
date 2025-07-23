import { z } from 'zod'

import {
  WORKSPACE_ROOT,
  CONTENT_ROOT,
  MARKDOWN_EXTENSION,
} from '@/constants/paths'

export const MarkdownEntryPathSchema = z.string().refine(isValidMarkdownPath, {
  error: 'Invalid markdown file path format',
})

export function isValidMarkdownPath(path: string) {
  return (
    path.startsWith(`${WORKSPACE_ROOT}/${CONTENT_ROOT}`) &&
    path.endsWith(MARKDOWN_EXTENSION)
  )
}
