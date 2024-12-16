import { type ImageProps } from 'next/image'

import { clsx } from 'clsx'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { SmartImage } from '@/components/SmartImage'

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & {
  alt?: string
}

type PageHeaderProps = {
  image?: ImagePropsWithOptionalAlt
}

export function PageHeader({ image }: PageHeaderProps) {
  return (
    <header className="space-y-10 md:space-y-16">
      <div className="relative h-48 md:w-3/4 lg:w-2/3 xl:w-3/5">
        <SmartImage
          fill
          priority
          src={image?.src}
          alt={''}
          className={clsx(
            image?.src && 'rounded-lg',
            'object-contain object-left-bottom',
          )}
          sizes={buildImageSizeProp({
            startSize: '100vw',
            md: '730px',
            lg: '660px',
            xl: '600px',
          })}
        />
      </div>
    </header>
  )
}
