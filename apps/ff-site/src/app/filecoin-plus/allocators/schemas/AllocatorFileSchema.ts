import { z } from 'zod'

export const AllocatorFileMetaDataBaseSchema = z.object({
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

export type AllocatorFileMetaDataBase = z.infer<
  typeof AllocatorFileMetaDataBaseSchema
>
export type AllocatorFileMetaData = z.infer<typeof AllocatorFileMetaDataSchema>
