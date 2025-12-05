import { z } from 'zod'

import { IssueNumberField } from './DigestIssueFrontmatterSchema'
import { DynamicBaseDataSchema } from './DynamicDataBaseSchema'
import { ImagePropsSchema } from './ImagePropsSchema'

const DigestArticleFrontmatterFields = {
  title: z.string(),
  'issue-number': IssueNumberField,
  authors: z
    .array(
      z.object({
        'first-name': z.string(),
        'last-name': z.string(),
        image: ImagePropsSchema.optional(),
        company: z.string(),
        bio: z.string().optional(),
      }),
    )
    .min(1, { message: 'At least one author is required' }),
  content: z.string(),
}

export const DigestArticleFrontmatterSchema = z.strictObject({
  ...DynamicBaseDataSchema.shape,
  ...DigestArticleFrontmatterFields,
})
