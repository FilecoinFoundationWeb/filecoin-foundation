import { ArticleHeader } from '@/components/ArticleHeader'
import { TagLabel } from '@/components/TagLabel'

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
      <div className="space-x-3">
        <TagLabel borderColor="brand-100">{`Issue ${issueNumber}`}</TagLabel>
        <TagLabel>{`Article ${articleNumber}`}</TagLabel>
      </div>
      <ArticleHeader.Title>{title}</ArticleHeader.Title>
      <div>
        <span className="text-sm text-blue-100">{formatAuthors(authors)}</span>
      </div>
    </ArticleHeader>
  )
}

export function formatAuthors(authors: DigestArticleData['authors']) {
  return authors
    .map((author, index) => {
      const isLastAuthor = index === authors.length - 1
      const isSecondToLastAuthor = index === authors.length - 2

      let separator = ''
      if (isSecondToLastAuthor && authors.length > 1) {
        separator = ' & '
      } else if (!isLastAuthor) {
        separator = ', '
      }

      return `${author.firstName} ${author.lastName}${separator}`
    })
    .join('')
}
