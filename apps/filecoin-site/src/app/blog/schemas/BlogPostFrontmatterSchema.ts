import { z } from 'zod'

import { getBlogPostData } from '../utils/getBlogPostData'

const AllowedCategories = z.union([
  z.literal('updates'),
  z.literal('events'),
  z.literal('interviews'),
  z.literal('awards'),
])

export const BlogPostFrontmatterSchema = z
  .object({
    title: z.string(),
    author: z.string().optional(),
    draft: z.boolean().optional(),
    excerpt: z.string().optional(),
    share_image: z.string().optional(),
    image: z
      .object({
        url: z.string(),
      })
      .optional(),
    date: z.coerce.date(),
    categories: z.array(AllowedCategories),
    dim_image: z.boolean().optional(),
    content: z.string(),
  })
  .strict()

export type BlogPost = Awaited<ReturnType<typeof getBlogPostData>>
