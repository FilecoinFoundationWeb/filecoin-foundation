'use client'

import type { Button } from '@headlessui/react'

import { CarouselButton } from './CarouselButton'

export function CarouselPrevious({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return <CarouselButton direction="prev" className={className} {...props} />
}

export function CarouselNext({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return <CarouselButton direction="next" className={className} {...props} />
}
