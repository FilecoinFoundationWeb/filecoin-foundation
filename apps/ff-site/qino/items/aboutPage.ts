import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const aboutPageItem = qino.defineItem({
  file: 'pages/about.md',
  schema: PageFrontmatterSchema,
})
