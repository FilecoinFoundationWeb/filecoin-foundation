import { DynamicImage } from '@/components/DynamicImage'
import { Heading } from '@/components/Heading'
import { TagLabel } from '@/components/TagLabel'

import { type BlogPostData } from '@/types/blogPostTypes'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { getCategoryLabel } from '@/utils/categoryUtils'
import { formatDate } from '@/utils/dateUtils'

import { graphicsData } from '@/data/graphicsData'

type BlogPostHeaderProps = Pick<
  BlogPostData,
  'title' | 'publishedOn' | 'image' | 'category'
>

export function BlogPostHeader({
  title,
  publishedOn,
  image,
  category,
}: BlogPostHeaderProps) {
  return (
    <header className="space-y-6">
      <div className="space-y-4">
        <TagLabel>
          {getCategoryLabel({ collectionName: 'blog_posts', category })}
        </TagLabel>
        <Heading tag="h1" variant="4xl">
          {title}
        </Heading>
        {publishedOn && (
          <span className="inline-block text-blue-300">
            {formatDate(publishedOn)}
          </span>
        )}
      </div>

      <div className="relative aspect-video">
        <DynamicImage
          fill
          priority
          quality={100}
          src={image.src}
          alt={image.alt}
          className="rounded-lg"
          sizes={buildImageSizeProp({ startSize: '100vw', md: '680px' })}
          fallback={graphicsData.imageFallback}
        />
      </div>
    </header>
  )
}
