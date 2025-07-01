import { LogoLink } from '@filecoin-foundation/ui/LogoLink'

import { LogoIcon } from '@/components/LogoIcon'

import { DesktopNavigation } from './DesktopNavigation'
import { MobileNavigation } from './MobileNavigation'

export function Navigation() {
  return (
    <nav className="mb-9 flex items-center justify-between lg:justify-start lg:gap-24">
      <div className="shrink-0">
        <LogoLink logo={LogoIcon} />
      </div>
      <MobileNavigation />
      <DesktopNavigation />
    </nav>
  )
}
