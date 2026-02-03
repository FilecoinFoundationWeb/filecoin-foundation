import { z } from 'zod'

const AuditOutcomeSchema = z.enum([
  'GRANTED',
  'DOUBLE',
  'DOUBLED',
  'MATCH',
  'MATCHED',
  'THROTTLE',
  'THROTTLED',
  'REJECT',
  'REJECTED',
  'PENDING',
  'UNKNOWN',
])

const ApplicationAuditSchema = z.enum([
  'Public Open',
  'Enterprise Data',
  'Automated',
  'Automated Allocator',
  'Other',
  'On-Ramps',
])

export const MetapathwayTypeSchema = z.enum(['MDMA', 'RKH', 'AMA', 'ORMA'])

const ToolingSchema = z.enum(['smart_contract_allocator'])

const GitHubHandleSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/, {
    message: 'Invalid GitHub username format',
  })

const NullableDateTimeSchema = z
  .string()
  .transform((val) => (val.trim() ? val : null))
  .pipe(z.iso.datetime().nullable())

const FilecoinAddressSchema = z
  .string()
  .regex(/^f(0\d+|[123][a-z2-7]+|4\d+f[a-z0-9]+)$/, {
    message: 'Invalid Filecoin address',
  })

const AuditSchema = z.object({
  started: z.iso.datetime(),
  ended: NullableDateTimeSchema,
  dc_allocated: NullableDateTimeSchema,
  outcome: AuditOutcomeSchema.or(z.literal('')),
  datacap_amount: z.coerce.number().nonnegative(),
})

const HistorySchema = z.object({
  'Application Submitted': z.iso.datetime(),
  'KYC Submitted': z.iso.datetime(),
  Approved: z.iso.datetime(),
  Declined: NullableDateTimeSchema,
  'DC Allocated': NullableDateTimeSchema,
})

// Some "audit" values contain leading/trailing spaces in the Allocator repo: https://github.com/filecoin-project/Allocator-Registry/tree/main/Allocators
// Once these values are cleaned, we can simplify "audit" to be `z.array(ApplicationAuditSchema)`
// When this is merged, we can simplify: https://github.com/filecoin-project/Allocator-Registry/pull/1142
const ApplicationSchema = z.object({
  audit: z.preprocess((val) => {
    if (!Array.isArray(val)) return val
    return val.map((v) => (typeof v === 'string' ? v.trim() : v))
  }, z.array(ApplicationAuditSchema)),
  distribution: z.array(z.string()),
  tranche_schedule: z.string().nullable(),
  required_sps: z.string().nullable(),
  required_replicas: z.coerce.number().nonnegative().nullable(),
  tooling: z.array(ToolingSchema).optional(),
  github_handles: z.array(GitHubHandleSchema),
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
