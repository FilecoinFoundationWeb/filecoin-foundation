import { sortPostsByDateDesc } from '@filecoin-foundation/utils/sortBlogPosts'

import { PATHS } from '@/constants/paths'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { CardGrid } from '@/components/CardGrid'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { BlogCard } from './components/BlogCard'
import type { BlogPost } from './types/blogPostType'
import { getBlogPostsData } from './utils/getBlogPostData'

export default async function Blog() {
  const posts = await getBlogPostsData()
  const sortedPosts = sortPostsByDateDesc(posts)
  const featuredPost = sortedPosts[0]

  return (
    <>
      <BackgroundImage withOverlay src={featuredPost.image?.url || ''}>
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
        <CardGrid variant="col2-two">
          {sortedPosts.map((post: BlogPost) => {
            const {
              title,
              slug,
              excerpt,
              categories,
              image,
              author,
              publishedOn,
            } = post
            return (
              <BlogCard
                key={title}
                title={title}
                slug={slug}
                description={excerpt}
                author={author}
                date={publishedOn}
                tags={categories}
                image={
                  image && {
                    src: image.url,
                    alt: title,
                  }
                }
              />
            )
          })}
        </CardGrid>
      </PageSection>
    </>
  )
}
