import type { TouchTarget } from '@filecoin-foundation/utils/types/touchTargetType'

import { PATHS } from '@/constants/paths'

export const NAV_LINKS = [
  PATHS.BUILD_ON_FILECOIN,
  PATHS.STORE_DATA,
  PATHS.OFFER_STORAGE,
  PATHS.LEARN,
  PATHS.BLOG,
] as const

export const TOUCH_TARGET_NAV_LINK = {
  touchAreaPadding: 'px-3 py-2',
} as const satisfies TouchTarget
