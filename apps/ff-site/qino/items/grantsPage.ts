import { camelcaseKeysDeep } from '@/utils/camelcaseKeysDeep'

import qino from '../'
import { ecosystemProjectCollection } from '../collections/ecosystemProjects'

import { FrontmatterSchema } from '@/grants/schemas/FrontmatterSchema'

export const grantsPageItem = qino.defineItem({
  file: 'pages/grants.md',
  schema: FrontmatterSchema.transform(camelcaseKeysDeep),
  relations: { 'featuredGrantGraduates[*]': ecosystemProjectCollection },
  views: (view) => ({ default: view({ resolveRelations: 1 }) }),
})
