import type { ImageProps } from '@filecoin-foundation/utils/types/imageType'
import { ArticleHeader } from '@filecoin-foundation/ui/Article/ArticleHeader'
import {
  type AvatarGroupProps,
  AvatarGroup,
} from '@filecoin-foundation/ui/AvatarGroup'
import { TagGroup } from '@filecoin-foundation/ui/TagComponents'

type DigestArticleProps = {
  issueNumber: string
  articleNumber: number
  title: string
  authors: AvatarGroupProps['authors']
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
      <AvatarGroup authors={authors} />
    </ArticleHeader>
  )
}
