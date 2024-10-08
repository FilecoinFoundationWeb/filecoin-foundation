import Link from 'next/link'

import { PATHS } from '@/constants/paths'

import { DesktopNavigation } from '@/components/DesktopNavigation'
import { Logo } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'

export function Navigation() {
  return (
    <nav className="mb-6 flex justify-between gap-12 lg:items-center">
      <Link
        className="flex-shrink-0 focus:brand-outline"
        href={PATHS.HOME.path}
        aria-label="Go to homepage"
      >
        <Logo />
        <span className="sr-only">Home</span>
      </Link>

      <MobileNavigation />
      <DesktopNavigation />
    </nav>
  )
}
