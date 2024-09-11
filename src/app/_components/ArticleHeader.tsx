import Image from 'next/image'

import type { DynamicImageData } from '@/types/sharedProps/imageType'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { type HeadingProps, Heading } from '@/components/Heading'

type ArticleHeaderProps = {
  image?: DynamicImageData
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
        <Image
          fill
          priority
          quality={100}
          src={image?.src || graphicsData.imageFallback.src}
          alt={image?.alt || graphicsData.imageFallback.alt}
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
