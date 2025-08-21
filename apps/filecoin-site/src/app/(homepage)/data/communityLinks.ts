import {
  GithubLogoIcon,
  MapPinIcon,
  MegaphoneIcon,
  SlackLogoIcon,
} from '@phosphor-icons/react/dist/ssr'

import {
  FILECOIN_FOUNDATION_URLS,
  FILECOIN_URLS,
} from '@/constants/siteMetadata'

import type { LinkCardData } from '@/components/LinkCard'

export const communityLinks: Array<LinkCardData> = [
  {
    title: 'Chat on Slack',
    href: FILECOIN_URLS.social.slack.href,
    icon: SlackLogoIcon,
  },
  {
    title: 'Attend a Filecoin event',
    href: FILECOIN_FOUNDATION_URLS.events,
    icon: MapPinIcon,
  },
  {
    title: 'Get involved on GitHub',
    href: FILECOIN_URLS.github,
    icon: GithubLogoIcon,
  },
  {
    title: 'Become a Filecoin Orbit ambassador',
    href: FILECOIN_FOUNDATION_URLS.orbit,
    icon: MegaphoneIcon,
  },
]
