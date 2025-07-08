import Link from 'next/link'

import { Button } from '@/components/Button'

import { BlogPageHeader } from './components/BlogPageHeader'
import { getBlogPostsData } from './utils/getBlogPostData'

import headerImage from '@/assets/images/042425-PDP_BlogHeader.webp'

export default async function Blog() {
  const posts = await getBlogPostsData()

  return (
    <>
      <BlogPageHeader
        title="Introducing Proof of Data Possession (PDP): Verifiable Hot Storage on Filecoin"
        description="Filecoin introduces verifiable hot storage with Proof of Data Possession, enabling fast, on-demand access while maintaining cryptographic integrity."
        kicker="Latest News"
        backgroundImage={headerImage}
      >
        <Button
          href="/blog/introducing-proof-of-data"
          variant="primaryDark"
        >
          Read more
        </Button>
      </BlogPageHeader>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
