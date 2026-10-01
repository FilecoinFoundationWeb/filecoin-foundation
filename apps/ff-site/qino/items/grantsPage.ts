import qino from '../'

import { FrontmatterSchema } from '@/grants/schemas/FrontmatterSchema'

export const grantsPageItem = qino.defineItem({
  file: '/pages/grants.md',
  schema: FrontmatterSchema,
})
