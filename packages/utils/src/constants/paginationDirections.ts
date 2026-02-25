import { CaretLeftIcon, CaretRightIcon, type Icon } from '@phosphor-icons/react'

type Direction = 'prev' | 'next'
export type DirectionData = {
  aria: string
  cta: string
  icon: Icon
}

export const DIRECTIONS = {
  prev: { aria: 'Go to previous page', cta: 'Prev', icon: CaretLeftIcon },
  next: { aria: 'Go to next page', cta: 'Next', icon: CaretRightIcon },
} satisfies Record<Direction, DirectionData>
