import Link from 'next/link'

import { DesktopNavigation } from '@/components/DesktopNavigation'
import { Logo } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'

import { PATHS } from '@/constants/paths'

export function Navigation() {
  return (
    <nav className="mb-6 flex justify-between gap-12 md:items-center">
      <Link
        className="flex-shrink-0 outline-white focus:outline-2"
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
