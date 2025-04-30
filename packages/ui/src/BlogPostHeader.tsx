import { ArticleHeader } from '@filecoin-foundation/ui/Article/ArticleHeader'
import { TagLabel } from '@filecoin-foundation/ui/TagComponents'
import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import type { ImageProps } from '@filecoin-foundation/utils/types/imageType'

type BlogPostHeaderProps = {
  title: string
  publishedOn: Date
  image: ImageProps
  category: string
  chineseTranslationUrl?: string
}

export function BlogPostHeader({
  title,
  publishedOn,
  image,
  category,
  chineseTranslationUrl,
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
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        <span className="blog-post-header-date">{formatDate(publishedOn)}</span>
        {chineseTranslationUrl && (
          <ExternalTextLink href={chineseTranslationUrl}>
            中文版本 (Chinese Version)
          </ExternalTextLink>
        )}
      </div>
    </ArticleHeader>
  )
}
