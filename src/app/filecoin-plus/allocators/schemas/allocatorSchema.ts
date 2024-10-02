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

export const AllocatorMetaDataSchema = z.object({
  name: z.string(),
  path: z.string(),
  sha: z.string(),
  size: z.number(),
  url: z.string().url(),
  html_url: z.string().url(),
  git_url: z.string().url(),
  download_url: z.string().url(),
  type: z.enum(['file']),
  content: z.string().optional(),
  encoding: z.enum(['base64']),
  _links: z
    .object({
      self: z.string().url(),
      git: z.string().url(),
      html: z.string().url(),
    })
    .optional(),
})

export type Allocator = z.infer<typeof AllocatorSchema>
