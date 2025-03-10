import { ArticleHeader } from '@filecoin-foundation/ui/Article/ArticleHeader'
import { TagLabel } from '@filecoin-foundation/ui/TagComponents'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'

import type { ImageProps } from '@filecoin-foundation/utils/types/imageType'

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
      <TagLabel>{category}</TagLabel>
      <ArticleHeader.Title>{title}</ArticleHeader.Title>
      <span className="blog-post-header-date inline-block">
        {formatDate(publishedOn)}
      </span>
    </ArticleHeader>
  )
}
