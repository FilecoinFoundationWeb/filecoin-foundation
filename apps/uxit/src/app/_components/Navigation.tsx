import { GithubLogoIcon } from '@phosphor-icons/react/dist/ssr'

import { LogoLink } from '@filecoin-foundation/ui/LogoLink'

import { Logo } from '@/components/Logo'

export function Navigation() {
  return (
    <nav className="mb-24 flex justify-between gap-12 lg:items-center">
      <LogoLink logo={Logo} />
      <a
        href="https://github.com/FilecoinFoundationWeb/filecoin-foundation"
        aria-label="View project on GitHub"
        className="focus:brand-outline inline-flex items-center gap-2 hover:opacity-80"
      >
        <GithubLogoIcon size={24} aria-hidden="true" />
        <span className="sr-only">GitHub Repository</span>
      </a>
    </nav>
  )
}
