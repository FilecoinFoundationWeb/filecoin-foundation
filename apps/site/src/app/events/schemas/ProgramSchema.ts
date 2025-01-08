import { z } from 'zod'

import { EventBaseFrontmatterSchema } from './EventBaseFrontmatterSchema'

export const ProgramSchema = z
  .object({
    kicker: z.string().optional().default('Explore'),
    title: z.string().optional().default('Events'),
    events: z
      .array(
        EventBaseFrontmatterSchema.extend({
          location: z.string(),
        }),
      )
      .nonempty(),
  })
  .strict()
  .optional()
