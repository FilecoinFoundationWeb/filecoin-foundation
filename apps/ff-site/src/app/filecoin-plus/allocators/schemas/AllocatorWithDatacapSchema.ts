import { z } from 'zod'

import { AllocatorSchema } from './AllocatorsSchema'
import { APIDatacapSchema } from './DatacapSchema'

export const AllocatorWithDatacapSchema = AllocatorSchema.extend({
  address: APIDatacapSchema.shape.address,
  availableDatacap: APIDatacapSchema.shape.allowance,
  usedDatacap: APIDatacapSchema.shape.remainingDatacap, // remainingDatacap shows how much datacap allocator has used
})

export type AllocatorWithDatacap = z.infer<typeof AllocatorWithDatacapSchema>
