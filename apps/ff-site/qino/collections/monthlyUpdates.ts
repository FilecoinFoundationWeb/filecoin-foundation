import { z } from 'zod'

import qino from '../'

import { MonthlyUpdateFrontmatterSchema } from '@/filecoin-plus/monthly-updates/schemas/MonthlyUpdateFrontmatterSchema'

export const monthlyUpdateCollection = qino.defineCollection({
  directory: '/filecoin-plus/monthly-updates',
  extension: '.md',
  schema: z.object({
    ...MonthlyUpdateFrontmatterSchema.omit({ content: true }).shape,
    markdown: z.string(),
  }),
})
