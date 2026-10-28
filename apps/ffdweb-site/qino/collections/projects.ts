import type { Infer } from '@qino/cms'

import { camelcaseKeysDeep } from '@filecoin-foundation/utils/camelcaseKeysDeep'
import { withSeoTitleFallback } from '@filecoin-foundation/utils/withSeoTitleFallback'

import qino from '../'

import { ProjectFrontmatterSchema } from '@/projects/schemas/ProjectFrontmatterSchema'

export const projectCollection = qino.defineCollection({
  directory: 'projects',
  extension: '.md',
  schema: ProjectFrontmatterSchema.transform(camelcaseKeysDeep).transform(
    (project) => withSeoTitleFallback(project),
  ),
})

export type Project = Infer<typeof projectCollection>['output']
