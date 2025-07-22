import { LogoLink } from '@filecoin-foundation/ui/LogoLink'

import { Logo } from '@/components/Logo'

import { DesktopNavigation } from './DesktopNavigation'
import { MobileNavigation } from './MobileNavigation'

export function Navigation() {
  return (
    <nav className="mb-16 flex justify-between gap-12 lg:items-center">
      <LogoLink logo={Logo} height={50} />
      <DesktopNavigation />
      <MobileNavigation />
    </nav>
  )
}
