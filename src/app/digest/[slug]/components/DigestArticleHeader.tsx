import { type DigestArticleData } from '@/types/digestTypes'

import { ArticleHeader } from '@/components/ArticleHeader'
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
    <ArticleHeader image={image && { src: image.src, alt: image.alt || '' }}>
      <TagGroup label={[`Issue ${issueNumber}`, `Article ${articleNumber}`]} />
      <ArticleHeader.Title>{title}</ArticleHeader.Title>
      <span className="mt-3 block text-sm text-blue-100">
        {formatAuthors(authors)}
      </span>
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

      return `${author.firstName} ${author.lastName}${separator}, ${author.company}`
    })
    .join('')
}
