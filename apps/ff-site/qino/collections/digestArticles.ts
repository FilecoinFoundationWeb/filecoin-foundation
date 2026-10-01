import { z } from 'zod'

import { DigestArticleFrontmatterSchema } from '@filecoin-foundation/utils/schemas/DigestArticleFrontmatterSchema'

import qino from '../'

export const digestArticleCollection = qino.defineCollection({
  directory: '/digest/articles',
  extension: '.md',
  schema: z.object({
    ...DigestArticleFrontmatterSchema.omit({ content: true }).shape,
    markdown: z.string(),
  }),
})
