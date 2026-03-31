'use client'

import { useCarousel } from './Carousel'
import { CarouselButton } from './CarouselButton'

export function CarouselNavigation() {
  const { canScrollPrev, canScrollNext } = useCarousel()

  return (
    <div className="flex items-center gap-4">
      <CarouselButton direction="prev" disabled={!canScrollPrev} />
      <CarouselButton direction="next" disabled={!canScrollNext} />
    </div>
  )
}
