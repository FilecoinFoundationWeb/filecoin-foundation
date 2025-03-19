import { LogoLink } from '@/components/LogoLink'

import { DesktopNavigation } from './DesktopNavigation'
import { MobileNavigation } from './MobileNavigation'

export function Navigation() {
  return (
    <nav className="mb-16 flex justify-between gap-12 lg:items-center">
      <LogoLink height={50} />
      <DesktopNavigation />
      <MobileNavigation />
    </nav>
  )
}
