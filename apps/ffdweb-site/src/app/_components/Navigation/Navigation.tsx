import { clsx } from 'clsx'

import { LogoLink } from '@/components/Logo/LogoLink'

import { NAV_LINKS, TOUCH_TARGET_NAV_LINK } from './constants'
import { DesktopLink } from './DesktopLink'

export function Navigation() {
  return (
    <nav className="mb-16 flex justify-between gap-12 lg:items-center">
      <LogoLink />

      <div
        className={clsx(TOUCH_TARGET_NAV_LINK.touchAreaOffset, 'flex gap-3')}
      >
        {NAV_LINKS.map((link) => (
          <DesktopLink key={link.path} href={link.path} label={link.label} />
        ))}
      </div>
    </nav>
  )
}
