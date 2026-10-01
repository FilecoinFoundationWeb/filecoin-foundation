import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const allocatorsPageItem = qino.defineItem({
  file: '/pages/filecoin-plus/allocators.md',
  schema: PageFrontmatterSchema,
})
