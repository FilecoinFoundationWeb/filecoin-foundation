import {
  BookOpenIcon,
  ClipboardTextIcon,
  EnvelopeIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { IconProps } from '@filecoin-foundation/ui/Icon'

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

export const exploreOrbitData: Array<ExploreOrbitData> = [
  {
    heading: {
      title: '2023 Orbit Recap',
      icon: BookOpenIcon,
    },
    description: 'Discover the highlights and milestones from our past year.',
    cta: {
      href: FILECOIN_FOUNDATION_URLS.orbit.orbitYearInReview['2023'],
      text: 'Check 2023 Orbit Recap',
    },
  },
  {
    heading: {
      title: 'Get in Touch',
      icon: EnvelopeIcon,
    },
    description:
      'Connect with the Orbit Team for more information and support.',
    cta: {
      href: FILECOIN_FOUNDATION_URLS.orbit.email.href,
      text: 'Email Us',
    },
  },
  {
    heading: {
      title: "Ambassador's Portal",
      icon: ClipboardTextIcon,
    },
    description: 'Access the private portal with tools and resources.',
    cta: {
      href: FILECOIN_FOUNDATION_URLS.orbit.ambassadorsPortal,
      text: 'Access Private Portal',
    },
  },
]
