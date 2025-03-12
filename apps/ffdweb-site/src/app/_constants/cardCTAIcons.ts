import { CaretRight } from '@phosphor-icons/react/dist/ssr'

const CARD_CTA_ICON_CONFIG = {
  CARET_RIGHT: {
    component: CaretRight,
    size: 16,
    position: 'trailing',
    weight: 'bold',
  },
} as const

export const { CARET_RIGHT } = CARD_CTA_ICON_CONFIG
