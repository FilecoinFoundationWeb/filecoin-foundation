import {
  FacebookLogo,
  LinkedinLogo,
  RedditLogo,
  XLogo,
} from '@phosphor-icons/react/dist/ssr'

export const sharePostSocialIcons = [
  {
    icon: FacebookLogo,
    label: 'Facebook',
    href: `https://www.facebook.com/sharer/sharer.php?u=currentUrl&quote=postTitle`,
  },
  {
    icon: LinkedinLogo,
    label: 'LinkedIn',
    href: `https://www.linkedin.com/shareArticle?mini=true&url=currentUrl&title=postTitle`,
  },
  {
    icon: RedditLogo,
    label: 'Reddit',
    href: `https://reddit.com/submit?url=currentUrl&title=postTitle`,
  },
  {
    icon: XLogo,
    label: 'X',
    href: `https://twitter.com/share?url=currentUrl&text=postTitle`,
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
