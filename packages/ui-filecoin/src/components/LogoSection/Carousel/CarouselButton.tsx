'use client'

import { Button } from '@headlessui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import { useCarousel } from './Carousel'

type CarouselButtonProps = React.ComponentProps<typeof Button> & {
  direction: 'prev' | 'next'
}

export function CarouselButton({
  direction,
  className,
  ...props
}: CarouselButtonProps) {
  const {
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
    stopAutoScroll,
  } = useCarousel()

  const isPrev = direction === 'prev'
  const onClick = isPrev
    ? () => {
        stopAutoScroll()
        scrollPrev()
      }
    : () => {
        stopAutoScroll()
        scrollNext()
      }
  const canScroll = isPrev ? canScrollPrev : canScrollNext
  const Icon = isPrev ? ArrowLeftIcon : ArrowRightIcon
  const label = isPrev ? 'Previous slide' : 'Next slide'

  return (
    <Button
      data-slot={isPrev ? 'carousel-previous' : 'carousel-next'}
      disabled={!canScroll}
      className={clsx(
        'focus:brand-outline grid size-8 cursor-pointer place-items-center rounded-full bg-zinc-800 hover:bg-zinc-700 focus:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-zinc-800 lg:size-8',
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
