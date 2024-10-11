import { type DigestArticleData } from '@/types/digestTypes'

import { graphicsData } from '@/data/graphicsData'

import { ArticleHeader } from '@/components/ArticleHeader'
import { AvatarGroup } from '@/components/AvatarGroup'
import { TagGroup } from '@/components/TagGroup'

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
    <ArticleHeader
      image={{
        src: image?.src || graphicsData.imageFallback.data.src,
        alt: '',
      }}
    >
      <TagGroup label={[`Issue ${issueNumber}`, `Article ${articleNumber}`]} />
      <ArticleHeader.Title>{title}</ArticleHeader.Title>
      <AvatarGroup authors={authors} />
    </ArticleHeader>
  )
}
