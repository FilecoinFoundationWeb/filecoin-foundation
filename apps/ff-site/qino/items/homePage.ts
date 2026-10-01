import qino from '../'

import { FrontmatterSchema } from '@/(homepage)/schemas/FrontmatterSchema'

export const homePageItem = qino.defineItem({
  file: '/pages/home.md',
  schema: FrontmatterSchema,
})
