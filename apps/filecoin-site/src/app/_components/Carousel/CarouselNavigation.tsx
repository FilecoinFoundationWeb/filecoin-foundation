'use client'

import type { Button } from '@headlessui/react'

import { CarouselButton } from './CarouselButton'

type CarouselNavigationProps = React.ComponentProps<typeof Button>

export function CarouselPrevious({
  className,
  ...props
}: CarouselNavigationProps) {
  return <CarouselButton direction="prev" className={className} {...props} />
}

export function CarouselNext({ className, ...props }: CarouselNavigationProps) {
  return <CarouselButton direction="next" className={className} {...props} />
}
