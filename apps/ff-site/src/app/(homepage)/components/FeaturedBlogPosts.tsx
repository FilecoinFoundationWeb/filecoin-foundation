import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'

import { PATHS } from '@/constants/paths'

import type { BlogPost } from '@/qino/collections/blogPosts'

import { graphicsData } from '@/data/graphicsData'

import { getCategoryLabel } from '@/utils/getCategoryLabel'

import { Card } from '@/components/Card'

type FeaturedBlogPostsProps = {
  featuredBlogPosts: Array<BlogPost>
}

export function FeaturedBlogPosts({
  featuredBlogPosts,
}: FeaturedBlogPostsProps) {
  return (
    <CardGrid as="section" cols="smTwo">
      {featuredBlogPosts.map(
        ({
          title,
          description,
          _meta: { slug },
          image,
          category,
          publishedOn,
        }) => {
          const categoryLabel = getCategoryLabel({
            collectionName: 'blog_posts',
            category,
          })

          return (
            <Card
              key={slug}
              as="article"
              metaData={[formatDate(publishedOn)]}
              tags={[{ text: categoryLabel }]}
              description={{ text: description, isClamped: true }}
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
              title={{
                text: title,
              }}
            />
          )
        },
      )}
    </CardGrid>
  )
}
