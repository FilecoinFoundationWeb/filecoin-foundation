'use client'

import { Button } from '../../Button'

import { useCarousel } from './Carousel'
import { CarouselNavigation } from './CarouselNavigation'

export function CarouselAutoScrollControls() {
  const { isScrolling, playAutoScroll, stopAutoScroll } = useCarousel()

  return (
    <div className="mt-6 flex items-center justify-between">
      <CarouselNavigation />
      <Button
        variant="tertiary"
        className="min-w-24"
        onClick={isScrolling ? stopAutoScroll : playAutoScroll}
        aria-label={isScrolling ? 'Stop auto scroll' : 'Start auto scroll'}
        aria-live="polite"
      >
        {isScrolling ? 'Stop' : 'Start'}
      </Button>
    </div>
  )
}
