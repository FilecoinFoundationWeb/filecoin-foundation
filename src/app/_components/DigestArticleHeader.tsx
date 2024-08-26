import { DynamicImage } from '@/components/DynamicImage'
import { Heading } from '@/components/Heading'
import { TagLabel } from '@/components/TagLabel'

import { type DigestArticleData } from '@/types/digestTypes'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { graphicsData } from '@/data/graphicsData'

type DigestArticleHeaderProps = Pick<
  DigestArticleData,
  'title' | 'issueNumber' | 'articleNumber' | 'image'
>

export function DigestArticleHeader({
  title,
  issueNumber,
  articleNumber,
  image,
}: DigestArticleHeaderProps) {
  return (
    <header className="space-y-6">
      <div className="space-y-6">
        <div className="space-x-3">
          <TagLabel borderColor="brand-100">{`Issue ${issueNumber.toString()}`}</TagLabel>
          <TagLabel>{`Article ${articleNumber}`}</TagLabel>
        </div>
        <Heading tag="h1" variant="4xl">
          {title}
        </Heading>
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
