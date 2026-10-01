import { FeaturedPageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const ecosystemExplorerPageItem = qino.defineItem({
  file: '/pages/ecosystem-explorer/ecosystem-explorer.md',
  schema: FeaturedPageFrontmatterSchema,
})
