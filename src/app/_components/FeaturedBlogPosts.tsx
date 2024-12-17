import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { getCategoryLabel } from '@/utils/categoryUtils'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'
import { getMetaData } from '@/blog/utils/getMetaData'
import { sortPostsByDateDesc } from '@/blog/utils/sortBlogPosts'

const blogPosts = getBlogPostsData()
const MAX_POSTS = 4

const sortedBlogPosts = sortPostsByDateDesc(blogPosts)

const featuredBlogPosts = sortedBlogPosts.slice(0, MAX_POSTS)

export function FeaturedBlogPosts() {
  if (featuredBlogPosts.length === 0) {
    return <p>No featured posts available.</p>
  }

  return (
    <CardGrid cols="smTwo">
      {featuredBlogPosts.map(
        ({ title, description, slug, image, category, publishedOn }) => {
          const tagLabel = getCategoryLabel({
            collectionName: 'blog_posts',
            category,
          })

          return (
            <Card
              key={slug}
              metaData={getMetaData(publishedOn)}
              tagLabels={tagLabel}
              title={title}
              description={description}
              textIsClamped={true}
              cta={{
                href: `${PATHS.BLOG.path}/${slug}`,
                text: 'Learn More',
              }}
              image={{
                ...(image || graphicsData.imageFallback.data),
                alt: '',
                objectFit: 'cover',
                sizes: buildImageSizeProp({
                  startSize: '100vw',
                  sm: '350px',
                  md: '480px',
                }),
              }}
            />
          )
        },
      )}
    </CardGrid>
  )
}
