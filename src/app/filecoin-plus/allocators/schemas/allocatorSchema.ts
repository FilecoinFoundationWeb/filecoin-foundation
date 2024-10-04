import { z } from 'zod'

const ApplicationSchema = z.object({
  required_sps: z.string(),
  required_replicas: z.string(),
  allocation_bookkeeping: z.string().nullable(),
})

export const AllocatorSchema = z.object({
  name: z.string(),
  metapathway_type: z.string(),
  location: z.string(),
  application: ApplicationSchema,
})

const AllocatorFileMetaDataBaseSchema = z.object({
  name: z.string().default(''),
  path: z.string().default(''),
  sha: z.string().default(''),
  size: z.number().default(0),
  url: z.string().url().default(''),
  html_url: z.string().url().default(''),
  git_url: z.string().url().default(''),
  download_url: z.string().url().default(''),
  type: z.enum(['file']).default('file'),
  _links: z
    .object({
      self: z.string().url().default(''),
      git: z.string().url().default(''),
      html: z.string().url().default(''),
    })
    .optional(),
})

export const AllocatorFileMetaDataSchema =
  AllocatorFileMetaDataBaseSchema.extend({
    content: z.string().default(''),
    encoding: z.enum(['base64']).default('base64'),
  })

export const AllocatorFileListMetaDataBaseSchema = z.array(
  AllocatorFileMetaDataBaseSchema,
)

export type Allocator = z.infer<typeof AllocatorSchema>
export type AllocatorFileMetaDataBase = z.infer<
  typeof AllocatorFileMetaDataBaseSchema
>
export type AllocatorFileMetaData = z.infer<typeof AllocatorFileMetaDataSchema>
