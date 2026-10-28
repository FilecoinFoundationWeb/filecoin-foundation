import type { Infer } from '@qino/cms'

import { camelcaseKeysDeep } from '@filecoin-foundation/utils/camelcaseKeysDeep'
import { withSeoTitleFallback } from '@filecoin-foundation/utils/withSeoTitleFallback'

import qino from '../'

import { LearningResourceFrontmatterSchema } from '@/learning-resources/schemas/LearningResourceFrontmatterSchema'

export const learningResourceCollection = qino.defineCollection({
  directory: 'learning-resources',
  extension: '.md',
  schema: LearningResourceFrontmatterSchema.transform(
    camelcaseKeysDeep,
  ).transform((resource) => withSeoTitleFallback(resource)),
})

export type LearningResource = Infer<
  typeof learningResourceCollection
>['output']
export type LearningResourcePreview = Omit<LearningResource, 'markdown' | 'raw'>
