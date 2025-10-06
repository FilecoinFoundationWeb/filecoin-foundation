import { z } from 'zod'

import { DynamicBaseDataSchema } from '@filecoin-foundation/utils/schemas/DynamicDataBaseSchema'

const GuestEditorSchema = z.object({
  'full-name': z.string(),
  title: z.string(),
})

const DigestIssueFields = {
  'issue-number': z.number(),
  title: z.string(),
  description: z.array(z.string()),
  'guest-editor': GuestEditorSchema.optional(),
  'published-on': z.string(),
  articles: z.array(z.string()),
}

export const DigestIssueFrontmatterSchema = z.strictObject({
  ...DynamicBaseDataSchema.shape,
  ...DigestIssueFields,
})

export type DigestIssueFrontmatter = z.infer<
  typeof DigestIssueFrontmatterSchema
>
