import Link from 'next/link'

import { PATHS } from '@/constants/paths'

import Logo from '@/assets/branding/logo.svg'

type LogoLinkProps = {
  height?: number
}

export function LogoLink({ height = 64 }: LogoLinkProps) {
  return (
    <Link
      className="focus:brand-outline h-fit w-fit"
      href={PATHS.HOME.path}
      aria-label="Go to homepage"
    >
      <Logo height={height} preserveAspectRatio="xMidYMid meet" />
      <span className="sr-only">Home</span>
    </Link>
  )
}
