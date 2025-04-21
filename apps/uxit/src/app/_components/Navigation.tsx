import Link from 'next/link'

import { GithubLogo } from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/constants/paths'

import Logo from '@/assets/branding/logo.svg'

export function Navigation() {
  return (
    <nav className="mb-16 flex justify-between gap-12 lg:items-center">
      <Link
        className="focus:brand-outline h-fit w-fit"
        href={PATHS.HOME.path}
        aria-label="Go to homepage"
      >
        <Logo height={48} preserveAspectRatio="xMidYMid meet" />
        <span className="sr-only">Home</span>
      </Link>
      <a
        href="https://github.com/FilecoinFoundationWeb/uxit"
        aria-label="View project on GitHub"
        className="focus:brand-outline inline-flex items-center gap-2 hover:opacity-80"
      >
        <GithubLogo size={24} aria-hidden="true" />
        <span className="sr-only">GitHub Repository</span>
      </a>
    </nav>
  )
}
