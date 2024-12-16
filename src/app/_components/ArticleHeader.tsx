import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { type HeadingProps, Heading } from '@/components/Heading'

import { SmartImage, type SmartImageProps } from './SmartImage'

type ArticleHeaderProps = {
  image: SmartImageProps
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
        <SmartImage
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
