import { clsx } from 'clsx'

import { NAV_LINKS, TOUCH_TARGET_NAV_LINK } from '../constants'

import { DesktopLink } from './DesktopLink'

export function DesktopNavigation() {
  return (
    <ul
      aria-label="Navigation options"
      className={clsx(
        TOUCH_TARGET_NAV_LINK.touchAreaOffset,
        'hidden gap-3 lg:flex',
      )}
    >
      {NAV_LINKS.map((link) => (
        <DesktopLink key={link.path} href={link.path} label={link.label} />
      ))}
    </ul>
  )
}
