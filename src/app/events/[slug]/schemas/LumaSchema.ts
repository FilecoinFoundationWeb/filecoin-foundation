import { z } from 'zod'

export const GeoAddressSchema = z.object({
  address: z.string(),
})

const LumaEventSchema = z.object({
  api_id: z.string(),
  name: z.string(),
  description: z.string().optional().default(''),
  start_at: z.coerce.date(),
  end_at: z.coerce.date().optional(),
  url: z.string(),
  geo_address_json: GeoAddressSchema.optional(),
})

export const LumaResponseSchema = z.object({
  entries: z.array(
    z.object({
      event: LumaEventSchema,
    }),
  ),
})

export type LumaEvent = z.infer<typeof LumaEventSchema>
export type LumaEventEntry = {
  event: LumaEvent
}
