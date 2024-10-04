import { z } from 'zod'

const ApplicationSchema = z.object({
  required_sps: z.string().default(''),
  required_replicas: z.string().default(''),
  allocation_bookkeeping: z.string().nullable().default(null),
})

export const AllocatorSchema = z.object({
  name: z.string().default(''),
  metapathway_type: z.string().default(''),
  location: z.string().default(''),
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
