import { z } from 'zod'

import { DynamicBaseDataSchema } from '@filecoin-foundation/utils/schemas/DynamicDataBaseSchema'

const GuestEditorSchema = z.object({
  'full-name': z.string(),
  title: z.string(),
})

const DigestIssueFields = {
  'issue-number': z.string(),
  title: z.string(),
  description: z.string(),
  'guest-editor': GuestEditorSchema.optional(),
  articles: z.array(
    z.object({
      title: z.string(),
      'article-number': z.number(),
    }),
  ),
}

export const DigestIssueFrontmatterSchema = z.strictObject({
  ...DynamicBaseDataSchema.shape,
  ...DigestIssueFields,
})

export type DigestIssueFrontmatter = z.infer<
  typeof DigestIssueFrontmatterSchema
>
