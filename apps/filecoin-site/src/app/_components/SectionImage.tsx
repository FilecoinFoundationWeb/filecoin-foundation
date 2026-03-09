import Image, { type StaticImageData, type ImageProps } from 'next/image'

import clsx from 'clsx'

type SectionImageProps = {
  data: StaticImageData
  size?: 'compact'
} & Pick<ImageProps, 'alt' | 'priority'>

export function SectionImage({ data, alt, priority, size }: SectionImageProps) {
  return (
    <div
      className={clsx(
        'w-full overflow-hidden',
        size === 'compact' && 'aspect-9/4',
      )}
    >
      <Image
        quality={85}
        sizes="100vw"
        src={data}
        alt={alt}
        priority={priority}
        className={clsx(
          'w-full',
          size === 'compact'
            ? 'h-full object-cover object-top'
            : 'object-contain',
        )}
      />
    </div>
  )
}
