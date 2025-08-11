import { mkdir, writeFile } from 'fs/promises'
import { dirname } from 'path'

import { BASE_URL } from '../src/app/_constants/siteMetadata'
import { getBlogPostsData } from '../src/app/blog/utils/getBlogPostData'

import { BLOG_PATHS } from '@/blog/constants/paths'

async function generateRSS() {
  const posts = await getBlogPostsData()

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Filecoin Foundation Blog</title>
    <link>${BASE_URL}/blog</link>
    <description>Latest updates from the Filecoin Foundation</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}${BLOG_PATHS.RSS}" rel="self" type="application/rss+xml" />
    ${posts
      .map(
        (post) => `
    <item>
      <title>${post.title}</title>
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

  const outputPath = `./public${BLOG_PATHS.RSS}`
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, rss)

  console.log('RSS feed generated at:', outputPath)
}

generateRSS()
