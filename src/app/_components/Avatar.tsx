import React from 'react'

import Image from 'next/image'

import { clsx } from 'clsx'

import type { DigestArticleData } from '@/digest/types/digestTypes'

const imageSize = 32
const sharedAvatarStyle = 'rounded-full ring-2 ring-brand-700'

type AvatarProps = {
  author: DigestArticleData['authors'][number]
}

export function Avatar({ author }: AvatarProps) {
  const { firstName, lastName, image } = author

  if (image) {
    return (
      <Image
        src={image.src}
        alt={`Photo of ${firstName} ${lastName}`}
        width={imageSize}
        height={imageSize}
        className={clsx(sharedAvatarStyle, 'inline-block object-cover')}
      />
    )
  }

  const initials = (firstName[0] + lastName[0]).toUpperCase()

  return (
    <div
      aria-label={`Initials of ${firstName} ${lastName}`}
      style={{ width: imageSize, height: imageSize }}
      className={clsx(
        sharedAvatarStyle,
        'flex items-center justify-center bg-brand-600',
      )}
    >
      <span className="text-sm font-medium leading-none text-brand-200">
        {initials}
      </span>
    </div>
  )
}
