import Image from 'next/image'

import { clsx } from 'clsx'

import type { StaticImageProps } from '@/types/imageType'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { BasicCard } from '@/components/BasicCard'

type AlternatingImageCardProps = {
  index: number
  image: StaticImageProps
  as?: React.ElementType
  children: React.ReactNode
}

export function AlternatingImageCard({
  index,
  image,
  as: Tag = 'div',
  children,
}: AlternatingImageCardProps) {
  const isImagePositionOdd = index % 2 === 1

  return (
    <Tag
      className={clsx(
        'flex flex-col gap-4 lg:flex-row lg:gap-6',
        isImagePositionOdd && 'lg:flex-row-reverse',
      )}
    >
      <Image
        src={image.data}
        alt={image.alt}
        className="h-48 flex-shrink-0 rounded-lg object-cover sm:h-64 lg:h-auto lg:w-1/3"
        sizes={buildImageSizeProp({
          startSize: '100vw',
          lg: '33vw',
        })}
      />
      <div className="flex-grow">
        <BasicCard>{children}</BasicCard>
      </div>
    </Tag>
  )
}
