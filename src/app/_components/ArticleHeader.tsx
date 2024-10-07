import Image from 'next/image'

import type { ImageProps } from '@/types/imageType'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

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
        <Image
          fill
          priority
          src={image?.src || graphicsData.imageFallback.data.src}
          alt={!image?.src ? graphicsData.imageFallback.alt : image.alt || ''}
          className="rounded-lg object-cover"
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
