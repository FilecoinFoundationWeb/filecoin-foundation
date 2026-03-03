import { mkdir, writeFile } from 'fs/promises'
import { dirname } from 'path'

import { DEFAULT_LOCALE, LOCALES } from '@/i18n/locales'
import type { Locale } from '@/i18n/types'

import { getBlogRSSPath, PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'

async function generateFeedForLocale(locale: Locale) {
  const { Feed } = await import('feed')

  const localePrefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`
  const blogBaseUrl = `${BASE_URL}${localePrefix}${PATHS.BLOG.path}`
  const rssPath = getBlogRSSPath(locale)

  const feed = new Feed({
    title: 'Filecoin Blog',
    description: 'Latest updates from the Filecoin ecosystem',
    id: blogBaseUrl,
    link: blogBaseUrl,
    language: locale,
    copyright: 'All rights reserved',
    feedLinks: {
      rss2: `${BASE_URL}${rssPath}`,
    },
  })

  const posts = await getBlogPostsData(locale)
  console.log(`[${locale}] Found ${posts.length} blog posts`)

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${blogBaseUrl}/${post.slug}`,
      link: `${blogBaseUrl}/${post.slug}`,
      description: post.excerpt,
      date: post.publishedOn,
    })
  })

  const rssXml = feed.rss2()
  const outputPath = `./public${rssPath}`

  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, rssXml)
  console.log(`[${locale}] ✅ RSS feed generated at: ${outputPath}`)
}

async function generateRSS() {
  console.log('Starting RSS feed generation...')

  try {
    await Promise.all(LOCALES.map(generateFeedForLocale))
    console.log('✅ All RSS feeds generated successfully')
  } catch (error) {
    console.error('❌ Failed to generate RSS feeds:', error)
    process.exit(1)
  }
}

generateRSS()
