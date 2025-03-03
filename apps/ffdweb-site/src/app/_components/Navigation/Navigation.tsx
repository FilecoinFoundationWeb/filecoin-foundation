import { LogoLink } from '@/components/Logo/LogoLink'

import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation'

export function Navigation() {
  return (
    <nav className="mb-6 flex justify-between gap-12 lg:items-center">
      <LogoLink />

      <DesktopNavigation />
    </nav>
  )
}
