import { DynamicImage } from '@/components/DynamicImage'
import { type HeadingProps, Heading } from '@/components/Heading'

import type { ImageProps } from '@/types/sharedProps/imageType'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { graphicsData } from '@/data/graphicsData'

type ArticleHeaderProps = {
  image?: ImageProps
  children?: React.ReactNode
}

type TitleProps = {
  children: HeadingProps['children']
}

export function ArticleHeader({ image, children }: ArticleHeaderProps) {
  return (
    <header className="space-y-8">
      <div className="space-y-4">{children}</div>

      <div className="relative aspect-video">
        <DynamicImage
          fill
          priority
          quality={100}
          src={image?.src || ''}
          alt={image?.alt || 'Article Header Image'}
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
