import { z } from 'zod'

import { MarkdownEntryPathSchema } from './MarkdownEntryPathSchema'
import { SeoMetadataSchema } from './SeoMetadataSchema'

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

export const BaseFrontmatterSchema = z.object({
  header: z.object({
    title: TitleSchema,
    description: DescriptionSchema,
  }),
  seo: SeoMetadataSchema,
})

export const FeaturedPageFrontmatterSchema = BaseFrontmatterSchema.extend({
  featured_entry: MarkdownEntryPathSchema,
})
