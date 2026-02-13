import {
  GithubLogoIcon,
  MapPinIcon,
  MegaphoneIcon,
  SlackLogoIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { LinkCardData } from '@filecoin-foundation/ui-filecoin/LinkCard'
import type { TranslationFunction } from '@/i18n/types'

import {
  FILECOIN_FOUNDATION_URLS,
  FILECOIN_URLS,
} from '@/constants/siteMetadata'

export function getCommunityLinks(t: TranslationFunction): Array<LinkCardData> {
  return [
    {
      title: t('community.chatOnSlack'),
      href: FILECOIN_URLS.social.slack.href,
      icon: SlackLogoIcon,
    },
    {
      title: t('community.attendEvent'),
      href: FILECOIN_FOUNDATION_URLS.events.href,
      icon: MapPinIcon,
    },
    {
      title: t('community.getInvolvedGitHub'),
      href: FILECOIN_URLS.github.href,
      icon: GithubLogoIcon,
    },
    {
      title: t('community.becomeAmbassador'),
      href: FILECOIN_FOUNDATION_URLS.orbit.href,
      icon: MegaphoneIcon,
    },
  ]
}
