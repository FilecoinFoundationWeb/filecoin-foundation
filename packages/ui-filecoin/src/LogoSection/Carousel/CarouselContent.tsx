'use client'

import { clsx } from 'clsx'

import { useCarousel } from './Carousel'

type CarouselContentProps = React.ComponentProps<'ul'>

export function CarouselContent({ className, ...props }: CarouselContentProps) {
  const { carouselRef, hasAnyScroll } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className={clsx(
        'overflow-hidden',
        !hasAnyScroll && 'pointer-events-none',
      )}
      data-slot="carousel-content"
    >
      <ul className={clsx('flex justify-between', className)} {...props} />
    </div>
  )
}
