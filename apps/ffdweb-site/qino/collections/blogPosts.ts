import type { Infer } from '@qino/cms'
import removeMarkdown from 'remove-markdown'

import { camelcaseKeysDeep } from '@filecoin-foundation/utils/camelcaseKeysDeep'
import { withSeoTitleFallback } from '@filecoin-foundation/utils/withSeoTitleFallback'

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
      augment: (post) => ({
        description: removeMarkdown(post.markdown),
      }),
    }),
  }),
})

export type BlogPost = Infer<typeof blogPostCollection>['output']
