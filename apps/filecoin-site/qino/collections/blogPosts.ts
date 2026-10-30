import { CHINESE_LOCALE, ENGLISH_LOCALE } from '@/i18n/locales'
import type { Locale } from '@/i18n/types'

import type { Infer } from '@qino/cms'
import { compareDesc } from 'date-fns'

import { camelcaseKeysDeep } from '@filecoin-foundation/utils/camelcaseKeysDeep'

import qino from '../'

import { BlogPostFrontmatterSchema } from '@/blog/schemas/BlogPostFrontmatterSchema'

function defineBlogPostCollection<L extends Locale>(locale: L) {
  return qino.defineCollection({
    directory: `blog/posts/${locale}`,
    extension: '.md',
    schema: BlogPostFrontmatterSchema.transform(camelcaseKeysDeep).transform(
      (post) => ({
        ...post,
        publishedOn: post.date,
        seo: {
          title: post.seo?.title || post.title,
          description: post.seo?.description || post.excerpt,
        },
      }),
    ),
    views: (view) => ({
      default: view({}),
      published: view({
        filter: (post) => post.draft !== true,
        sort: (a, b) => compareDesc(a.publishedOn, b.publishedOn),
      }),
    }),
  })
}

export const blogPostEnCollection = defineBlogPostCollection(ENGLISH_LOCALE)
export const blogPostZhCnCollection = defineBlogPostCollection(CHINESE_LOCALE)

export const blogPostCollections = {
  [ENGLISH_LOCALE]: blogPostEnCollection,
  [CHINESE_LOCALE]: blogPostZhCnCollection,
} satisfies Record<Locale, unknown>

export type BlogPost = Infer<typeof blogPostEnCollection>['output']
export type BlogPostPreview = Omit<BlogPost, 'markdown' | 'raw'>
