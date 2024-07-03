import {
  BookOpen,
  ClipboardText,
  Envelope,
} from '@phosphor-icons/react/dist/ssr'

import type { IconProps } from '@/components/Icon'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

type ExploreOrbitData = {
  heading: {
    title: string
    icon: IconProps['component']
  }
  description: string
  cta: {
    href: string
    text: string
  }
}

export const exploreOrbitData: ExploreOrbitData[] = [
  {
    heading: {
      title: '2023 Orbit Recap',
      icon: BookOpen,
    },
    description: 'Discover the highlights and milestones from our past year.',
    cta: {
      href: '',
      text: 'Check 2023 Orbit Recap',
    },
  },
  {
    heading: {
      title: 'Get in Touch',
      icon: Envelope,
    },
    description:
      'Connect with the Orbit Team for more information and support.',
    cta: {
      href: '',
      text: 'Email Us',
    },
  },
  {
    heading: {
      title: "Ambassador's Portal",
      icon: ClipboardText,
    },
    description: 'Access the private portal with tools and resources.',
    cta: {
      href: FILECOIN_FOUNDATION_URLS.orbit.ambassadorsPortal,
      text: 'Access Private Portal',
    },
  },
]
