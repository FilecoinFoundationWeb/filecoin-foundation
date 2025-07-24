import {
  BookIcon,
  CodeIcon,
  GithubLogoIcon,
  SlackLogoIcon,
} from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_URLS } from '@/constants/siteMetadata'

import type { LinkCardData } from '@/components/LinkCard'

export const communityLinks: Array<LinkCardData> = [
  {
    title: 'Chat on Slack',
    href: FILECOIN_URLS.social.slack.href,
    icon: SlackLogoIcon,
  },
  {
    title: 'Get involved on GitHub',
    href: FILECOIN_URLS.github,
    icon: GithubLogoIcon,
  },
  {
    title: 'Explore the documentation',
    href: FILECOIN_URLS.docs,
    icon: BookIcon,
  },
  {
    title: 'Join the Protocol Labs Developer Guild',
    href: 'https://www.pldg.xyz/',
    icon: CodeIcon,
  },
]
