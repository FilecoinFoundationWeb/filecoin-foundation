import { z } from 'zod'

import { isValidMarkdownPath } from '@/utils/fileUtils'

export const MarkdownEntryPathSchema = z.string().refine(isValidMarkdownPath, {
  message: 'Invalid markdown file path format',
})
