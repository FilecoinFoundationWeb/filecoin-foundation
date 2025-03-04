import type { TouchTarget } from '@filecoin-foundation/utils/types/touchTargetType'

import { PATHS } from '@/constants/paths'

export const NAV_LINKS = [
  PATHS.ABOUT,
  PATHS.PROJECTS,
  PATHS.LEARNING_RESOURCES,
  PATHS.BLOG,
  PATHS.DIGEST,
  PATHS.FAQS,
] as const

export const TOUCH_TARGET_NAV_LINK = {
  touchAreaPadding: 'px-4 py-3',
  touchAreaOffset: '-mx-4',
} as const satisfies TouchTarget
