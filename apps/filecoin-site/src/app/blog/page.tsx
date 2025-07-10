import { Card } from '@filecoin-foundation/ui/Card/Card'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import { PageSection } from '@/components/PageSection'

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
        <ul>
          {blogPostsData.map((post: any) => (
            <Card
              key={post.title}
              as="li"
              title={{ text: post.title }}
              description={{ text: post.excerpt }}
              tags={post.categories.map((category: string) => ({
                text: category,
              }))}
              image={{
                src: post.image.src,
                alt: post.image.alt,
              }}
              cta={{
                href: `/`,
                baseDomain: 'https://filecoin.io',
              }}
            />
          ))}
        </ul>
      </PageSection>
    </>
  )
}
