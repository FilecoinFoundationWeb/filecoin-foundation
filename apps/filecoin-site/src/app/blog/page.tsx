import Link from 'next/link'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import { PageSection } from '@/components/PageSection'

import { getBlogPostsData } from './utils/getBlogPostData'

export default async function Blog() {
  const posts = await getBlogPostsData()
  const featuredPost = posts[0]

  return (
    <>
      <BackgroundImage withOverlay src={featuredPost.image?.url || ''}>
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            kicker="Latest Updates"
            title={featuredPost.title}
            description={featuredPost.excerpt}
            cta={
              <Button variant="primaryDark" href={`/blog/${featuredPost.slug}`}>
                Read more
              </Button>
            }
          />
        </PageSection>
      </BackgroundImage>

      <PageSection backgroundVariant="light">
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  )
}
