import { CHINESE_LOCALE, ENGLISH_LOCALE } from '@/i18n/locales'
import type { Locale } from '@/i18n/types'

import qino from '../'

import { BlogPostFrontmatterSchema } from '@/blog/schemas/BlogPostFrontmatterSchema'

function defineBlogPostCollection<L extends Locale>(locale: L) {
  return qino.defineCollection({
    directory: `blog/posts/${locale}`,
    extension: '.md',
    schema: BlogPostFrontmatterSchema.omit({ content: true }),
  })
}

export const blogPostEnCollection = defineBlogPostCollection(ENGLISH_LOCALE)
export const blogPostZhCnCollection = defineBlogPostCollection(CHINESE_LOCALE)

export const blogPostCollections = {
  [ENGLISH_LOCALE]: blogPostEnCollection,
  [CHINESE_LOCALE]: blogPostZhCnCollection,
} satisfies Record<Locale, unknown>
