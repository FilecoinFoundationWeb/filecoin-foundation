import { Icon } from '@filecoin-foundation/ui/Icon'
import { clsx } from 'clsx'

import { socialLinksWithIcons } from '@/utils/socialConfigs'

export type TouchTarget = {
  visibleElementSize?: string | number
  touchAreaOffset?: string
  touchAreaPadding: string
}

const TOUCH_TARGET: TouchTarget = {
  touchAreaPadding: 'p-2',
  touchAreaOffset: '-m-3',
}

export function Social() {
  return (
    <ul
      className={clsx(
        'grid h-full auto-cols-max grid-flow-col gap-6',
        TOUCH_TARGET.touchAreaOffset,
      )}
    >
      {socialLinksWithIcons.map(({ label, href, icon }) => {
        return (
          <li key={label} className="inline-flex">
            <a
              aria-label={`Go to ${label}`}
              href={href}
              rel="noopener noreferrer"
              title={`Go to ${label}`}
              className={clsx(TOUCH_TARGET.touchAreaPadding)}
            >
              <Icon component={icon} size={32} weight="light" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
