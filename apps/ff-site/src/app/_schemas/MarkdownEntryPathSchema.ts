import { isValidMarkdownPath } from '@filecoin-foundation/utils/fileUtils'
import { z } from 'zod'


export const MarkdownEntryPathSchema = z.string().refine(isValidMarkdownPath, {
  message: 'Invalid markdown file path format',
})
