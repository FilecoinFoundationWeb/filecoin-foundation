import { z } from 'zod'

import qino from '../'

import { EventFrontmatterSchema } from '@/events/schemas/EventFrontmatterSchema'

export const eventCollection = qino.defineCollection({
  directory: '/events',
  extension: '.md',
  schema: z.object({
    ...EventFrontmatterSchema.shape,
  }),
})
