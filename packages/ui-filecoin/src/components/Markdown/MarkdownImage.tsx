import type { ComponentPropsWithoutRef } from 'react'

import Image from 'next/image'

import { buildImageSizeProp } from '../../utils/buildImageSizeProp'

type MarkdownImageProps = ComponentPropsWithoutRef<'img'>

const TAILWIND_3XL_WIDTH = 768

const IMAGE_PLACEHOLDER_WIDTH = 1_280
const IMAGE_PLACEHOLDER_HEIGHT = IMAGE_PLACEHOLDER_WIDTH * (9 / 16)

export function MarkdownImage({ src, alt }: MarkdownImageProps) {
  if (typeof src !== 'string') {
    console.error(
      'Invalid markdown: image is missing src attribute or src is not a string',
    )
    return null
  }

  return (
    <Image
      className="rounded-lg object-cover"
      src={src}
      alt={alt || ''}
      quality={100}
      width={IMAGE_PLACEHOLDER_WIDTH}
      height={IMAGE_PLACEHOLDER_HEIGHT}
      sizes={buildImageSizeProp({
        startSize: '100vw',
        md: `${TAILWIND_3XL_WIDTH}px`,
      })}
    />
  )
}
