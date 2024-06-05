import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'

import { BlogPostData } from '@/types/blogPostTypes'

import { getBlogPostsData } from '@/utils/getBlogPostData'

import { PATHS } from '@/constants/paths'

const blogPosts = getBlogPostsData()
const MAX_POSTS = 4

const getRecentBlogPosts = (posts: BlogPostData[], maxPosts: number) => {
  return posts
    .sort(
      (a, b) =>
        new Date(b.publishedOn!).getTime() - new Date(a.publishedOn!).getTime(),
    )
    .slice(0, maxPosts)
}

const featuredBlogPosts = getRecentBlogPosts(blogPosts, MAX_POSTS)

export function FeaturedBlogPosts() {
  if (featuredBlogPosts.length === 0) {
    return <p>No featured posts available.</p>
  }

  return (
    <CardGrid cols="smTwo">
      {featuredBlogPosts.map(({ title, description, slug, image }) => (
        <Card
          key={slug}
          title={title}
          description={description}
          image={image}
          textIsClamped={true}
          cta={{
            href: `${PATHS.BLOG.path}/${slug}`,
            text: 'Learn More',
          }}
        />
      ))}
    </CardGrid>
  )
}
