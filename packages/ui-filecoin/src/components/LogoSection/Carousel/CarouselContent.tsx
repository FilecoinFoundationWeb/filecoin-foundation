'use client'

import { clsx } from 'clsx'

import { useCarousel } from './Carousel'
import {
  CarouselGradient,
  type CarouselGradientProps,
} from './CarouselGradient'

type CarouselContentProps = React.ComponentProps<'ul'> & {
  gradientVariant?: CarouselGradientProps['variant']
}

export function CarouselContent({
  className,
  gradientVariant,
  ...props
}: CarouselContentProps) {
  const { carouselRef, canScrollPrev, canScrollNext } = useCarousel()

  const isScrollable = canScrollPrev || canScrollNext

  return (
    <div
      ref={carouselRef}
      className={clsx('overflow-hidden', gradientVariant && 'relative')}
      data-slot="carousel-content"
    >
      <ul className={clsx('flex justify-between', className)} {...props} />
      {gradientVariant && isScrollable && (
        <CarouselGradient variant={gradientVariant} />
      )}
    </div>
  )
}
