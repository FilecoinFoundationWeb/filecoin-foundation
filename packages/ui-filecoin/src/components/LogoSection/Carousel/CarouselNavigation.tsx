'use client'

import { useCarousel } from './Carousel'
import { CarouselButton } from './CarouselButton'

export function ConditionalCarouselNavigation() {
  const { canScrollPrev, canScrollNext, autoPlay } = useCarousel()

  if (autoPlay) {
    return null
  }

  if (!canScrollPrev && !canScrollNext) {
    return null
  }

  return (
    <>
      <CarouselButton direction="prev" disabled={!canScrollPrev} />
      <CarouselButton direction="next" disabled={!canScrollNext} />
    </>
  )
}
