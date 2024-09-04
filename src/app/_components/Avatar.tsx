import React from 'react'

import Image from 'next/image'

import { type DigestArticleData } from '@/types/digestTypes'
import type { ImageProps } from '@/types/sharedProps/imageType'

type ImagePropsWithoutAlt = Omit<ImageProps, 'alt'>

const imageSize = 32

export type AvatarProps = {
  author: DigestArticleData['authors'][number]
}

export function Avatar({ author }: AvatarProps) {
  const { firstName, lastName, image } = author

  function renderImage(
    firstName: string,
    lastName: string,
    image: ImagePropsWithoutAlt,
  ) {
    return (
      <Image
        className="inline-block rounded-full object-cover ring-2 ring-brand-700"
        src={image.src}
        alt={`Photo of ${firstName} ${lastName}`}
        width={imageSize}
        height={imageSize}
      />
    )
  }

  function renderInitials(firstName: string, lastName: string) {
    const initials = (firstName[0] + lastName[0]).toUpperCase()
    return (
      <div
        style={{ width: imageSize, height: imageSize }}
        className="flex items-center justify-center rounded-full bg-brand-600 ring-2 ring-brand-700"
        aria-label={`Initials of ${firstName} ${lastName}`}
      >
        <span className="text-sm font-medium leading-none text-brand-200">
          {initials}
        </span>
      </div>
    )
  }

  return image?.src
    ? renderImage(firstName, lastName, image)
    : renderInitials(firstName, lastName)
}
