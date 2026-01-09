import { z } from 'zod'

import { SeoMetadataWithOptionalTitleSchema } from '@filecoin-foundation/utils/schemas/SeoMetadataSchema'

export const CaseStudyFrontmatterSchema = z.strictObject({
  title: z.string(),
  publishedOn: z.coerce.date(),
  updatedOn: z.coerce.date().optional(),
  cardDescription: z.string(),
  pageDescription: z.string().optional(),
  challenge: z.string().optional(),
  solution: z.string().optional(),
  results: z.string().optional(),
  image: z
    .object({
      src: z.string(),
      alt: z.string().optional(),
    })
    .optional(),
  featured: z.boolean().optional(),
  content: z.string().optional(),
  website: z.string(),
  seo: SeoMetadataWithOptionalTitleSchema.optional(),
})

export type CaseStudyFrontmatter = z.infer<typeof CaseStudyFrontmatterSchema>
