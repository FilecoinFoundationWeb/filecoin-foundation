import React from 'react'

import type { ImageProps } from 'next/image'

import { clsx } from 'clsx'

import { buildImageSizeProp } from '@filecoin-foundation/ui-filecoin/utils'

type ImageGridProps = {
  children: Array<React.ReactElement<ImageProps>>
  variant: keyof typeof variants
}

const sharedGridStyle =
  'auto-rows-[192px] grid-cols-1 gap-1 md:auto-rows-[300px] md:grid-cols-3'

const variants = {
  oneMdThree: {
    getCellStyle: () => undefined,
    getImageSizes: () => buildImageSizeProp({ startSize: '100vw', md: '33vw' }),
  },
  oneMdThreeCollage: {
    getCellStyle: (i: number) => {
      return clsx(
        i === 0 && 'md:col-span-2 md:row-span-2',
        i === 2 && 'md:col-start-3 md:row-span-2',
      )
    },
    getImageSizes: (i: number) => {
      if (i === 0) {
        return buildImageSizeProp({ startSize: '100vw', md: '66vw' })
      }

      return buildImageSizeProp({ startSize: '100vw', md: '33vw' })
    },
  },
} as const

export function ImageGrid({ children, variant }: ImageGridProps) {
  const variantConfig = variants[variant]

  return (
    <div className={clsx('grid', sharedGridStyle)}>
      {React.Children.map(children, (child, i) => {
        return (
          <div
            className={clsx(
              'relative h-full w-full',
              variantConfig.getCellStyle(i),
            )}
          >
            {React.cloneElement(child, {
              ...child.props,
              className: clsx('object-cover', child.props.className),
              fill: true,
              sizes: variantConfig.getImageSizes(i),
            })}
          </div>
        )
      })}
    </div>
  )
}
