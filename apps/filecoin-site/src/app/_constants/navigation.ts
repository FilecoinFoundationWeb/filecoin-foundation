import { PATHS } from './paths'
import { FILECOIN_URLS } from './siteMetadata'

type NavItem = { label: string; href: string }

const social: NavItem[] = [
  {
    label: FILECOIN_URLS.social.slack.label,
    href: FILECOIN_URLS.social.slack.href,
  },
  {
    label: FILECOIN_URLS.social.bluesky.label,
    href: FILECOIN_URLS.social.bluesky.href,
  },
  {
    label: FILECOIN_URLS.social.twitter.label,
    href: FILECOIN_URLS.social.twitter.href,
  },
  {
    label: FILECOIN_URLS.social.telegram.label,
    href: FILECOIN_URLS.social.telegram.href,
  },
  {
    label: FILECOIN_URLS.social.discord.label,
    href: FILECOIN_URLS.social.discord.href,
  },
]

const resources: NavItem[] = [
  { label: 'Docs', href: FILECOIN_URLS.docs },
  { label: 'Github', href: FILECOIN_URLS.github },
  { label: 'Security', href: FILECOIN_URLS.security },
  { label: 'Ecosystem Explorer', href: FILECOIN_URLS.ecosystemExplorer },
]

const navigation: NavItem[] = [
  { label: PATHS.BUILD_ON_FILECOIN.label, href: PATHS.BUILD_ON_FILECOIN.path },
  { label: PATHS.STORE_DATA.label, href: PATHS.STORE_DATA.path },
  { label: PATHS.OFFER_STORAGE.label, href: PATHS.OFFER_STORAGE.path },
  { label: PATHS.LEARN.label, href: PATHS.LEARN.path },
  { label: PATHS.BLOG.label, href: PATHS.BLOG.path },
]

export const legalLinks: NavItem[] = [
  { label: PATHS.PRIVACY_POLICY.label, href: PATHS.PRIVACY_POLICY.path },
  { label: PATHS.TERMS_OF_USE.label, href: PATHS.TERMS_OF_USE.path },
]

export const footerNavigationItems: Record<string, NavItem[]> = {
  Navigation: navigation,
  Resources: resources,
  'Reach out': social,
}
