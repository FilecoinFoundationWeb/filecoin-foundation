import { z } from 'zod'

import { DigestIssueFrontmatterSchema } from '@filecoin-foundation/utils/schemas/DigestIssueFrontmatterSchema'

import qino from '../'

export const digestIssueCollection = qino.defineCollection({
  directory: '/digest/issues',
  extension: '.md',
  schema: z.object({
    ...DigestIssueFrontmatterSchema.shape,
  }),
})
