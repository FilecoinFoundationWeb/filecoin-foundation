import React from 'react'

import type { ImageProps } from 'next/image'

import { clsx } from 'clsx'

type ImageGridProps = {
  children: React.ReactNode
  variant: keyof typeof variants
}

const variants = {
  oneMdThree: {
    grid: 'gap-1 grid-cols-1 md:grid-cols-3',
  },
  oneMdThreeCollage: {
    grid: 'gap-1 grid-cols-1 md:grid-cols-3',
    item: (i: number) =>
      clsx(
        'h-full w-full object-cover',
        i === 0 && 'md:col-span-2 md:row-span-2',
        i === 2 && 'md:col-start-3 md:row-span-2',
      ),
  },
}

export function ImageGrid({ children, variant }: ImageGridProps) {
  const variantConfig = variants[variant]
  const gridClass = variantConfig.grid

  return (
    <div className={clsx('grid', gridClass)}>
      {'item' in variantConfig
        ? React.Children.map(children, (child, i) =>
            React.cloneElement(child as React.ReactElement<ImageProps>, {
              className: clsx(
                (child as React.ReactElement<ImageProps>).props.className,
                variantConfig.item(i),
              ),
            }),
          )
        : children}
    </div>
  )
}
