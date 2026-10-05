import { camelcaseKeysDeep } from '@/utils/camelcaseKeysDeep'

import qino from '../'
import { ecosystemProjectCollection } from '../collections/ecosystemProjects'

import { FrontmatterSchema } from '@/(homepage)/schemas/FrontmatterSchema'

export const homePageItem = qino.defineItem({
  file: 'pages/home.md',
  schema: FrontmatterSchema.transform(camelcaseKeysDeep),
  relations: { 'featuredEcosystemProjects[*]': ecosystemProjectCollection },
  views: (view) => ({ default: view({ resolveRelations: 1 }) }),
})
