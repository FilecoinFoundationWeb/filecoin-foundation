import type { Locale } from '@/i18n/types'

import { getTranslations } from 'next-intl/server'

import { getFeaturedPosts as sharedGetFeaturedPosts } from '@filecoin-foundation/utils/getFeaturedPosts'
import { omitMarkdown } from '@filecoin-foundation/utils/omitMarkdown'

import { PATHS } from '@/constants/paths'

import { blogPostCollections } from '@/qino/collections/blogPosts'

import { translateBlogCategory } from './translateBlogCategory'

export async function getFeaturedBlogPosts(locale: Locale, limit: number) {
  const [posts, t] = await Promise.all([
    blogPostCollections[locale].getEntries({ view: 'published' }),
    getTranslations(PATHS.BLOG.path),
  ])

  return sharedGetFeaturedPosts({ posts: posts.map(omitMarkdown), limit }).map(
    ({ categories, ...rest }) => ({
      ...rest,
      tags: categories.map((cat) => translateBlogCategory(t, cat)),
    }),
  )
}
