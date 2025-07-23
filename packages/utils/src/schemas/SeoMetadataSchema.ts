import { z } from 'zod'

const BaseSeoMetadataFields = {
  description: z.string().max(220),
}

export const SeoMetadataSchema = z.strictObject({
  ...BaseSeoMetadataFields,
  title: z.string(),
})

export const SeoMetadataWithOptionalTitleSchema = z.strictObject({
  ...BaseSeoMetadataFields,
  title: z.string().optional(),
})

export type SeoMetadata = z.infer<typeof SeoMetadataSchema>
