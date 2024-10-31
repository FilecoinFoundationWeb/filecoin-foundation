import { z } from 'zod'

export const DatacapSchema = z.object({
  address: z.string(),
  remainingDatacap: z.string().nullable(),
  allowance: z.string().nullable(),
})

export type Datacap = z.infer<typeof DatacapSchema>
