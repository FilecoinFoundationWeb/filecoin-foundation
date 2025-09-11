import { Suspense } from 'react'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { sortPostsByDateDesc } from '@filecoin-foundation/utils/sortBlogPosts'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { BlogPostList } from './components/BlogPostList'
import { BLOG_SEO } from './constants/seo'
import { generateStructuredData } from './utils/generateStructuredData'
import { getBlogPostsDataWithTina } from './utils/getBlogPostDataWithTina'

export default async function Blog() {
  const posts = await getBlogPostsDataWithTina()
  const sortedPosts = sortPostsByDateDesc(posts)
  const featuredPost = posts[0]

  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(BLOG_SEO, posts)}
      />
      <Navigation backgroundVariant="light" />
      <BackgroundImage
        overlayVariant="dark"
        src={featuredPost.image?.url || graphicsData.fallback.data.src}
      >
        <PageSection paddingVariant="wide" backgroundVariant="transparentDark">
          <PageHeader
            kicker="Latest updates"
            title={featuredPost.title}
            description={featuredPost.excerpt}
            cta={
              <Button
                variant="primary"
                href={`${PATHS.BLOG.path}/${featuredPost.slug}`}
              >
                Read full article
              </Button>
            }
          />
        </PageSection>
      </BackgroundImage>

      <PageSection backgroundVariant="light" paddingVariant="compact">
        <Suspense>
          <BlogPostList posts={sortedPosts} />
        </Suspense>
      </PageSection>
    </>
  )
}

export const metadata = createMetadata({
  title: { absolute: BLOG_SEO.title },
  description: BLOG_SEO.description,
  path: PATHS.BLOG.path,
})
