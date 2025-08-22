'use client'

import { clsx } from 'clsx'

import { useCarousel } from './Carousel'

type CarouselItemProps = React.ComponentProps<'div'>

export function CarouselItem({ className, ...props }: CarouselItemProps) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={clsx(
        'min-w-0 shrink-0 grow-0 basis-full md:basis-1/3 lg:basis-1/4 xl:basis-1/5',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  )
}
