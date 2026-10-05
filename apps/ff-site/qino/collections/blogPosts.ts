import type { Infer } from '@qino/cms'
import { compareDesc } from 'date-fns'

import { camelcaseKeysDeep } from '@/utils/camelcaseKeysDeep'
import { withSeoTitleFallback } from '@/utils/withSeoTitleFallback'

import qino from '../'

import { BlogPostFrontmatterSchema } from '@/blog/schemas/BlogPostFrontmatterSchema'

export const blogPostCollection = qino.defineCollection({
  directory: 'blog',
  extension: '.md',
  schema: BlogPostFrontmatterSchema.omit({ content: true })
    .transform(camelcaseKeysDeep)
    .transform((post) => withSeoTitleFallback(post)),
  views: (view) => ({
    default: view({
      sort: (a, b) => compareDesc(a.publishedOn, b.publishedOn),
    }),
  }),
})

export type BlogPost = Infer<typeof blogPostCollection>['output']
