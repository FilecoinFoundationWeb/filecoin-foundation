import type { ComponentType } from 'react'

import Link from 'next/link'

type LogoLinkProps = {
  logo: ComponentType<React.SVGProps<SVGSVGElement>>
}

export function LogoLink({ logo: Logo }: LogoLinkProps) {
  return (
    <Link className="focus:brand-outline" href="/" aria-label="Go to homepage">
      <Logo />
      <span className="sr-only">Home</span>
    </Link>
  )
}
