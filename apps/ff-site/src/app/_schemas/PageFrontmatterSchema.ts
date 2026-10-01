import { z } from 'zod'

import { SeoMetadataSchema } from '@filecoin-foundation/utils/schemas/SeoMetadataSchema'

import { MarkdownEntryPathSchema } from './MarkdownEntryPathSchema'

const TitleSchema = z.string()
const DescriptionSchema = z.string().or(z.array(z.string()))

export const MarkdownPageFrontmatterSchema = z.object({
  header: z.object({
    title: TitleSchema,
  }),
  seo: SeoMetadataSchema,
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
