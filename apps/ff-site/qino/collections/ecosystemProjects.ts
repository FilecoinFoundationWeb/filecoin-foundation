import { z } from 'zod'

import qino from '../'

import { EcosystemProjectFrontmatterSchema } from '@/ecosystem-explorer/schemas/EcosystemProjectFrontmatterSchema'

export const ecosystemProjectCollection = qino.defineCollection({
  directory: '/ecosystem-explorer',
  extension: '.md',
  schema: z.object({
    ...EcosystemProjectFrontmatterSchema.omit({ content: true }).shape,
    markdown: z.string(),
  }),
})
