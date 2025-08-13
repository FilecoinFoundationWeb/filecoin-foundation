import { mkdir, writeFile } from 'fs/promises'
import { dirname } from 'path'

import { Feed } from 'feed'

import { BLOG_RSS_PATH, PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'

const BLOG_BASE_URL = `${BASE_URL}${PATHS.BLOG.path}`

const FEED = new Feed({
  title: 'Filecoin Blog',
  description: 'Latest updates from the Filecoin ecosystem',
  id: BLOG_BASE_URL,
  link: BLOG_BASE_URL,
  language: 'en',
  copyright: 'All rights reserved',
  feedLinks: {
    rss2: `${BASE_URL}${BLOG_RSS_PATH}`,
  },
})

async function generateRSS() {
  console.log('Starting RSS feed generation...')

  const posts = await getBlogPostsData()
  console.log(`Found ${posts.length} blog posts`)

  posts.forEach((post) => {
    FEED.addItem({
      title: post.title,
      id: `${BLOG_BASE_URL}/${post.slug}`,
      link: `${BLOG_BASE_URL}/${post.slug}`,
      description: post.excerpt,
      date: post.publishedOn,
    })
  })

  const rssXml = FEED.rss2()

  try {
    const outputPath = `./public${BLOG_RSS_PATH}`
    await mkdir(dirname(outputPath), { recursive: true })
    await writeFile(outputPath, rssXml)
    console.log('✅ RSS feed generated successfully at:', outputPath)
  } catch (error) {
    console.error('❌ Failed to write RSS feed:', error)
    process.exit(1)
  }
}

generateRSS()
