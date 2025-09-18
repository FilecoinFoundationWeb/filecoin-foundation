import { z } from 'zod'

const APIDatacapAllowanceHistorySchema = z.object({
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

export const APIDatacapSchema = z.object({
  id: z.number(),
  addressId: z.string(),
  address: z.string(),
  auditTrail: z.string(),
  retries: z.number(),
  name: z.string().nullish(),
  orgName: z.string().nullish(),
  removed: z.boolean(),
  initialAllowance: z.string(),
  allowance: z.string(),
  inffered: z.boolean(),
  isMultisig: z.boolean(),
  createdAtHeight: z.number(),
  issueCreateTimestamp: z.number().nullable(),
  createMessageTimestamp: z.number(),
  verifiedClientsCount: z.number(),
  receivedDatacapChange: z.string().nullable(),
  allowanceArray: z.array(APIDatacapAllowanceHistorySchema),
  auditStatus: z.string().nullable(),
  remainingDatacap: z.string(),
})

export const GetDatacapStatsResponseSchema = z.object({
  data: z.array(APIDatacapSchema),
})
