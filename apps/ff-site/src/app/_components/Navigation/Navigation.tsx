import { LogoLink } from '@filecoin-foundation/ui/LogoLink'

import { Logo } from '@/components/Logo'

import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation'
import { MobileNavigation } from './MobileNavigation/MobileNavigation'

export function Navigation() {
  return (
    <nav className="mb-6 flex justify-between gap-12 lg:items-center">
      <div className="shrink-0">
        <LogoLink logo={Logo} />
      </div>

      <MobileNavigation />
      <DesktopNavigation />
    </nav>
  )
}
