import { z } from 'zod'

const AllowedCategories = z.union([
  z.literal('updates'),
  z.literal('events'),
  z.literal('interviews'),
  z.literal('awards'),
])

export const BlogPostFrontmatterSchema = z.strictObject({
  title: z.string(),
  author: z.string().optional(),
  draft: z.boolean().optional(),
  excerpt: z.string(),
  share_image: z.string().optional(),
  image: z
    .object({
      url: z.string(),
    })
    .optional(),
  publishedOn: z.coerce.date(),
  categories: z.array(AllowedCategories),
  dim_image: z.boolean().optional(),
  content: z.string(),
  seo: z.object({
    description: z.string().max(220),
  }),
})
