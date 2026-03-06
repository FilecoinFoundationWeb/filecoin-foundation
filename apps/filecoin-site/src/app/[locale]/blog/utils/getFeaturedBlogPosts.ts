import type { Locale } from '@/i18n/types'

import { getTranslations } from 'next-intl/server'

import { getFeaturedBlogPosts as sharedGetFeaturedBlogPosts } from '@filecoin-foundation/utils/getFeaturedBlogPosts'

import { PATHS } from '@/constants/paths'

import { getBlogPostsData } from './getBlogPostData'
import { translateBlogCategory } from './translateBlogCategory'

export async function getFeaturedBlogPosts(locale: Locale, limit: number) {
  const [posts, t] = await Promise.all([
    getBlogPostsData(locale),
    getTranslations(PATHS.BLOG.path),
  ])

  return sharedGetFeaturedBlogPosts({ posts, limit }).map(
    ({ categories, ...rest }) => ({
      ...rest,
      tags: categories.map((cat) => translateBlogCategory(t, cat)),
    }),
  )
}
