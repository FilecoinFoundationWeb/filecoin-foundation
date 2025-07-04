import { z } from 'zod'

const AllowedCategories = z.union([
  z.literal('updates'),
  z.literal('events'),
  z.literal('interviews'),
  z.literal('awards'),
])

export const BlogPostFrontmatterSchema = z
  .object({
    title: z.string(),
    draft: z.boolean().optional(),
    excerpt: z.string().optional(),
    share_image: z.string().optional(),
    image: z
      .object({
        url: z.string(),
      })
      .optional(),
    date: z.coerce.date().optional(),
    categories: z.array(AllowedCategories),
    dim_image: z.boolean().optional(),
    content: z.string(),
  })
  .strict()
