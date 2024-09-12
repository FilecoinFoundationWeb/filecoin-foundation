import { z } from 'zod'

export const SearchParamsSchema = z
  .object({
    status: z.literal('success'),
    prNumber: z.coerce.number(),
  })
  .or(
    z.object({
      status: z.literal('error'),
      message: z.string(),
    }),
  )
