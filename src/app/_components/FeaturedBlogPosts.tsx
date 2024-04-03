import { Card } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'

import { getBlogPostsData } from '@/utils/getBlogPostData'

import { PATHS } from '@/constants/paths'

type FeaturedBlogPostsProps = {
  maxPosts?: number
}

const blogPosts = getBlogPostsData()

export function FeaturedBlogPosts({ maxPosts = 4 }: FeaturedBlogPostsProps) {
  const featuredBlogPosts = blogPosts
    // .filter((post) => post.featured)
    .slice(0, maxPosts)

  if (featuredBlogPosts.length === 0) {
    return <p>No featured posts available.</p>
  }

  return (
    <CardLayout type="blogPost">
      {featuredBlogPosts.map(({ title, description, slug, image }) => (
        <Card
          key={slug}
          title={title}
          description={description}
          cta={{ href: PATHS.BLOG.getPathWithSlugs([slug]) }}
          image={image}
          textIsClamped={true}
        />
      ))}
    </CardLayout>
  )
}
