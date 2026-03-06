'use client'

import { clsx } from 'clsx'

import { useCarousel } from './Carousel'
import {
  CarouselGradient,
  type CarouselGradientProps,
} from './CarouselGradient'

type CarouselContentProps = React.ComponentProps<'ul'> & {
  gradientMode?: CarouselGradientProps['variant']
}

export function CarouselContent({
  className,
  gradientMode,
  ...props
}: CarouselContentProps) {
  const { carouselRef } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className={clsx('overflow-hidden', gradientMode && 'relative')}
      data-slot="carousel-content"
    >
      <ul className={clsx('flex justify-between', className)} {...props} />
      {gradientMode && <CarouselGradient variant={gradientMode} />}
    </div>
  )
}
