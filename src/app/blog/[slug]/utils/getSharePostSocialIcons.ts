import {
  FacebookLogo,
  LinkedinLogo,
  RedditLogo,
  XLogo,
} from '@phosphor-icons/react/dist/ssr'

const URL_PLACEHOLDER = 'currentUrl'
const TEXT_PLACEHOLDER = 'postTitle'

export const sharePostSocialIcons = [
  {
    icon: FacebookLogo,
    label: 'Facebook',
    href: `https://www.facebook.com/sharer/sharer.php?u=${URL_PLACEHOLDER}&quote=${TEXT_PLACEHOLDER}`,
  },
  {
    icon: LinkedinLogo,
    label: 'LinkedIn',
    href: `https://www.linkedin.com/shareArticle?mini=true&url=${URL_PLACEHOLDER}&title=${TEXT_PLACEHOLDER}`,
  },
  {
    icon: RedditLogo,
    label: 'Reddit',
    href: `https://reddit.com/submit?url=${URL_PLACEHOLDER}&title=${TEXT_PLACEHOLDER}`,
  },
  {
    icon: XLogo,
    label: 'X',
    href: `https://twitter.com/share?url=${URL_PLACEHOLDER}&text=${TEXT_PLACEHOLDER}`,
  },
]

export function getSharePostSocialIcons(currentUrl: string, postTitle: string) {
  return sharePostSocialIcons.map(({ icon, label, href }) => ({
    icon,
    label,
    href: href
      .replace('currentUrl', encodeURIComponent(currentUrl))
      .replace('postTitle', encodeURIComponent(postTitle)),
  }))
}
