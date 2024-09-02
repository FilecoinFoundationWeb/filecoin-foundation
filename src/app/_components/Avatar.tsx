import React from 'react'

import Image from 'next/image'

import type { ImageProps } from '@/types/sharedProps/imageType'

type ImagePropsWithoutAlt = Omit<ImageProps, 'alt'>

export type Author = {
  firstName: string
  lastName: string
  image?: ImagePropsWithoutAlt
}

export function Avatar({ authors }: { authors: Array<Author> }) {
  const imageSize = 32

  if (!authors || authors.length === 0) {
    throw new Error('Avatar component requires at least one author')
  }

  const authorsNames = authors
    .map((author) => `${author.firstName} ${author.lastName}`)
    .join(' & ')

  const renderContent = ({ firstName, lastName, image }: Author) => {
    if (image?.src) {
      return (
        <Image
          className="inline-block rounded-full object-cover ring-1 ring-brand-100"
          src={image.src}
          alt={`Photo of ${firstName} ${lastName}`}
          width={imageSize}
          height={imageSize}
        />
      )
    } else {
      const initials = (firstName[0] + lastName[0]).toUpperCase()
      return (
        <div
          style={{ width: imageSize, height: imageSize }}
          className="flex items-center justify-center rounded-full bg-brand-700 ring-1 ring-brand-100"
          aria-label={`Initials of ${firstName} ${lastName}`}
        >
          <span className="text-sm font-medium leading-none text-brand-300">
            {initials}
          </span>
        </div>
      )
    }
  }

  return (
    <div className="flex items-center space-x-2 text-brand-100">
      <div className="flex -space-x-1">
        {authors.map((author) => (
          <React.Fragment key={`${author.firstName}-${author.lastName}`}>
            {renderContent(author)}
          </React.Fragment>
        ))}
      </div>
      <span className="text-sm">{authorsNames}</span>
    </div>
  )
}
