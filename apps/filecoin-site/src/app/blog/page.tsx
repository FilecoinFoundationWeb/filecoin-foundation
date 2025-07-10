import Link from 'next/link'

import { PATHS } from '@/constants/paths'

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
        <ul>
          {posts.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`${PATHS.BLOG.path}/${slug}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  )
}
