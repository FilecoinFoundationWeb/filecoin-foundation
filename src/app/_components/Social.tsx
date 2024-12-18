import { clsx } from 'clsx'

import { getTouchTargetStyles } from '@/utils/getTouchTargetStyles'
import { socialLinksWithIcons } from '@/utils/socialConfig'

import { Icon } from '@/components/Icon'

const { touchAreaOffset, touchAreaPadding } = getTouchTargetStyles('social')

export function Social() {
  return (
    <ul
      className={clsx(
        'flex flex-wrap items-center justify-between gap-4',
        touchAreaOffset,
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
              className={clsx(
                'focus:brand-outline hover:text-brand-400',
                touchAreaPadding,
              )}
            >
              <Icon component={icon} size={32} weight="light" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
