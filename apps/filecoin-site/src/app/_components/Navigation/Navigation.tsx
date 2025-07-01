import { LogoLink } from '@filecoin-foundation/ui/LogoLink'

import { LogoIcon } from '@/components/LogoIcon'

import { DesktopNavigation } from './DesktopNavigation'

export function Navigation() {
  return (
    <nav className="mb-9 flex gap-24 lg:items-center">
      <div className="shrink-0">
        <LogoLink logo={LogoIcon} />
      </div>
      <DesktopNavigation />
    </nav>
  )
}
