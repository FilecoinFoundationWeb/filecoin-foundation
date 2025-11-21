'use client'

import { clsx } from 'clsx'

import { useCarousel } from './Carousel'

type CarouselContentProps = React.ComponentProps<'ul'>

export function CarouselContent({ className, ...props }: CarouselContentProps) {
  const { carouselRef } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <ul className={clsx('flex justify-between', className)} {...props} />
    </div>
  )
}
