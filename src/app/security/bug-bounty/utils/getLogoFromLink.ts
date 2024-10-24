import {
  GithubLogo,
  Globe,
  LinkedinLogo,
  XLogo,
} from '@phosphor-icons/react/dist/ssr'

export function getLogoFromLink(url: string) {
  const { hostname } = new URL(url)

  if (hostname.includes('linkedin.com')) {
    return LinkedinLogo
  }

  if (hostname.includes('x.com') || hostname.includes('twitter.com')) {
    return XLogo
  }

  if (hostname.includes('github.com')) {
    return GithubLogo
  }

  return Globe
}
