import { mkdir, writeFile } from 'fs/promises'
import { dirname } from 'path'

import { BLOG_RSS_PATH } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'

async function generateRSS() {
  try {
    console.log('Starting RSS feed generation...')

    const posts = await getBlogPostsData()
    console.log(`Found ${posts.length} blog posts`)

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Filecoin Foundation Blog</title>
    <link>${BASE_URL}/blog</link>
    <description>Latest updates from the Filecoin Foundation</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}${BLOG_RSS_PATH}" rel="self" type="application/rss+xml" />
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid>${BASE_URL}/blog/${post.slug}</guid>
      <pubDate>${post.publishedOn.toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
    </item>
    `,
      )
      .join('')}
  </channel>
</rss>`

    const outputPath = `./public${BLOG_RSS_PATH}`
    await mkdir(dirname(outputPath), { recursive: true })
    await writeFile(outputPath, rss)

    console.log('✅ RSS feed generated successfully at:', outputPath)
  } catch (error) {
    console.error('❌ Failed to generate RSS feed:', error)
    process.exit(1)
  }
}

generateRSS()
