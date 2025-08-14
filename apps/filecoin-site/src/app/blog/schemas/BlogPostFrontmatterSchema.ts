import { z } from 'zod'

import { SeoMetadataWithOptionalTitleSchema } from '@filecoin-foundation/utils/schemas/SeoMetadataSchema'

export const BLOG_CATEGORY_VALUES = [
  'updates',
  'events',
  'interviews',
  'awards',
] as const

export const AllowedCategoriesSchema = z.enum(BLOG_CATEGORY_VALUES)

export const BlogPostFrontmatterSchema = z.strictObject({
  title: z.string(),
  author: z.string().optional(),
  draft: z.boolean().optional(),
  excerpt: z.string(),
  share_image: z.string().optional(),
  image: z.object({ url: z.string() }).optional(),
  published_on: z.coerce.date(),
  categories: z.array(AllowedCategoriesSchema),
  dim_image: z.boolean().optional(),
  content: z.string(),
  seo: SeoMetadataWithOptionalTitleSchema,
})
