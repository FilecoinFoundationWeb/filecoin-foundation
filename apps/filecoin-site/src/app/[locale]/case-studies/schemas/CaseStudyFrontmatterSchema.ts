import { z } from 'zod'

import { SeoMetadataWithOptionalTitleSchema } from '@filecoin-foundation/utils/schemas/SeoMetadataSchema'

export const CaseStudyFrontmatterSchema = z.strictObject({
  title: z.string(),
  cardDescription: z.string(),
  headerDescription: z.string().optional(),
  introDescription: z.string().optional(),
  challenge: z.string().optional(),
  solution: z.string().optional(),
  results: z.string().optional(),
  image: z
    .object({
      url: z.string(),
      alt: z.string().optional(),
    })
    .optional(),
  featured: z.boolean().optional(),
  content: z.string().optional(),
  seo: SeoMetadataWithOptionalTitleSchema.optional(),
})

export type CaseStudyFrontmatter = z.infer<typeof CaseStudyFrontmatterSchema>
