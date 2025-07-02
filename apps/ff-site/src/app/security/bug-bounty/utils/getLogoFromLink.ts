import {
  GithubLogoIcon,
  GlobeIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from '@phosphor-icons/react/dist/ssr'

export function getLogoFromLink(url: string) {
  const { hostname } = new URL(url)

  if (hostname.includes('linkedin.com')) {
    return LinkedinLogoIcon
  }

  if (hostname.includes('x.com') || hostname.includes('twitter.com')) {
    return XLogoIcon
  }

  if (hostname.includes('github.com')) {
    return GithubLogoIcon
  }

  return GlobeIcon
}
