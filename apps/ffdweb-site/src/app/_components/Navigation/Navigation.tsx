import { LogoLink } from '@/components/Logo/LogoLink'

import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation'
import { MobileNavigation } from './MobileNavigation/MobileNavigation'

export function Navigation() {
  return (
    <nav className="mb-6 flex justify-between gap-12 lg:items-center">
      <LogoLink />

      <DesktopNavigation />
      <MobileNavigation />
    </nav>
  )
}
