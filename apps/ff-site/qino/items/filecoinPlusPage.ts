import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const filecoinPlusPageItem = qino.defineItem({
  file: '/pages/filecoin-plus/filecoin-plus.md',
  schema: PageFrontmatterSchema,
})
