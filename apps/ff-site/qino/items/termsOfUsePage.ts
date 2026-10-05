import { MarkdownPageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const termsOfUsePageItem = qino.defineItem({
  file: 'pages/terms-of-use.md',
  schema: MarkdownPageFrontmatterSchema,
})
