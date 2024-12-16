import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { getCategoryLabel } from '@/utils/categoryUtils'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'

import type { BlogPost } from '@/blog/types/blogPostType'
import { getMetaData } from '@/blog/utils/getMetaData'

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
              metaData={getMetaData(publishedOn)}
              tags={[{ text: categoryLabel }]}
              title={title}
              description={description}
              textIsClamped={true}
              cta={{
                href: `${PATHS.BLOG.path}/${slug}`,
                text: 'Learn More',
              }}
              image={{
                ...image,
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
