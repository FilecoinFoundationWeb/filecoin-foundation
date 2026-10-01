import { z } from 'zod'

import qino from '../'

import { BlogPostFrontmatterSchema } from '@/blog/schemas/BlogPostFrontmatterSchema'

export const blogPostCollection = qino.defineCollection({
  directory: '/blog',
  extension: '.md',
  schema: z.object({
    ...BlogPostFrontmatterSchema.omit({ content: true }).shape,
    markdown: z.string(),
  }),
})
