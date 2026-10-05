import type { Infer } from '@qino/cms'

import { camelcaseKeysDeep } from '@/utils/camelcaseKeysDeep'
import { withSeoTitleFallback } from '@/utils/withSeoTitleFallback'

import qino from '../'

import { MonthlyUpdateFrontmatterSchema } from '@/filecoin-plus/monthly-updates/schemas/MonthlyUpdateFrontmatterSchema'

export const monthlyUpdateCollection = qino.defineCollection({
  directory: 'filecoin-plus/monthly-updates',
  extension: '.md',
  schema: MonthlyUpdateFrontmatterSchema.omit({ content: true })
    .transform(camelcaseKeysDeep)
    .transform((update) => withSeoTitleFallback(update)),
})

export type MonthlyUpdate = Infer<typeof monthlyUpdateCollection>['output']
