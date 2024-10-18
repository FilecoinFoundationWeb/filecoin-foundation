import { z } from 'zod'

const actionSchema = z.enum(['create', 'update']).default('create')

export const SearchParamsSchema = z
  .object({
    action: actionSchema,
    status: z.literal('success'),
    prNumber: z.coerce.number(),
  })
  .or(
    z.object({
      action: actionSchema,
      status: z.literal('error'),
      message: z.string(),
    }),
  )
