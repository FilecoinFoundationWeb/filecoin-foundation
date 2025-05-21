import Image from 'next/image'

import { clsx } from 'clsx'

import {
  getPageHeaderImageProps,
  type PageHeaderImageProps,
} from '@filecoin-foundation/ui/PageHeader'

export function PageHeaderImage(image: PageHeaderImageProps) {
  const isStaticImage = 'data' in image
  const commonProps = getPageHeaderImageProps(image, {
    startSize: '100vw',
    lg: '490px',
  })

  if (isStaticImage) {
    return (
      <Image
        {...commonProps}
        className={clsx(commonProps.className, 'aspect-video')}
        src={image.data}
      />
    )
  }

  return (
    <div className="relative aspect-video">
      <Image fill {...commonProps} src={image.src} />
    </div>
  )
}
