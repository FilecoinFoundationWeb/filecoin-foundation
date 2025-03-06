import { SeoMetadataSchema } from '@filecoin-foundation/utils/schemas/SeoMetadataSchema'
import { z } from 'zod'

import { MarkdownEntryPathSchema } from './MarkdownEntryPathSchema'

const TitleSchema = z.string()
const DescriptionSchema = z.string().or(z.array(z.string()))

export const MarkdownPageSchema = z.object({
  attributes: z.object({
    header: z.object({
      title: TitleSchema,
    }),
    seo: SeoMetadataSchema,
  }),
  body: z.string(),
})

export const PageFrontmatterSchema = z.object({
  header: z.object({
    title: TitleSchema,
    description: DescriptionSchema,
  }),
  seo: SeoMetadataSchema,
})

export const FeaturedPageFrontmatterSchema = PageFrontmatterSchema.extend({
  featured_entry: MarkdownEntryPathSchema,
})
