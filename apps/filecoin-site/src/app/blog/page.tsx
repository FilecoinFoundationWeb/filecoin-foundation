import { CardGrid } from '@filecoin-foundation/ui/CardGrid'

import { PATHS } from '@/constants/paths'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { BlogCard } from './components/BlogCard'
import type { BlogPost } from './types/blogPostType'
import { getBlogPostsData } from './utils/getBlogPostData'

export default async function Blog() {
  const posts = await getBlogPostsData()
  const featuredPost = posts[0]

  return (
    <>
      <BackgroundImage withOverlay src={featuredPost.image?.url || ''}>
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            kicker="Latest updates"
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
        <CardGrid as="ul" cols="lgTwo">
          {posts.map((post: BlogPost) => {
            const { title, slug, excerpt, categories, image, author, publishedOn } =
              post
            return (
              <BlogCard
                key={title}
                title={title}
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
                cta={{
                  href: `${PATHS.BLOG.path}/${slug}`,
                  ariaLabel: `Read more about ${title}`,
                }}
              />
            )
          })}
        </CardGrid>
      </PageSection>
    </>
  )
}
