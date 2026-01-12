'use client'

import { clsx } from 'clsx'

type CarouselItemProps = { range: number } & React.ComponentProps<'li'>

export function CarouselItem({
  className,
  range,
  ...props
}: CarouselItemProps) {
  return (
    <li
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={clsx(
        'min-w-0 shrink-0 grow-0 basis-full md:px-8',
        range === 2 && 'md:basis-1/2',
        range === 3 && 'md:basis-1/3',
        range === 4 && 'md:basis-1/4',
        range >= 5 && 'md:basis-1/3 lg:basis-1/4 xl:basis-1/5',
        className,
      )}
      {...props}
    />
  )
}
