import {
  GithubLogoIcon,
  MapPinIcon,
  MegaphoneIcon,
  SlackLogoIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { LinkCardData } from '@filecoin-foundation/ui-filecoin/LinkCard'

import {
  FILECOIN_FOUNDATION_URLS,
  FILECOIN_URLS,
} from '@/constants/siteMetadata'


export const communityLinks = [
  {
    title: 'Chat on Slack',
    href: FILECOIN_URLS.social.slack.href,
    icon: SlackLogoIcon,
  },
  {
    title: 'Attend a Filecoin event',
    href: FILECOIN_FOUNDATION_URLS.events.href,
    icon: MapPinIcon,
  },
  {
    title: 'Get involved on GitHub',
    href: FILECOIN_URLS.github.href,
    icon: GithubLogoIcon,
  },
  {
    title: 'Become a Filecoin Orbit ambassador',
    href: FILECOIN_FOUNDATION_URLS.orbit.href,
    icon: MegaphoneIcon,
  },
] as const satisfies Array<LinkCardData>
