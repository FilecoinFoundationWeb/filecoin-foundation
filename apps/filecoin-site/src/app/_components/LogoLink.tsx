import type { ComponentType } from 'react'

import Link from 'next/link'

import { PATHS } from '@/constants/paths'

import { LogoBlue } from './LogoBlue'

type LogoLinkProps = {
  height?: number
  logo?: ComponentType<React.SVGProps<SVGSVGElement>>
}

export function LogoLink({ logo: Logo = LogoBlue }: LogoLinkProps) {
  return (
    <Link href={PATHS.HOME.path} aria-label="Go to homepage">
      <Logo />
      <span className="sr-only">Home</span>
    </Link>
  )
}
