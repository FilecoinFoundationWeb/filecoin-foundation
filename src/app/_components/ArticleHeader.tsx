import type { ImageProps } from '@/types/imageType'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { DynamicImage } from '@/components/DynamicImage'
import { type HeadingProps, Heading } from '@/components/Heading'

type ArticleHeaderProps = {
  image?: ImageProps
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

ArticleHeader.Title = function ArticleHeaderTitle({ children }: TitleProps) {
  return (
    <Heading tag="h1" variant="4xl">
      {children}
    </Heading>
  )
}
