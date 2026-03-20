'use client'

import { Button } from '@headlessui/react'
import { PauseIcon, PlayIcon } from '@phosphor-icons/react'

import { useCarousel } from './Carousel'
import { CarouselNavigation } from './CarouselNavigation'

export function CarouselAutoScrollControls() {
  const { isScrolling, playAutoScroll, stopAutoScroll } = useCarousel()

  const Icon = isScrolling ? PauseIcon : PlayIcon
  const label = isScrolling ? 'Stop auto scroll' : 'Start auto scroll'

  return (
    <div className="mt-6 flex items-center justify-between">
      <CarouselNavigation />
      <Button
        className="focus:brand-outline grid size-8 cursor-pointer place-items-center rounded-full bg-zinc-800 hover:bg-zinc-700 focus:bg-zinc-700"
        onClick={isScrolling ? stopAutoScroll : playAutoScroll}
        aria-live="polite"
      >
        <Icon size={18} />
        <span className="sr-only">{label}</span>
      </Button>
    </div>
  )
}
