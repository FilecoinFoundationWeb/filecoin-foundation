import { z } from 'zod'

import { DynamicBaseDataSchema } from '@filecoin-foundation/utils/schemas/DynamicDataBaseSchema'
import { ImagePropsSchema } from '@filecoin-foundation/utils/schemas/ImagePropsSchema'

const GuestEditorSchema = z.object({
  'full-name': z.string(),
  title: z.string(),
})

const DigestIssueFields = {
  'issue-number': z.number().int().positive(),
  title: z.string(),
  description: z.string(),
  'guest-editor': GuestEditorSchema,
  image: ImagePropsSchema.optional(),
}

export const DigestIssueFrontmatterSchema = z.strictObject({
  ...DynamicBaseDataSchema.shape,
  ...DigestIssueFields,
})

export type DigestIssueFrontmatter = z.infer<
  typeof DigestIssueFrontmatterSchema
>
