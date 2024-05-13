import Image from 'next/image'

import { Badge } from '@/components/Badge'
import { Heading } from '@/components/Heading'

import { type ImageProps } from '@/types/sharedProps/imageType'

import { formatDate } from '@/utils/formatDate'

type BlogPostHeaderProps = {
  title: string
  date?: string
  image?: ImageProps
  category?: string
}

export function BlogPostHeader({
  title,
  date,
  image,
  category,
}: BlogPostHeaderProps) {
  return (
    <header>
      <div className="mb-8 space-y-4">
        {category && <Badge variant="secondary">{category}</Badge>}
        <Heading tag="h1" variant="4xl">
          {title}
        </Heading>
        {date && (
          <span className="inline-block text-blue-300">{formatDate(date)}</span>
        )}
      </div>

      {image && (
        <div className="relative mb-16 aspect-video">
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
