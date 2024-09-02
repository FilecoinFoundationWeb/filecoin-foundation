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

  const authorNames = authors
    .map((author) => `${author.firstName} ${author.lastName}`)
    .join(' & ')

  function renderImage(
    firstName: string,
    lastName: string,
    image: ImagePropsWithoutAlt,
  ) {
    return (
      <Image
        className="inline-block rounded-full object-cover ring-1 ring-brand-100"
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
        className="flex items-center justify-center rounded-full bg-brand-700 ring-1 ring-brand-100"
        aria-label={`Initials of ${firstName} ${lastName}`}
      >
        <span className="text-sm font-medium leading-none text-brand-300">
          {initials}
        </span>
      </div>
    )
  }

  function renderAuthorContent({ firstName, lastName, image }: Author) {
    return image?.src
      ? renderImage(firstName, lastName, image)
      : renderInitials(firstName, lastName)
  }

  return (
    <div className="flex items-center space-x-2 text-brand-100">
      <div className="flex -space-x-1">
        {authors.map((author) => (
          <React.Fragment key={`${author.firstName}-${author.lastName}`}>
            {renderAuthorContent(author)}
          </React.Fragment>
        ))}
      </div>
      <span className="text-sm">{authorNames}</span>
    </div>
  )
}
