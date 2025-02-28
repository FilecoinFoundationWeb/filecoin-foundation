import Link from 'next/link'

import { PATHS } from '@/constants/paths'

import { Logo } from './Logo'

export function LogoLink() {
  return (
    <Link
      className="focus:brand-outline h-fit w-fit"
      href={PATHS.HOME.path}
      aria-label="Go to homepage"
    >
      <Logo />
      <span className="sr-only">Home</span>
    </Link>
  )
}
