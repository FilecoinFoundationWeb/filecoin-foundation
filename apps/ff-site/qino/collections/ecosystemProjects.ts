import type { Infer } from '@qino/cms'

import { camelcaseKeysDeep } from '@/utils/camelcaseKeysDeep'
import { withSeoTitleFallback } from '@/utils/withSeoTitleFallback'

import qino from '../'

import { METADATA_TITLE_SUFFIX } from '@/ecosystem-explorer/constants/metadata'
import { EcosystemProjectFrontmatterSchema } from '@/ecosystem-explorer/schemas/EcosystemProjectFrontmatterSchema'

export const ecosystemProjectCollection = qino.defineCollection({
  directory: 'ecosystem-explorer',
  extension: '.md',
  schema: EcosystemProjectFrontmatterSchema.omit({ content: true })
    .transform(camelcaseKeysDeep)
    .transform((project) =>
      withSeoTitleFallback(project, METADATA_TITLE_SUFFIX),
    ),
})

export type EcosystemProject = Infer<
  typeof ecosystemProjectCollection
>['output']
