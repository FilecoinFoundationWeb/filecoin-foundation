import { ArticleHeader } from '@/components/ArticleHeader'
import { AvatarGroup } from '@/components/AvatarGroup'
import { TagGroup } from '@/components/TagComponents/TagGroup'

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
    <ArticleHeader image={{ src: image.src, alt: '' }}>
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
