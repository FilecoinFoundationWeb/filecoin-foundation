import { z } from 'zod'

import { InternalDatacapSchema } from './DatacapSchema'

const ApplicationSchema = z.object({
  required_sps: z.string(),
  required_replicas: z.string(),
  allocation_bookkeeping: z.string().nullable(),
})

const MAX_LOCATION_CHARACTER_LENGTH = 25

const LocationSchema = z.string().transform((value) => {
  if (value.length >= MAX_LOCATION_CHARACTER_LENGTH) {
    return value.slice(0, MAX_LOCATION_CHARACTER_LENGTH) + '...'
  }

  return value
})

export const AllocatorSchema = z.object({
  name: z.string(),
  address: z.string(),
  metapathway_type: z.string(),
  location: LocationSchema,
  application: ApplicationSchema,
})

const AllocatorFileMetaDataBaseSchema = z.object({
  name: z.string(),
  path: z.string(),
  sha: z.string(),
  size: z.number(),
  url: z.url(),
  html_url: z.url(),
  git_url: z.url(),
  download_url: z.url(),
  type: z.enum(['file']),
  _links: z
    .object({
      self: z.url(),
      git: z.url(),
      html: z.url(),
    })
    .optional(),
})

export const AllocatorFileMetaDataSchema =
  AllocatorFileMetaDataBaseSchema.extend({
    content: z.string(),
    encoding: z.enum(['base64']),
  })

export const AllocatorFileListMetaDataBaseSchema = z.array(
  AllocatorFileMetaDataBaseSchema,
)

export const AllocatorWithInternalDatacapSchema = AllocatorSchema.extend({
  address: InternalDatacapSchema.shape.address,
  availableDatacap: InternalDatacapSchema.shape.allowance,
  usedDatacap: InternalDatacapSchema.shape.remainingDatacap, // remainingDatacap shows how much datacap allocator has used
})

export type AllocatorFileMetaDataBase = z.infer<
  typeof AllocatorFileMetaDataBaseSchema
>
export type AllocatorFileMetaData = z.infer<typeof AllocatorFileMetaDataSchema>
export type AllocatorWithDatacap = z.infer<
  typeof AllocatorWithInternalDatacapSchema
>
