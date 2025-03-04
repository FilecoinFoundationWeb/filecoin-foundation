import { LogoLink } from '@/components/Logo/LogoLink'

import { DesktopNavigation } from './DesktopNavigation'
import { MobileNavigation } from './MobileNavigation'

export function Navigation() {
  return (
    <nav className="mb-6 flex justify-between gap-12 lg:items-center">
      <LogoLink />

      <DesktopNavigation />
      <MobileNavigation />
    </nav>
  )
}
