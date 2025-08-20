import React from 'react'

import type { ImageProps } from 'next/image'

import { clsx } from 'clsx'

type ImageGridProps = {
  children: Array<React.ReactElement<ImageProps>>
  variant: keyof typeof variants
}

const variants = {
  oneMdThree: {
    gridStyle:
      'gap-1 grid-cols-1 md:grid-cols-3 md:grid-rows-[300px] auto-rows-[192px]',
    getCellStyle: () => '',
  },
  oneMdThreeCollage: {
    gridStyle:
      'gap-1 grid-cols-1 md:grid-cols-3 md:auto-rows-[300px] auto-rows-[192px]',
    getCellStyle: (i: number) =>
      clsx(
        'h-full w-full',
        i === 0 && 'md:col-span-2 md:row-span-2',
        i === 2 && 'md:col-start-3 md:row-span-2',
      ),
  },
} as const

export function ImageGrid({ children, variant }: ImageGridProps) {
  const variantConfig = variants[variant]

  return (
    <div className={clsx('grid', variantConfig.gridStyle)}>
      {React.Children.map(children, (child, i) => {
        return (
          <div
            className={clsx(
              'relative h-full w-full',
              variantConfig?.getCellStyle(i),
            )}
          >
            {React.cloneElement(child, {
              ...child.props,
              className: clsx(child.props.className, 'object-cover'),
              fill: true,
            })}
          </div>
        )
      })}
    </div>
  )
}
