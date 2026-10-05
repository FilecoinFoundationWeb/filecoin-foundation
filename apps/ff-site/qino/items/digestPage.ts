import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const digestPageItem = qino.defineItem({
  file: 'pages/digest.md',
  schema: PageFrontmatterSchema,
})
