import type { TranslationFunction } from '@/i18n/types'

import {
  DIRECTIONS,
  type Direction,
  type DirectionData,
} from '@filecoin-foundation/utils/constants/paginationDirections'

export function getPaginationDirections(t: TranslationFunction) {
  return {
    prev: {
      aria: t('pagination.prevAriaLabel'),
      cta: t('pagination.prev'),
      icon: DIRECTIONS.prev.icon,
    },
    next: {
      aria: t('pagination.nextAriaLabel'),
      cta: t('pagination.next'),
      icon: DIRECTIONS.next.icon,
    },
  } as const satisfies Record<Direction, DirectionData>
}
