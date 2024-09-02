import { ArticleHeader } from '@/components/ArticleHeader'
import { Avatar } from '@/components/Avatar'
import { TagGroup } from '@/components/TagGroup'

import { type DigestArticleData } from '@/types/digestTypes'

type DigestArticleHeaderProps = Pick<
  DigestArticleData,
  'issueNumber' | 'articleNumber' | 'title' | 'authors' | 'image'
>

export function DigestArticleHeader({
  issueNumber,
  articleNumber,
  title,
  authors,
  image,
}: DigestArticleHeaderProps) {
  return (
    <ArticleHeader image={image && { src: image.src, alt: image.alt || '' }}>
      <TagGroup label={[`Issue ${issueNumber}`, `Article ${articleNumber}`]} />
      <ArticleHeader.Title>{title}</ArticleHeader.Title>
      <Avatar authors={authors} />
    </ArticleHeader>
  )
}
