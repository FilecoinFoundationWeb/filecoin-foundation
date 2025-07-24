import { Suspense } from 'react'

import { sortPostsByDateDesc } from '@filecoin-foundation/utils/sortBlogPosts'

import { PATHS } from '@/constants/paths'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { BlogPostList } from './components/BlogPostList'
import { getBlogPostsData } from './utils/getBlogPostData'

export default async function Blog() {
  const posts = await getBlogPostsData()
  const sortedPosts = sortPostsByDateDesc(posts)
  const featuredPost = sortedPosts[0]

  return (
    <>
      <BackgroundImage
        overlayVariant="dark"
        src={featuredPost.image?.url || ''}
      >
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            kicker="Latest updates"
            title={featuredPost.title}
            description={featuredPost.excerpt}
            cta={
              <Button
                variant="primary"
                href={`${PATHS.BLOG.path}/${featuredPost.slug}`}
              >
                Read more
              </Button>
            }
          />
        </PageSection>
      </BackgroundImage>

      <PageSection backgroundVariant="light">
        <Suspense>
          <BlogPostList posts={sortedPosts} />
        </Suspense>
      </PageSection>
    </>
  )
}
