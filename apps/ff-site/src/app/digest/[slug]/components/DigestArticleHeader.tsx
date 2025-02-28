import { ArticleHeader } from '@filecoin-foundation/ui/ArticleHeader'
import { AvatarGroup } from '@filecoin-foundation/ui/AvatarGroup'
import { TagGroup } from '@filecoin-foundation/ui/TagComponents'

import { graphicsData } from '@/data/graphicsData'

import type { DigestArticleData } from '../../types/digestType'

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
      <TagGroup
        tags={[
          { text: `Issue ${issueNumber}` },
          { text: `Article ${articleNumber}` },
        ]}
      />
      <ArticleHeader.Title>{title}</ArticleHeader.Title>
      <AvatarGroup authors={authors} />
    </ArticleHeader>
  )
}
