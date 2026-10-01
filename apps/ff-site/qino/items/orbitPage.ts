import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'

export const orbitPageItem = qino.defineItem({
  file: '/pages/orbit.md',
  schema: PageFrontmatterSchema,
})
