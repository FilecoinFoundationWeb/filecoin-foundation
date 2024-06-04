import Image from 'next/image'

import { Badge } from '@/components/Badge'
import { Heading } from '@/components/Heading'
import { StaticImage } from '@/components/StaticImage'

import { type BlogPostData } from '@/types/blogPostTypes'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { formatDate } from '@/utils/formatDate'

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
        {category && <Badge>{category}</Badge>}
        <Heading tag="h1" variant="4xl">
          {title}
        </Heading>
        {publishedOn && (
          <span className="inline-block text-blue-300">
            {formatDate(publishedOn)}
          </span>
        )}
      </div>

      {image ? (
        <div className="relative aspect-video">
          <Image
            fill
            priority
            src={image.url}
            alt={image.alt}
            className="rounded-lg object-cover"
            sizes={buildImageSizeProp({ md: '100vw', then: '700px' })}
          />
        </div>
      ) : (
        <StaticImage
          {...graphicsData.imageFallback}
          priority
          quality={100}
          className="aspect-video rounded-lg object-cover"
        />
      )}
    </header>
  )
}
