import { ArticleHeader } from '@filecoin-foundation/ui/Article/ArticleHeader'
import { TagLabel } from '@filecoin-foundation/ui/TagComponents'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'

import type { ImageProps } from '@filecoin-foundation/utils/types/imageType'

import { getCategoryLabel } from '@/utils/getCategoryLabel'

type BlogPostHeaderProps = {
  title: string
  publishedOn: Date
  image: ImageProps
  category: string
}

export function BlogPostHeader({
  title,
  publishedOn,
  image,
  category,
}: BlogPostHeaderProps) {
  return (
    <ArticleHeader
      image={{
        src: image.src,
        alt: '',
      }}
    >
      <TagLabel>
        {getCategoryLabel({
          collectionName: 'blog_posts',
          category,
        })}
      </TagLabel>

      <ArticleHeader.Title>{title}</ArticleHeader.Title>

      <span className="inline-block text-blue-300">
        {formatDate(publishedOn)}
      </span>
    </ArticleHeader>
  )
}
