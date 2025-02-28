import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { getCategoryLabel } from '@/utils/categoryUtils'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'

import type { BlogPost } from '@/blog/types/blogPostType'

type FeaturedBlogPostsProps = {
  featuredBlogPosts: Array<BlogPost>
}

export function FeaturedBlogPosts({
  featuredBlogPosts,
}: FeaturedBlogPostsProps) {
  return (
    <CardGrid cols="smTwo">
      {featuredBlogPosts.map(
        ({ title, description, slug, image, category, publishedOn }) => {
          const categoryLabel = getCategoryLabel({
            collectionName: 'blog_posts',
            category,
          })

          return (
            <Card
              key={slug}
              metaData={[formatDate(publishedOn)]}
              tags={[{ text: categoryLabel }]}
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
