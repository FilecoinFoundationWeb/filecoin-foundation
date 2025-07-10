import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import { PageSection } from '@/components/PageSection'

import { BlogCard } from './components/BlogCard'
import blogPostsData from './test-data.json'
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
        {blogPostsData.map((post: any) => {
          const { title, excerpt, categories, image, author, date } = post
          return (
            <BlogCard
              key={title}
              title={title}
              description={excerpt}
              author={author}
              date={date}
              tags={categories}
              image={{
                src: image.src,
                alt: image.alt,
              }}
              cta={{
                href: `/`,
                baseDomain: 'https://filecoin.io',
              }}
            />
          )
        })}
      </PageSection>
    </>
  )
}
