import { z } from 'zod'

export const DatacapSchema = z.object({
  address: z.string(),
  remainingDatacap: z.string(),
  allowance: z.string(),
})

const AllowanceArrayItemSchema = z.object({
  id: z.number(),
  error: z.string(),
  height: z.number(),
  msgCID: z.string(),
  retries: z.number(),
  addressId: z.string(),
  allowance: z.string(),
  auditTrail: z.string().nullable(),
  verifierId: z.number(),
  auditStatus: z.string().nullable(),
  issueCreateTimestamp: z.number().nullable(),
  createMessageTimestamp: z.number(),
})

const BaseDatacapSchema = z.object({
  id: z.number(),
  addressId: z.string(),
  address: z.string(),
  auditTrail: z.string(),
  retries: z.number(),
  name: z.string(),
  orgName: z.string(),
  removed: z.boolean(),
  initialAllowance: z.string(),
  allowance: z.string(),
  inffered: z.boolean(),
  isMultisig: z.boolean(),
  createdAtHeight: z.number(),
  issueCreateTimestamp: z.number().nullable(),
  createMessageTimestamp: z.number(),
  verifiedClientsCount: z.number(),
  receivedDatacapChange: z.string(),
  allowanceArray: z.array(AllowanceArrayItemSchema),
  auditStatus: z.string().nullable(),
  remainingDatacap: z.string(),
})

export type Datacap = z.infer<typeof DatacapSchema>
export type BaseDatacap = z.infer<typeof BaseDatacapSchema>
