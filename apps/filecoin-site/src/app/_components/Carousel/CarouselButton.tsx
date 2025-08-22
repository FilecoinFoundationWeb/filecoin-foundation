'use client'

import { Button } from '@headlessui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import { useCarousel } from './Carousel'

export function CarouselButton({
  direction,
  className,
  ...props
}: React.ComponentProps<typeof Button> & {
  direction: 'prev' | 'next'
}) {
  const { orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel()

  const isPrev = direction === 'prev'
  const onClick = isPrev ? scrollPrev : scrollNext
  const canScroll = isPrev ? canScrollPrev : canScrollNext
  const Icon = isPrev ? ArrowLeftIcon : ArrowRightIcon
  const label = isPrev ? 'Previous slide' : 'Next slide'

  const positionClasses = getPositionClasses(orientation, direction)

  return (
    <Button
      data-slot={isPrev ? 'carousel-previous' : 'carousel-next'}
      disabled={!canScroll}
      className={clsx(
        'focus:brand-outline absolute grid size-12 cursor-pointer place-items-center rounded-full bg-zinc-800 hover:bg-zinc-700 focus:bg-zinc-700 lg:size-11',
        positionClasses,
        className,
      )}
      onClick={onClick}
      {...props}
    >
      <Icon size={18} />
      <span className="sr-only">{label}</span>
    </Button>
  )
}

function getPositionClasses(
  orientation: 'horizontal' | 'vertical' | undefined,
  direction: 'prev' | 'next',
) {
  const isHorizontal = (orientation || 'horizontal') === 'horizontal'
  const isPrev = direction === 'prev'

  if (isHorizontal) {
    return isPrev
      ? 'top-1/2 left-0 -translate-y-1/2 md:-left-6'
      : 'top-1/2 right-0 -translate-y-1/2 md:-right-6'
  }

  return isPrev
    ? 'top-2 left-1/2 -translate-x-1/2 rotate-90 md:-top-10'
    : 'bottom-2 left-1/2 -translate-x-1/2 rotate-90 md:-bottom-10'
}
