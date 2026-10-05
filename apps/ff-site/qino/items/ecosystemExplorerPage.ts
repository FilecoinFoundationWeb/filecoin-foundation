import { camelcaseKeysDeep } from '@/utils/camelcaseKeysDeep'

import { FeaturedPageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import qino from '../'
import { ecosystemProjectCollection } from '../collections/ecosystemProjects'

export const ecosystemExplorerPageItem = qino.defineItem({
  file: 'pages/ecosystem-explorer/ecosystem-explorer.md',
  schema: FeaturedPageFrontmatterSchema.transform(camelcaseKeysDeep),
  relations: { featuredEntry: ecosystemProjectCollection },
  views: (view) => ({ default: view({ resolveRelations: 1 }) }),
})
