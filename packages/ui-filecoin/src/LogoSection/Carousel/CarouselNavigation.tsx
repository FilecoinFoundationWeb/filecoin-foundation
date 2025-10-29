'use client'

import { useCarousel } from './Carousel'
import { CarouselButton } from './CarouselButton'

export function ConditionalCarouselNavigation() {
  const { canScrollPrev, canScrollNext } = useCarousel()

  if (!canScrollPrev && !canScrollNext) {
    return null
  }

  return (
    <>
      {canScrollPrev && <CarouselButton direction="prev" />}
      {canScrollNext && <CarouselButton direction="next" />}
    </>
  )
}
