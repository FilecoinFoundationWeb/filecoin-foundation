import { z } from 'zod'

import { EventBaseFrontmatterSchema } from './EventBaseFrontmatterSchema'

export const ProgramSchema = z
  .strictObject({
    kicker: z.string().optional().default('Explore'),
    title: z.string().optional().default('Events'),
    events: z
      .array(
        EventBaseFrontmatterSchema.extend({
          location: z.string(),
        }),
      )
      .min(1),
  })
  .optional()
