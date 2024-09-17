import type {
  RemoteImageData,
  LocalImageData,
} from '@/types/sharedProps/imageType'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { type HeadingProps, Heading } from '@/components/Heading'

import { ImageWithFallback } from '@/_components/ImageWithFallback'

type ArticleHeaderProps = {
  image?: RemoteImageData | LocalImageData
  children?: React.ReactNode
}

type TitleProps = {
  children: HeadingProps['children']
}

export function ArticleHeader({ image, children }: ArticleHeaderProps) {
  return (
    <header className="space-y-6">
      <div className="space-y-6">{children}</div>
      <div className="relative aspect-video">
        <ImageWithFallback
          fill
          priority
          quality={100}
          src={image?.src || ''}
          alt={image?.alt || ''}
          className="rounded-lg"
          sizes={buildImageSizeProp({ startSize: '100vw', md: '680px' })}
        />
      </div>
    </header>
  )
}

ArticleHeader.Title = function ArticleHeaderTitle({ children }: TitleProps) {
  return (
    <Heading tag="h1" variant="4xl">
      {children}
    </Heading>
  )
}
