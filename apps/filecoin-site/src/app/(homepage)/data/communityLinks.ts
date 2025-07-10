import {
  BookIcon,
  CodeIcon,
  GithubLogoIcon,
  SlackLogoIcon,
} from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_URLS } from '@/constants/siteMetadata'

type CommunityLink = {
  label: string
  href: string
  icon: typeof SlackLogoIcon
}

export const communityLinks: CommunityLink[] = [
  {
    label: 'Chat on Slack',
    href: FILECOIN_URLS.social.slack.href,
    icon: SlackLogoIcon,
  },
  {
    label: 'Get involved on GitHub',
    href: FILECOIN_URLS.github,
    icon: GithubLogoIcon,
  },
  {
    label: 'Explore the documentation',
    href: FILECOIN_URLS.docs,
    icon: BookIcon,
  },
  {
    label: 'Join the Protocol Labs Developer Guild',
    href: 'https://www.pldg.xyz/',
    icon: CodeIcon,
  },
] as const
