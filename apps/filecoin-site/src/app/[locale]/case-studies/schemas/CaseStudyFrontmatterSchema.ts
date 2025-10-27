import { z } from 'zod'

import { SeoMetadataWithOptionalTitleSchema } from '@filecoin-foundation/utils/schemas/SeoMetadataSchema'
const HexColorSchema = z.string().regex(/^#[0-9A-Fa-f]{6}$/)

export const CaseStudyFrontmatterSchema = z.strictObject({
  title: z.string(),
  cardDescription: z.string(),
  headerDescription: z.string(),
  introDescription: z.string(),
  challenge: z.string(),
  solution: z.string(),
  results: z.string(),
  logo: z.object({
    bgColor: HexColorSchema.optional(),
    color: HexColorSchema.optional(),
  }),
  image: z
    .object({
      url: z.string(),
      alt: z.string().optional(),
    })
    .optional(),
  featured: z.boolean().optional(),
  content: z.string(),
  seo: SeoMetadataWithOptionalTitleSchema.optional(),
})

export type CaseStudyFrontmatter = z.infer<typeof CaseStudyFrontmatterSchema>
