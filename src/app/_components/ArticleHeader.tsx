import Image from 'next/image'

import type { ImageProps } from '@/types/imageType'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { type HeadingProps, Heading } from '@/components/Heading'

type ArticleHeaderProps = {
  image: ImageProps
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
          src={image.src}
          alt={image.alt}
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
