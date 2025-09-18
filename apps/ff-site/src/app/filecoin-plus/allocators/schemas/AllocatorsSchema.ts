import { z } from 'zod'

const AuditOutcomeSchema = z.enum([
  'GRANTED',
  'DOUBLED',
  'MATCH',
  'MATCHED',
  'THROTTLE',
  'THROTTLED',
  'REJECT',
  'REJECTED',
  'PENDING',
])

const ApplicationAuditSchema = z.enum([
  'Public Open',
  'Enterprise Data',
  'Automated',
  'Automated Allocator',
  'Other',
])

export const MetapathwayTypeSchema = z.enum(['MDMA', 'RKH', 'AMA', 'ORMA'])

const OptionalIsoDateSchema = z.iso.datetime().or(z.literal(''))

const FilecoinAddressSchema = z.string().regex(/^f[a-zA-Z0-9]+$/, {
  message: 'Invalid Filecoin address',
})

const AuditSchema = z.object({
  started: z.iso.datetime(),
  ended: OptionalIsoDateSchema,
  dc_allocated: OptionalIsoDateSchema,
  outcome: AuditOutcomeSchema.or(z.literal('')),
  datacap_amount: z.coerce.number(),
})

const HistorySchema = z.object({
  'Application Submitted': z.iso.datetime(),
  'KYC Submitted': z.iso.datetime(),
  Approved: z.iso.datetime(),
  Declined: OptionalIsoDateSchema,
  'DC Allocated': OptionalIsoDateSchema,
})

// Some "audit" values contain leading/trailing spaces in the Allocator repo: https://github.com/filecoin-project/Allocator-Registry/tree/main/Allocators
// Once these values are cleaned, we can simplify "audit" to be `z.array(ApplicationAuditSchema)`
const ApplicationSchema = z.object({
  audit: z.preprocess((val) => {
    if (!Array.isArray(val)) return val
    return val.map((v) => (typeof v === 'string' ? v.trim() : v))
  }, z.array(ApplicationAuditSchema)),
  distribution: z.array(z.string()),
  tranche_schedule: z.string().nullable(),
  required_sps: z.string().nullable(),
  required_replicas: z.coerce.number().nullable(),
  tooling: z.array(z.string()).optional(),
  github_handles: z.array(z.string()),
  allocation_bookkeeping: z.url(),
  client_contract_address: FilecoinAddressSchema.or(z.literal('')),
})

export const AllocatorSchema = z
  .object({
    application_number: z.number(),
    address: FilecoinAddressSchema,
    name: z.string(),
    allocator_id: FilecoinAddressSchema.optional(),
    organization: z.string(),
    metapathway_type: MetapathwayTypeSchema.optional(),
    ma_address: FilecoinAddressSchema.optional(),
    pathway_addresses: z.object({
      msig: FilecoinAddressSchema,
      signers: z.array(FilecoinAddressSchema).optional(),
    }),
    associated_org_addresses: z.string(),
    application: ApplicationSchema,
    history: HistorySchema,
    audits: z.array(AuditSchema),
    old_allocator_id: FilecoinAddressSchema.or(z.literal('')),
  })
  .strict()
