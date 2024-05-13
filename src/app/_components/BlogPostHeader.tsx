import Image from 'next/image'

import { Badge } from '@/components/Badge'
import { Heading } from '@/components/Heading'

import { type BlogPostData } from '@/types/blogPostTypes'

import { formatDate } from '@/utils/formatDate'

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
        {category && <Badge variant="secondary">{category}</Badge>}
        <Heading tag="h1" variant="4xl">
          {title}
        </Heading>
        {publishedOn && (
          <span className="inline-block text-blue-300">
            {formatDate(publishedOn)}
          </span>
        )}
      </div>

      {image && (
        <div className="relative aspect-video">
          <Image
            fill
            src={image.url}
            alt={image.alt}
            className="block rounded-lg object-cover"
          />
        </div>
      )}
    </header>
  )
}
