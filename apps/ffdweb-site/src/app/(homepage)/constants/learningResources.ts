import { PATHS } from '@/_constants/paths'
import FolderIcon from '@/assets/icons/folder.svg'
import TapGestureIcon from '@/assets/icons/tap-gesture.svg'
import TvScreenIcon from '@/assets/icons/tv-screen.svg'

export const learningResources = [
  {
    icon: FolderIcon,
    title: 'Use Cases',
    cta: {
      text: 'Explore',
      href: PATHS.LEARNING_RESOURCES.path,
    },
  },
  {
    icon: TapGestureIcon,
    title: 'Interactive Tutorials',
    cta: {
      text: 'Explore',
      href: PATHS.LEARNING_RESOURCES.path,
    },
  },
  {
    icon: TvScreenIcon,
    title: 'Videos',
    cta: {
      text: 'Explore',
      href: PATHS.LEARNING_RESOURCES.path,
    },
  },
] as const
