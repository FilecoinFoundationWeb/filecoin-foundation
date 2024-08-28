import { DynamicImage } from '@/components/DynamicImage'
import { Heading } from '@/components/Heading'
import { TagLabel } from '@/components/TagLabel'

import { type DigestArticleData } from '@/types/digestTypes'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { graphicsData } from '@/data/graphicsData'

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
    <header className="space-y-8">
      <div className="space-y-4">
        <div className="space-x-3">
          <TagLabel borderColor="brand-100">{`Issue ${issueNumber}`}</TagLabel>
          <TagLabel>{`Article ${articleNumber}`}</TagLabel>
        </div>
        <Heading tag="h1" variant="4xl">
          {title}
        </Heading>
        <div>
          <span className="text-sm text-blue-100">
            {formatAuthors(authors)}
          </span>
        </div>
      </div>

      <div className="relative aspect-video">
        <DynamicImage
          fill
          priority
          quality={100}
          src={image?.src || ''}
          alt={image?.alt || ''}
          className="rounded-lg"
          sizes={buildImageSizeProp({ startSize: '100vw', md: '680px' })}
          fallback={graphicsData.imageFallback}
        />
      </div>
    </header>
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
