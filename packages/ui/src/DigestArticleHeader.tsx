import type { ImageProps } from '@filecoin-foundation/utils/types/imageType'
import { ArticleHeader } from '@filecoin-foundation/ui/Article/ArticleHeader'
import {
  type AvatarGroupExpandedProps,
  AvatarGroupExpanded,
} from '@filecoin-foundation/ui/AvatarGroup'
import { TagGroup } from '@filecoin-foundation/ui/TagComponents'

type DigestArticleProps = {
  issueNumber: string
  articleNumber: number
  title: string
  authors: AvatarGroupExpandedProps['authors']
  image: ImageProps
}

export function DigestArticleHeader({
  issueNumber,
  articleNumber,
  title,
  authors,
  image,
}: DigestArticleProps) {
  return (
    <ArticleHeader image={image}>
      <TagGroup
        tags={[
          { text: `Article ${articleNumber}` },
          { text: `Issue ${issueNumber}` },
        ]}
      />
      <ArticleHeader.Title>{title}</ArticleHeader.Title>
      <AvatarGroupExpanded authors={authors} />
    </ArticleHeader>
  )
}
