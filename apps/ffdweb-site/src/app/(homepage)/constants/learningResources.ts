import type { IconProps } from '@filecoin-foundation/ui/Icon'

import { PATHS } from '@/constants/paths'

import FolderIcon from '@/assets/icons/folder.svg'
import TapGestureIcon from '@/assets/icons/tap-gesture.svg'
import TvScreenIcon from '@/assets/icons/tv-screen.svg'

const learningResourcePath = PATHS.LEARNING_RESOURCES.path + '?resource='

type LearningResource = {
  icon: IconProps['component']
  title: string
  cta: {
    text: string
    href: string
  }
}

export const learningResources: LearningResource[] = [
  {
    icon: FolderIcon,
    title: 'Case Studies',
    cta: {
      text: 'Explore',
      href: learningResourcePath + 'case-study',
    },
  },
  {
    icon: TapGestureIcon,
    title: 'Interactive Tutorials',
    cta: {
      text: 'Explore',
      href: learningResourcePath + 'tutorial',
    },
  },
  {
    icon: TvScreenIcon,
    title: 'Videos',
    cta: {
      text: 'Explore',
      href: learningResourcePath + 'video',
    },
  },
] as const
