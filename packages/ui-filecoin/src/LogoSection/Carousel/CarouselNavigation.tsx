'use client'

import { useCarousel } from './Carousel'
import { CarouselButton } from './CarouselButton'

export function ConditionalCarouselNavigation() {
  const { canScrollPrev, canScrollNext, hasAnyScroll } = useCarousel()

  if (!hasAnyScroll) {
    return null
  }

  return (
    <>
      <CarouselButton direction="prev" disabled={!canScrollPrev} />
      <CarouselButton direction="next" disabled={!canScrollNext} />
    </>
  )
}
